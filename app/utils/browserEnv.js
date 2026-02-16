import { getBrowserEnvironment } from '../env.server';

function isBrowser() {
  return typeof window !== "undefined";
}

function getBrowserEnv() {
  return isBrowser() ? window.ENV : getBrowserEnvironment();
}
// The above values are also set in root.tsx in window variable using a script tag `window.ENV = ${JSON.stringify(data.ENV)}`

export default getBrowserEnv;