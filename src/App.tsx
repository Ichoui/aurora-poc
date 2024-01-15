import logo from "./assets/logo.png";
import "./App.css";
import { configAxios } from "./axios.config.ts";

function App() {
  // const [count, setCount] = useState(0)
  const [{}, postNotifications] = configAxios({
    url: import.meta.env.VITE_NOTIFICATION_URL,
    method: "POST",
    manual: true,
  });

  const [{ loading: loadToken, error: errorToken }, removeObsoleteTokens] =
    configAxios({
      url: import.meta.env.VITE_OBSOLETE_TOKEN_URL,
      method: "GET",
      manual: true,
    });

  const notificationsKp = () => {
    postNotifications({
      data: { title: "Kp is gros!", description: "Oui c'est vrai" },
    });
  };

  const obsoleteTokens = () => {
    removeObsoleteTokens();
  };
  return (
    <div>
      <img src={logo} className="logo" alt="Logo aurora" />
      <h1>Aurorapp - Services pour notifications</h1>
      <hr />

      <h2>Boutons pour lancer les appels sur demande</h2>
      <div className="btn-call">
        <button onClick={notificationsKp}>Notification KP</button>
      </div>
      <div className="btn-call">
        <button onClick={obsoleteTokens}>Supprimer tokens obsolètes</button>
        {loadToken && !errorToken && <div>Les tokens ont été nettoyés</div>}
      </div>
    </div>
  );
}

export default App;
