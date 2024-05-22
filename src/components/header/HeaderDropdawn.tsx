'use client'
import { useDropdawn } from "@/zustands/Dropdawns";
import styled from "@emotion/styled/macro";
import type { NextPage } from "next";
import type { ReactElement } from "react";


export const HeaderDropdawn = () => {
    const {isHeaderDropdawn} = useDropdawn();

    return <div className={"dropdawn dropdawn_header " + isHeaderDropdawn}>
        <ul>
            <li className="dropdawn_item">Заметки</li>
            <li className="dropdawn_item">Профиль</li>
            <li className="dropdawn_item">Настройки</li>
            <button className="dropdawn_item signout">Выйти</button>
        </ul>
    </div>
}

 