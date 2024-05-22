'use client'
import { useDropdawn } from "@/zustands/Dropdawns"
import { NextPage } from "next"
import { ReactNode } from "react"

const CloseDropdawn:NextPage<ProvidersType> = ({children}):ReactNode => {
    const {isHeaderDropdawn, setIsHeaderDropdawn} = useDropdawn();

    const handleCloseDropdawn = () => {
        if(isHeaderDropdawn == "disabled" || isHeaderDropdawn == "closed") return;
        setIsHeaderDropdawn('closed')
    }
    return (
    <body onClick={handleCloseDropdawn}>
        {children}
    </body>
    )
}

export default CloseDropdawn