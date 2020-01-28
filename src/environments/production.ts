import environment, { Environment } from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have override anything.
 */
const baseApi = 'http://localhost:3000';
const env = environment(baseApi);

const productionEnv: Environment = {
  ...env,
  route: {
    ...env.route,
    baseRoute: '',
  },
};

export default productionEnv;
