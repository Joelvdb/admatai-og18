
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0jJ2G394ZpuJjXWy1E7uI9YWmhT5agVE",
  authDomain: "admatai-d8eac.firebaseapp.com",
  databaseURL: "https://admatai-d8eac.firebaseio.com",
  projectId: "admatai-d8eac",
  storageBucket: "admatai-d8eac.appspot.com",
  messagingSenderId: "602766630887",
  appId: "1:602766630887:web:fd09800b70ddc7cddea742",
  measurementId: "G-XP33PK8F4V"
};
    const app = firebase.initializeApp(firebaseConfig);
    firebase.analytics();


export const db = app.database();