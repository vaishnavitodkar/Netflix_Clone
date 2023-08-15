import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBYwlnqANTo5aq4Tu1oiHqXg8FYKR7VqEg",
  authDomain: "netflix-clone-5280a.firebaseapp.com",
  projectId: "netflix-clone-5280a",
  storageBucket: "netflix-clone-5280a.appspot.com",
  messagingSenderId: "549767039871",
  appId: "1:549767039871:web:830304286631727e18284a",
  measurementId: "G-8FNMRX7K7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);
export default app;