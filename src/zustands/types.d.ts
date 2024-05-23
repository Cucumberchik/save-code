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
    deleteStatus:string,
    setDelete: (status:string) => void,
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
    language: string,
    dropdawnLanguage: string,
    titleTodo: string,
    isLoading: boolean,
    setTitleTodo: (title) => void,
    setdropdawnLanguage: (status:string) => void,
    setLanguage: (language:string) => void,
    setSearching: (value:string) => void,
    setUserId: (id:number) => void,
    setTodo: (data:ElementType[]) => void,
    postTodo: (obj:TodoObjType, _id:number | null ,todo:ElementType[]) => void
}