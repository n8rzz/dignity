import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.GCLOUD_CLIENT_API_KEY,
    authDomain: process.env.GCLOUD_CLIENT_AUTH_DOMAIN,
    databaseURL: process.env.GCLOUD_CLIENT_DATABASE_URL,
    projectId: process.env.GCLOUD_CLIENT_PROJECT_ID,
    storageBucket: process.env.GCLOUD_CLIENT_STORAGE_BUCKET,
    messagingSenderId: process.env.GCLOUD_CLIENT_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, firebase };
