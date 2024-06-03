"use client";
import axios from "axios";
import { create } from "zustand";

const useAppTodo = create<UseAppTodo>((set) => ({
  todo: [],
  dropdawnLanguage: "disabled",
  language: "javascript",
  titleTodo: "",
  isLoading: false,
  code: "",
  date: "",
  setDate: (date) => set({ date }),
  setCode: (code) => set({ code }),
  setTitleTodo: (title) => set({ titleTodo: title }),
  setdropdawnLanguage: (status) => set({ dropdawnLanguage: status }),
  setLanguage: (language) => set({ language: language }),
  setTodo: (data) => set({ todo: data }),
  changeTodo: async (id, todo) => {
    let API: any = process.env.NEXT_PUBLIC_API_URL;
    set({ isLoading: true });
    try {
      const { data } = await axios.patch(`${API}/patch-code/${id}`, todo);
      set({ todo: data });
    } finally {
      set({ isLoading: false });
    }
  },
  postTodo: async (obj, id) => {
    let API: any = process.env.NEXT_PUBLIC_API_URL;
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`${API}/post-code/${id}`, obj);
      set({ todo: data });
    } finally {
      set({ isLoading: false });
    }
  },
}));
const useTodo = () => useAppTodo((state) => state);
export default useTodo;
