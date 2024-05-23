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

const useAuthUser = create<UseAuthUser>((set)=>({
    user : auth.currentUser,
    loadingUser: true,
    error: {state:false, message: ""},
    isLoading: false,
    createUser: (email, password, photoURL, displayName)=>{
        set({isLoading:true})
        try{
            createUserWithEmailAndPassword(auth, email, password)
                .then(()=>{
                    let user:any = auth.currentUser
                    updateProfile(user, {
                        displayName,
                        photoURL
                    }).then((user)=>{
                        set({user})
                            alert("Регистрация прошла успешно")
                        })
                 })
            
        }catch(e:any){
            set({error:{state: true, message: e.message}})
        }finally{
            set({error:{state: false, message: ""}})
            set({isLoading:false})
        }
    },
    signIn:(email, password)=>{
        set({isLoading:true})
        try{
             signInWithEmailAndPassword(auth, email, password)
             .then((user : any)=>{
                 set({user})
              })

        }catch(e:any){
            set({error:{state: true, message: e.message}})
        }finally{
            set({error:{state: false, message: ""}})
            set({isLoading:false})
        }
    },
    signOutUser:()=>{
        try{
            signOut(auth);
        }catch(e:any){
            set({error:{state: true, message: e.message}})
        }finally{
            set({error:{state: false, message: ""}})
            set({isLoading:false})
        }
    },
    checkUser:()=>{
        set({ loadingUser: true});

        onAuthStateChanged(auth, (user)=>{
            set({user, loadingUser: false});
        }) 
    },
    signInGoogleProvider:async()=> {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithRedirect(auth, provider);
             await getRedirectResult(result);
        } catch (error:any) {
            set({error: {state:true, message:error},})
        }
    }
}))


const useAuth = () => useAuthUser(state=>state);
export default useAuth;