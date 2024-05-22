'use client'

import useAuth from "@/zustands/auth"
import { NextPage } from "next"
import { useEffect } from "react";

export const CheckUserProvider:NextPage<ProvidersType> = ({children}) => {
    const {checkUser, user} = useAuth();
    useEffect(()=>{
        checkUser()
    },[checkUser])
    
    return children
}