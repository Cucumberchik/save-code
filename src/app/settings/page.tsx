'use client'
import Typography from "@/typography/typogrpahy";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import type { ReactNode } from "react";

const Section = styled.section`
    width: 100%;
    height: 90vh;

    .container {
        width: 83%;
        height: 95%;
        border: 1px solid var(--gray-alpha-400);
        border-radius: 18px;
        overflow: hidden;
    }
    .setting_info {
        width: 100%;
        height: 55px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        background: var(--gray-alpha-100);
        border-bottom: 1px solid var(--gray-alpha-300);
    }
`

const Settings:NextPage = ():ReactNode => {

    return (
        <Section className="d-f-c">
            <div className="container">
                <div className="setting_info">
                    <Typography variant="h2">Настройки</Typography>
                </div>
            </div>
        </Section>
    )
}

export default Settings