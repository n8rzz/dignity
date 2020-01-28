/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi: string = '') {
    return {
        route: {
            baseRoute: '',
        },
        api: {
            login: `${baseApi}/login`,
            errorExample: 'https://httpstat.us/520',
        },
        env: {
            GCLOUD_SERVER_TYPE: process.env.GCLOUD_SERVER_TYPE,
            GCLOUD_SERVER_PROJECT_ID: process.env.GCLOUD_SERVER_PROJECT_ID,
            GCLOUD_SERVER_PRIVATE_KEY_ID: process.env.GCLOUD_SERVER_PRIVATE_KEY_ID,
            GCLOUD_SERVER_PRIVATE_KEY: process.env.GCLOUD_SERVER_PRIVATE_KEY,
            GCLOUD_SERVER_CLIENT_EMAIL: process.env.GCLOUD_SERVER_CLIENT_EMAIL,
            GCLOUD_SERVER_CLIENT_ID: process.env.GCLOUD_SERVER_CLIENT_ID,
            GCLOUD_SERVER_AUTH_URI: process.env.GCLOUD_SERVER_AUTH_URI,
            GCLOUD_SERVER_TOKEN_URI: process.env.GCLOUD_SERVER_TOKEN_URI,
            GCLOUD_SERVER_AUTH_PROVIDER_X509_CERT_URL: process.env.GCLOUD_SERVER_AUTH_PROVIDER_X509_CERT_URL,
            GCLOUD_SERVER_CLIENT_X509_CERT_URL: process.env.GCLOUD_SERVER_CLIENT_X509_CERT_URL,
            GCLOUD_CLIENT_API_KEY: process.env.GCLOUD_CLIENT_API_KEY,
            GCLOUD_CLIENT_AUTH_DOMAIN: process.env.GCLOUD_CLIENT_AUTH_DOMAIN,
            GCLOUD_CLIENT_DATABASE_URL: process.env.GCLOUD_CLIENT_DATABASE_URL,
            GCLOUD_CLIENT_PROJECT_ID: process.env.GCLOUD_CLIENT_PROJECT_ID,
            GCLOUD_CLIENT_STORAGE_BUCKET: process.env.GCLOUD_CLIENT_STORAGE_BUCKET,
            GCLOUD_CLIENT_MESSAGING_SENDER_ID: process.env.GCLOUD_CLIENT_MESSAGING_SENDER_ID,
            GCLOUD_CLIENT_APP_ID: process.env.GCLOUD_CLIENT_APP_ID,
            GCLOUD_CLIENT_MEASUREMENT_ID: process.env.GCLOUD_CLIENT_MEASUREMENT_ID,
        },
        isServer: typeof window === 'undefined',
        isClient: typeof window !== 'undefined',
        isProduction: true,
        isDevelopment: false,
        isTesting: false,
    };
}

  export type Environment = ReturnType<typeof baseEnv>;
