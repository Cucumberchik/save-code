'use client'

import useAuth from "@/zustands/auth"
import useTodo from "@/zustands/todo";
import axios from "axios";
import { NextPage } from "next"
import {  useEffect } from "react";

export const CheckUserProvider:NextPage<ProvidersType> = ({children}) => {
    const {checkUser, user, loadingUser} = useAuth();
    const {setTodo, setUserId} = useTodo();
    
    const handleCheckUser =async() => {
        let API:any = process.env.NEXT_PUBLIC_API_URL;
        try{
            const {data} = await axios<UserType[]>(API);
            const userCheck = data.find((el:UserType)=>el.uid == user?.uid)
                
            if(!userCheck){
                let obj:any = { uid :user?.uid, todo:[]}

                const {data} = await axios.post<UserType[]>(API, obj);
                const userCheck = data.find((el:UserType)=>el.uid == user?.uid);
                const {todo, _id}:any = userCheck
                setTodo(todo);
                setUserId(_id);
                     
                return;
            }
                const {todo, _id}:any = userCheck
                setTodo(todo);
                setUserId(_id);
                
        }catch(e){
                
        }
        finally{
                
        }
    }
    useEffect(()=>{
        checkUser()
    },[checkUser])
    useEffect(()=>{
        if(user !== null) {
            handleCheckUser()
        }
    },[loadingUser])
    
    return children
}