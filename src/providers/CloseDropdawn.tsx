'use client'
import { useDropdawn } from "@/zustands/Dropdawns"
import useTodo from "@/zustands/todo"
import { NextPage } from "next"
import { ReactNode, useEffect } from "react"

const CloseDropdawn:NextPage<ProvidersType> = ({children}):ReactNode => {
    const {isHeaderDropdawn, setIsHeaderDropdawn} = useDropdawn();
    const {setLanguage} = useTodo()
    useEffect(()=>{
        setLanguage(localStorage.getItem("default_language") || "javascript")
    },[])

    const handleCloseDropdawn = () => {
        
        if(isHeaderDropdawn === "disabled" || isHeaderDropdawn === "close") {
            return;
        };
        setIsHeaderDropdawn('close')
    }
    return (
    <body onClick={handleCloseDropdawn}>
        {children}
    </body>
    )
}

export default CloseDropdawn