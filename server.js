const dotenv = require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');
const next = require('next');
// const admin = require('firebase-admin');

dotenv.config();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const firebaseAppConfig = {
//     credential: admin.credential.cert({
//         type: process.env.GCLOUD_SERVER_TYPE,
//         project_id: process.env.GCLOUD_SERVER_PROJECT_ID,
//         private_key_id: process.env.GCLOUD_SERVER_PRIVATE_KEY_ID,
//         private_key: process.env.GCLOUD_SERVER_PRIVATE_KEY,
//         client_email: process.env.GCLOUD_SERVER_CLIENT_EMAIL,
//         client_id: process.env.GCLOUD_SERVER_CLIENT_ID,
//         auth_uri: process.env.GCLOUD_SERVER_AUTH_URI,
//         token_uri: process.env.GCLOUD_SERVER_TOKEN_URI,
//         auth_provider_x509_cert_url: process.env.GCLOUD_SERVER_AUTH_PROVIDER_X509_CERT_URL,
//         client_x509_cert_url: process.env.GCLOUD_SERVER_CLIENT_X509_CERT_URL,
//     }),
// };
// const firebase = admin.initializeApp(firebaseAppConfig, 'server');


app.prepare().then(() => {
    const server = express();

    if (process.env.NODE_ENV === 'production') {
        server.use(morgan(process.env.LOG_FORMAT || 'combined'));
    }

    server.use(bodyParser.json());
    server.use(session({
        secret: 'threeve',
        saveUninitialized: true,
        store: new FileStore({ secret: 'threeve' }),
        resave: false,
        rolling: true,
        cookie: { maxAge: 604800000, httpOnly: true },
    }));
    // server.use((req, res, next) => {
    //     req.firebaseServer = firebase;

    //     next();
    // });

    // server.post('/api/login', (req, res) => {
    //     if (!req.body) {
    //         res.sendStatus(400);

    //         return;
    //     }

    //     const token = req.body.token;

    //     firebase.auth()
    //         .verifyIdToken(token)
    //         .then((decodedToken) => {
    //             req.session.decodedToken = decodedToken;

    //             return decodedToken;
    //         })
    //         .then((decodedToken) => res.json({ status: true, decodedToken }))
    //         .catch((error) => res.json({ error }));
    // });

    // server.post('/api/logout', (req, res) => {
    //     req.session.decodedToken = null;
    //     res.json({ status: true });
    // });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) {
            throw err;
        }

        console.log(`Listening on http://localhost:${port}`);
    });

    process.on('SIGINT', () => {
        console.info('SIGINT');

        process.exit(0)
    });
});
