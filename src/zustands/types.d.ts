interface UseAuthUser {
    user: User | null,
    error: {state:boolean, message:string},
    isLoading: boolean,
    loadingUser: boolean,

    createUser:(email:string, password:string)=> void,
    signIn:(email:string, password:string)=> void,
    signOutUser:()=> void,
    checkUser:()=>void,
    signInGoogleProvider: ()=>void,
}
interface UseDialogStatus {
    statusLogin: string,
    statusSignin: string,
    setStatusLogin: (status:string) => void,
    setStatusSignin: (status:string) => void
}

interface UseChangeDropdawn {
    isHeaderDropdawn: string,
    setIsHeaderDropdawn: (newState:string) => void
}