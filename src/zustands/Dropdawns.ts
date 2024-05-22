import { create } from "zustand";


const useChangeDropdawn = create<UseChangeDropdawn>((set)=>({
    isHeaderDropdawn: "disabled",
    setIsHeaderDropdawn: (newState)=> set({isHeaderDropdawn:newState})
}))

export const useDropdawn = () => useChangeDropdawn(state=>state)