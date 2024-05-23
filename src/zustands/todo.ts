import axios from "axios";
import { create } from "zustand";



const useAppTodo = create<UseAppTodo>((set)=>({
    user_id: null,
    todo: [],
    searching: "",
    dropdawnLanguage: "disabled",
    language: "javascript",
    titleTodo: "",
    isLoading: false,
    setTitleTodo: (title) => set({titleTodo:title}),
    setdropdawnLanguage: (status) => set({dropdawnLanguage: status}),
    setLanguage: (language) => set({language:language}),
    setSearching: (value) => set({searching: value}),
    setUserId: (id) => set({user_id: id}),
    setTodo: (data) => set({todo:data}),
    changeTodo: async( _id, todo) => {
        let API:any = process.env.NEXT_PUBLIC_API_URL;
        set({isLoading: true});
        try {
            const {data} = await axios.patch(`${API}/${_id}`,{todo: todo} );
            let user = data.find((el:UserType)=>el._id == _id);
            set({todo: user.todo})
            
        }
        finally {
            set({isLoading: false});

        }
    },
    postTodo: async(obj, _id, todo) => {
        let API:any = process.env.NEXT_PUBLIC_API_URL;
        set({isLoading: true});
        try {
            const {data} = await axios.patch(`${API}/${_id}`,{todo: [obj, ...todo]} );
            let user = data.find((el:UserType)=>el._id == _id);
            set({todo: user.todo})
            
        }
        finally {
            set({isLoading: false});

        }
    }
}))
const useTodo = () => useAppTodo(state=>state)
export default useTodo