'use client'

import useAuth from "@/zustands/auth";
import useTodo from "@/zustands/todo";
import axios from "axios";
import { NextPage } from "next";
import { useCallback, useEffect } from "react";

export const CheckUserProvider: NextPage<ProvidersType> = ({ children }) => {
    const { checkUser, user, loadingUser } = useAuth();
    const { setTodo, setUserId } = useTodo();

    const handleCheckUser = useCallback(async () => {
        if (!user) return;
        
        const API:any = process.env.NEXT_PUBLIC_API_URL;
        try {
            const { data } = await axios.get<UserType[]>(API);
            let userCheck = data.find((el: UserType) => el.uid === user.uid);
            
            if (!userCheck) {
                const newUser = { uid: user.uid, todo: [] };
                const response = await axios.post<UserType[]>(API, newUser);
                userCheck = response.data.find((el: UserType) => el.uid === user.uid);
            }
            
            if (userCheck) {
                const { todo, _id }:any = userCheck;
                setTodo(todo);
                setUserId(_id);
            }
        } catch (error) {
            console.error("Error checking user:", error);
        }
    }, [user, setTodo, setUserId]);

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
