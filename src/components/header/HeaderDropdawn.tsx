'use client'
import Typography from "@/typography/typogrpahy";
import { useDropdawn } from "@/zustands/Dropdawns";
import useAuth from "@/zustands/auth";
import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";

type LiType = {
    title: string,
    to: string
}

export const HeaderDropdawn:NextPage = ():ReactElement => {
    const {isHeaderDropdawn, setIsHeaderDropdawn} = useDropdawn();
    const {signOutUser} = useAuth();

    const lis:LiType[] = [
        {title:"Заметки", to: "/todo"},
        {title:"Профиль", to: "/profile"},
        {title:"Настройки", to: "/settings"},

    ]
    return <div className={"dropdawn dropdawn_header " + isHeaderDropdawn} onClick={(e)=>e.stopPropagation()} >
        <ul>
            {lis.map((el:LiType, idx:number)=>(
                <li className="dropdawn_item" key={idx} onClick={()=>setIsHeaderDropdawn('close')}>
                    <Link href={el.to}>{el.title}</Link>
                </li>
            ))}
            <button onClick={signOutUser} className="dropdawn_item dropdawn_item">
                <Typography variant="body">Выйти</Typography>
            </button>
        </ul>
    </div>
}

 