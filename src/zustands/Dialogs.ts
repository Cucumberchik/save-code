import { create } from "zustand";

const useDialogProps = create<UseDialogStatus>((set)=>({
    statusLogin: "disabled",
    statusSignin: "disabled",
    statusTodo:"disabled",
    setStatusTodo: (status) => set({statusTodo:status}),
    setStatusSignin: (status) => set({statusSignin:status}),
    setStatusLogin: (status) => set({statusLogin:status})
}))

export const useDialogStatus = () => useDialogProps(state=>state)