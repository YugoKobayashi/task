import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ_B7-utlcJcoIyXwjvXXFnd8hVX5IlDA",
  authDomain: "vite-project-2342b.firebaseapp.com",
  projectId: "vite-project-2342b",
  storageBucket: "vite-project-2342b.appspot.com",
  messagingSenderId: "953601976185",
  appId: "1:953601976185:web:40bf0055bc8e4fc58331a8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ここだけ少し変更しています
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");