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
        isServer: typeof window === 'undefined',
        isClient: typeof window !== 'undefined',
        isProduction: true,
        isDevelopment: false,
        isTesting: false,
        gcloudServerType: process.env.GCLOUD_SERVER_TYPE,
        gcloudServerProjectId: process.env.GCLOUD_SERVER_PROJECT_ID,
        gcloudServerPrivateKeyId: process.env.GCLOUD_SERVER_PRIVATE_KEY_ID,
        gcloudServerPrivateKey: process.env.GCLOUD_SERVER_PRIVATE_KEY,
        gcloudServerClientEmail: process.env.GCLOUD_SERVER_CLIENT_EMAIL,
        gcloudServerClientId: process.env.GCLOUD_SERVER_CLIENT_ID,
        gcloudServerAuthUri: process.env.GCLOUD_SERVER_AUTH_URI,
        gcloudServerTokenUri: process.env.GCLOUD_SERVER_TOKEN_URI,
        gcloudServerAuthProviderX509CertUrl: process.env.GCLOUD_SERVER_AUTH_PROVIDER_X509_CERT_URL,
        gcloudServerClientX509CertUrl: process.env.GCLOUD_SERVER_CLIENT_X509_CERT_URL,
        gcloudClientApiKey: process.env.GCLOUD_CLIENT_API_KEY,
        gcloudClientAuthDomain: process.env.GCLOUD_CLIENT_AUTH_DOMAIN,
        gcloudClientDatabaseUrl: process.env.GCLOUD_CLIENT_DATABASE_URL,
        gcloudClientProjectId: process.env.GCLOUD_CLIENT_PROJECT_ID,
        gcloudClientStorageBucket: process.env.GCLOUD_CLIENT_STORAGE_BUCKET,
        gcloudClientMessagingSenderId: process.env.GCLOUD_CLIENT_MESSAGING_SENDER_ID,
        gcloudClientAppId: process.env.GCLOUD_CLIENT_APP_ID,
        gcloudClientMeasurementId: process.env.GCLOUD_CLIENT_MEASUREMENT_ID,
    };
}

  export type Environment = ReturnType<typeof baseEnv>;
