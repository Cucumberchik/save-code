'use client'
import Typography from "@/typography/typogrpahy"
import "./style.css"
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
                    <Typography variant="web">{"</>"}</Typography>
                </Link>
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