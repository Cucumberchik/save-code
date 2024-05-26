'use client'
import Typography from "@/typography/typogrpahy"
import "./style.scss"
import { NextPage } from "next"
import { ReactNode } from "react"
import Link from "next/link"
import useAuth from "@/zustands/auth"
import { useDialogStatus } from "@/zustands/Dialogs"
import {HeaderDropdawn} from "./HeaderDropdawn"
import { useDropdawn } from "@/zustands/Dropdawns"


const Header:NextPage = ():ReactNode => {
    const {user} = useAuth();
    const {setStatusLogin, setStatusSignin} = useDialogStatus();
    const {setIsHeaderDropdawn} = useDropdawn()
    return (
    <header className="d-f-c">
        <div className="container">
            <nav className="header_nav">
                <Link href='/' className="logo">
                    <svg style={{color: "currentcolor", width: "40px", height: "40px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </Link>
                <Link href='/docs'>Документация</Link>
                <Link href='/editor'>Редактор кода</Link>
            </nav>
            {
                user == null ?
                <div className="authentification">
                    <button className="signin" onClick={()=>setStatusSignin('opened')}>
                        <Typography variant="body" >Войти</Typography>
                    </button>
                    <button className="login" onClick={()=>setStatusLogin('opened')} >
                        <Typography variant="body" >Регистрация</Typography> 
                    </button>
                </div> : 
                <div className="user_navigation">
                    <button className="user_info" onClick={()=>setIsHeaderDropdawn('open')} >
                        <Typography variant="body">
                            {user?.displayName}
                        </Typography>
                        <img src={user?.photoURL} alt="photoURL" />
                    </button>
                    <HeaderDropdawn />
                </div>
            }
        </div>
    </header>
    )
}

export default Header



