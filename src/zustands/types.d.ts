interface UseAuthUser {
  user: User | null;
  error: { state: boolean; message: string };
  isLoading: boolean;
  loadingUser: boolean;

  createUser: (
    email: string,
    password: string,
    photoURL: string,
    displayName: string
  ) => void;
  signIn: (email: string, password: string) => void;
  signOutUser: () => void;
  checkUser: () => void;
  signInGoogleProvider: () => void;
  signInGithubProvider: () => void;
}
interface UseDialogStatus {
  statusLogin: string;
  statusSignin: string;
  statusTodo: string;
  deleteStatus: string;
  openTodoStatus: string;
  setOpenTodo: (status: string) => void;
  setDelete: (status: string) => void;
  setStatusTodo: (status: string) => void;
  setStatusLogin: (status: string) => void;
  setStatusSignin: (status: string) => void;
}

interface UseChangeDropdawn {
  isHeaderDropdawn: string;
  setIsHeaderDropdawn: (newState: string) => void;
}

interface UseAppTodo {
  todo: ElementType[];
  language: string;
  dropdawnLanguage: string;
  titleTodo: string;
  isLoading: boolean;
  code: string;
  date: string;
  setDate: (date) => void;
  setCode: (code) => void;
  setTitleTodo: (title) => void;
  setdropdawnLanguage: (status: string) => void;
  setLanguage: (language: string) => void;
  setTodo: (data: ElementType[]) => void;
  changeTodo: (id:string, todo: ElementType) => void;
  postTodo: (obj: TodoObjType, _id: number | null, todo: ElementType[]) => void;
}

interface UseStateEditorQuery {
  language: string;
  sourceCode: string;
  output: null | OutputType;
  setLanguage: (language: string) => void;
  setSourceCode: (code: string) => void;
  executeCode: (language: string, sourceCode: string) => void;
}
