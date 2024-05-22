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