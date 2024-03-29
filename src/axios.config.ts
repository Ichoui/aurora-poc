import useAxios from "axios-hooks";

export const headers = {
  Aurora: true,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // 'Access-Control-Allow-Origin': '*',
};

export const axiosUrl = (url: string) => {
  // https://vitejs.dev/guide/env-and-mode.html
  const env: ImportMetaEnv = import.meta.env;
  // if (env.VITE_DEBUG_MODE === 'true' && env.DEV) {
  //   baseUrl = env.VITE_HOST_EMULATOR;
  // } else if (env.VITE_DEBUG_PROD_MODE === 'true' && env.DEV) {
  //   baseUrl = env.VITE_HOST_PROD;
  // } else {
  //   baseUrl = env.VITE_HOST;
  // }
  return env.VITE_HOST +  url;
};

export const configAxios = (props: {
  url?: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  autoCancel?: boolean;
  manual?: boolean;
  useCache?: boolean;
  params?: unknown;
}) => {
  const { url, method, manual = false, autoCancel = true, useCache = false, params } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useAxios({ headers, url: axiosUrl(url!), method, params }, { manual, autoCancel, useCache });
};
