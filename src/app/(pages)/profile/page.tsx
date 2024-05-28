'use client'
import Building from "@/components/building/building"
import Typography from "@/typography/typogrpahy"
import useAuth from "@/zustands/auth"
import { NextPage } from "next"
import { ReactNode } from "react"
import "./profile.css"


const Profile:NextPage = ():ReactNode => {
    const {user, loadingUser} = useAuth();
    
    return user === null && !loadingUser ? (
        <div className="profile_layout">
            <Typography variant="web">
                Авторизуйтесь
            </Typography>
        </div>
    ) : (
        <div className="profile_layout">
            <div className="builder_div" >
                <Building />
            </div>
        </div>
    )
}

export default Profile
