'use client'
import Typography from "@/typography/typogrpahy";
import { useDropdawn } from "@/zustands/Dropdawns";
import useAuth from "@/zustands/auth";
import styled from "@emotion/styled/macro";
import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";


export const HeaderDropdawn = () => {
    const {isHeaderDropdawn} = useDropdawn();
    const {signOutUser} = useAuth();


    return <div className={"dropdawn dropdawn_header " + isHeaderDropdawn} onClick={(e)=>e.stopPropagation()} >
        <ul>
            <li className="dropdawn_item">
                <Link href='/todo'>Заметки</Link>
            </li>
            <li className="dropdawn_item">
                <Link href='/profile'>Профиль</Link>
            </li>
            <li className="dropdawn_item">
                <Link href='/settings'>Настройки</Link>
            </li>
            <button onClick={signOutUser} className="dropdawn_item dropdawn_item">
                <Typography variant="body">Выйти</Typography>
            </button>
        </ul>
    </div>
}

 