import { create } from "zustand";

const useDialogProps = create<UseDialogStatus>((set)=>({
    statusLogin: "disabled",
    statusSignin: "disabled",
    setStatusSignin: (status) => set({statusSignin:status}),
    setStatusLogin: (status) => set({statusLogin:status})
}))

export const useDialogStatus = () => useDialogProps(state=>state)