import { create } from "zustand";



const useAppTodo = create<UseAppTodo>((set)=>({
    user_id: null,
    todo: [],
    searching: "",
    dropdawnLanguage: "disabled",
    language: "javascript",
    titleTodo: "",
    setTitleTodo: (title) => set({titleTodo:title}),
    setdropdawnLanguage: (status) => set({dropdawnLanguage: status}),
    setLanguage: (language) => set({language:language}),
    setSearching: (value) => set({searching: value}),
    setUserId: (id) => set({user_id: id}),
    setTodo: (data) => set({todo:data}),
}))
const useTodo = () => useAppTodo(state=>state)
export default useTodo