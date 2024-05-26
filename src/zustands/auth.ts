import {
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getRedirectResult, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithRedirect, 
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "@/firebase";
import { create } from "zustand";
 
const useAuthUser = create<UseAuthUser>((set) => ({
    user: auth.currentUser,
    loadingUser: true,
    error: { state: false, message: "" },
    isLoading: false,
    
    createUser: async (email, password, photoURL, displayName) => {
        set({ isLoading: true });
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user:any = auth.currentUser;
            await updateProfile(user, { displayName, photoURL });
            set({ user });
            alert("Регистрация прошла успешно");
        } catch (e:any) {
            set({ error: { state: true, message: e.message } });
        } finally {
            set({ isLoading: false, error: { state: false, message: "" } });
        }
    },
    
    signIn: async (email, password) => {
        set({ isLoading: true });
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user });
        } catch (e:any) {
            set({ error: { state: true, message: e.message } });
        } finally {
            set({ isLoading: false, error: { state: false, message: "" } });
        }
    },
    
    signOutUser: async () => {
        set({ isLoading: true });
        try {
            await signOut(auth);
            set({ user: null });
        } catch (e:any) {
            set({ error: { state: true, message: e.message } });
        } finally {
            set({ isLoading: false, error: { state: false, message: "" } });
        }
    },
    
    checkUser: () => {
        set({ loadingUser: true });
        onAuthStateChanged(auth, (user) => {
            set({ user, loadingUser: false });
        });
    },
    
    signInGoogleProvider: async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);
            await getRedirectResult(auth);
        } catch (e:any) {
            set({ error: { state: true, message: e.message } });
        }
    }
}));

const useAuth = () => useAuthUser(state => state);
export default useAuth;