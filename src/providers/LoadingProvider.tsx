'use client'
import useAuth from "@/zustands/auth";
import useEditor from "@/zustands/editor";
import useTodo from "@/zustands/todo";
import { NextPage } from "next";
import { ReactNode, useEffect } from "react";

const LoadingProvider:NextPage<ProvidersType> = ({children}):ReactNode => {
    const {setLanguage, } = useEditor();
    const {loadingUser}  = useAuth();
    
    useEffect(()=>{
        setLanguage(localStorage.getItem("default_language") || 'javascript')
    },[])
    return loadingUser ? <h1 style={{textAlign:"center"}}>loading...</h1> : children
}

export default LoadingProvider