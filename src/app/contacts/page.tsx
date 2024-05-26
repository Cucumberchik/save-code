'use client'
import Building from "@/components/building/building"
import Typography from "@/typography/typogrpahy"
import useAuth from "@/zustands/auth"
import { NextPage } from "next"
import { ReactNode } from "react"

const Contancts:NextPage = ():ReactNode => {
    const {user, loadingUser} = useAuth();
    
    return user === null && !loadingUser ? (
        <section id="contacts" >
            <Typography variant="web">
                Авторизуйтесь
            </Typography>
        </section>
    ) : (
        <section id="contacts" >
            <div style={{width: "100%", height: "80vh", display: "flex", alignItems: 'center', justifyContent: "center"}}>
                <Building />
            </div>
        </section>
    )
}

export default Contancts
