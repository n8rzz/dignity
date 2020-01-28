import environment, { Environment } from './base';

const baseApi = 'http://localhost:3000';
const env = environment(baseApi);

const testEnv: Environment = {
  ...env,
  isProduction: false,
  isDevelopment: true,
  isTesting: true,
};

export default testEnv;
