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
                    <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80.7262 97C81.44 97 81.9566 96.8093 82.5201 96.26L107.013 72.3821C110.996 68.5002 110.996 62.1279 107.013 58.2459L82.5201 34.3681C81.4307 33.306 80.313 34.7747 79.2236 35.8368C78.1341 36.8988 74.127 37.0401 75.2165 38.1021C75.2165 38.1021 97.9067 60.222 99.7099 61.9799C101.513 63.7378 101.513 66.5943 99.7099 68.3522L75.2165 92.23C74.127 93.2921 77.4486 93.6726 78.538 94.7347C79.1015 95.2474 80.0125 97 80.7262 97Z" fill="url(#paint0_linear_802_8846)"/>
                        <path d="M41.2738 97C40.56 97 40.0434 96.8032 39.4799 96.2365L14.9865 71.6006C11.0045 67.5954 11.0045 61.0208 14.9865 57.0156L39.4799 32.3798C40.5693 31.284 41.687 32.7993 42.7764 33.8951C43.8659 34.9909 47.873 35.1366 46.7835 36.2323C46.7835 36.2323 24.0933 59.0545 22.2901 60.8682C20.487 62.6818 20.487 65.6291 22.2901 67.4428L46.7835 92.0786C47.873 93.1744 44.5514 93.567 43.462 94.6628C42.8985 95.1918 41.9875 97 41.2738 97Z" fill="url(#paint1_linear_802_8846)"/>
                        <path d="M70.7625 15.8193C66.4377 23.3802 64.1124 17.4027 64.1124 17.4027L48.2369 101.181L56.0983 99.7035C57.435 98.3769 70.7625 15.8193 70.7625 15.8193Z" fill="url(#paint2_linear_802_8846)"/>
                        <defs>
                        <linearGradient id="paint0_linear_802_8846" x1="86" y1="3.5" x2="74.9272" y2="118.075" gradientUnits="userSpaceOnUse">
                        <stop offset="0.5" stopColor="white"/>
                        <stop offset="1" stopColor="#999999" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_802_8846" x1="17.5" y1="53" x2="50.7878" y2="127.371" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#999999"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_802_8846" x1="67.5" y1="15" x2="50.5" y2="136" gradientUnits="userSpaceOnUse">
                        <stop offset="0.5" stopColor="white"/>
                        <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </Link>
                <Link className="link_navigation" href='/docs'>Документация</Link>
                <Link className="link_navigation" href='/editor'>Редактор кода</Link>
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



