import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuk-lJRpaD7Bcub-ImESiJTMOkHrK0Jak",
  authDomain: "yt-clone-31c77.firebaseapp.com",
  projectId: "yt-clone-31c77",
  appId: "1:649969875124:web:00fe6b38806cdc4059bfe1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
  }
  
  /**
   * Signs the user out.
   * @returns A promise that resolves when the user is signed out.
   */
  export function signOut() {
    return auth.signOut();
  }
  
  /**
   * Trigger a callback when user auth state changes.
   * @returns A function to unsubscribe callback.
   */
  export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  }