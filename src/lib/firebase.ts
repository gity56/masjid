import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGay-VRwfS61H7lJJqDPUL6h2QWov0LHU",
  authDomain: "jam3-f2179.firebaseapp.com",
  projectId: "jam3-f2179",
  storageBucket: "jam3-f2179.firebasestorage.app",
  messagingSenderId: "82749120521",
  appId: "1:82749120521:web:f3be894babedf200c858d8",
  measurementId: "G-2Y1X8TQ9SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };