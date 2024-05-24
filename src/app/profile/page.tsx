'use client'
import Typography from "@/typography/typogrpahy"
import useAuth from "@/zustands/auth"
import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode } from "react"

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Profile:NextPage = ():ReactNode => {
    const {user, loadingUser} = useAuth();
    // console.log(user);
    
    return user === null && !loadingUser ? (
        <Section>
            <Typography variant="web">
                Авторизуйтесь
            </Typography>
        </Section>
    ) : (
        <Section>
            <div className="container">
                
            </div>
        </Section>
    )
}

export default Profile
