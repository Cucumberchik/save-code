'use client'
import { useDropdawn } from "@/zustands/Dropdawns"
import { NextPage } from "next"
import { ReactNode } from "react"

const CloseDropdawn:NextPage<ProvidersType> = ({children}):ReactNode => {
    const {isHeaderDropdawn, setIsHeaderDropdawn} = useDropdawn();

    const handleCloseDropdawn = () => {
        
        if(isHeaderDropdawn === "disabled" || isHeaderDropdawn === "close") {
            return;
        };
        setIsHeaderDropdawn('close')
    }
    return (
    <body >
        <main onClick={handleCloseDropdawn}>
            {children}
        </main>
    </body>
    )
}

export default CloseDropdawn