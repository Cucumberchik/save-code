'use client'

import useAuth from "@/zustands/auth";
import useTodo from "@/zustands/todo";
import axios from "axios";
import { NextPage } from "next";
import { useCallback, useEffect } from "react";

export const CheckUserProvider: NextPage<ProvidersType> = ({ children }) => {
    const { checkUser, user, loadingUser } = useAuth();
    const { setTodo } = useTodo();

    const handleCheckUser = useCallback(async () => {
        if (!user) return;
        
        const API:any = process.env.NEXT_PUBLIC_API_URL;
        try {
            const { data } = await axios.get<UserType[]>(`${API}/code/${user.uid}`);
            
            
            if (!data) {
                const newUser = { uid: user.uid, todo: [] };
                await axios.post<UserType[]>(API, newUser);
                setTodo([])
            }
            
            if (data) {
                const reqData:any = data
                setTodo(reqData);
            }
        } catch (error) {
            console.error("Error checking user:", error);
        }
    }, [user, setTodo]);

    useEffect(() => {
        checkUser();
    }, [checkUser]);

    useEffect(() => {
        if (!loadingUser && user) {
            handleCheckUser();
        }
    }, [loadingUser, user, handleCheckUser]);

    return <>{children}</>;
};
