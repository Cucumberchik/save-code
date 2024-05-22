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
    statusTodo: string,
    setStatusTodo: (status:string) => void,
    setStatusLogin: (status:string) => void,
    setStatusSignin: (status:string) => void
}

interface UseChangeDropdawn {
    isHeaderDropdawn: string,
    setIsHeaderDropdawn: (newState:string) => void
}

interface UseAppTodo {
    user_id: number | null,
    todo: ElementType[],
    searching: string,
    setSearching: (value:string) => void,
    setUserId: (id:number) => void,
    setTodo: (data:ElementType[]) => void
}