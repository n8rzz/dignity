import environment, { Environment } from './base';

const baseApi = 'http://localhost:3000';
const env = environment(baseApi);

const developmentEnv: Environment = {
  ...env,
  api: {
    ...env.api,
    // error200: `${baseApi}/api/v1/error-200`,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
