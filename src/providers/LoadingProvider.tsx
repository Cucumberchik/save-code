'use client'
import useAuth from "@/zustands/auth";
import { NextPage } from "next";
import { ReactNode } from "react";




const LoadingProvider:NextPage<ProvidersType> = ({children}):ReactNode => {
    const {loadingUser}  = useAuth();
    
    return loadingUser ? <h1 style={{textAlign:"center"}}>loading...</h1> : children
}

export default LoadingProvider