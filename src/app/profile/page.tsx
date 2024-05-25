'use client'
import Building from "@/components/building/building"
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
            <div style={{width: "100%", height: "80vh", display: "flex", alignItems: 'center', justifyContent: "center"}}>
                <Building />
            </div>
        </Section>
    )
}

export default Profile
