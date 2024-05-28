'use client'
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "@/constants"
import Typography from "@/typography/typogrpahy"
import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode, useState } from "react"

type LanguagesType = {
    language: string,
    title:string
}
const Div = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-alpha-400);
    padding: 0 30px;
    .setting_change_language {
        display: flex;
        gap: 20px;
        
        button {
        padding: 3px 10px;

        }
    }
    select {
        padding: 3px 10px;
        font-size: 16px;
    }
    
`
const DefaultLanguage:NextPage = ():ReactNode => {
    const [storageLanguage, setStorageLanguage] = useState(localStorage.getItem("default_language") || "javascript") 
    const [defaultLanguage, setDefaultLanguage] = useState(localStorage.getItem("default_language") || 'javascript')
    const handleSaveLanguage = () => {
        localStorage.setItem("default_language", defaultLanguage);
        setStorageLanguage(defaultLanguage);
        window.location.reload()
    }
    return (
    <Div className="settings_item">
        <Typography variant="h4">
            Дефолтный язык
        </Typography>
        <div className="setting_change_language">
            <select onChange={(e)=>setDefaultLanguage(e.target.value)} name="change_default_language" id="" defaultValue={defaultLanguage}>
                {Object.keys(LANGUAGE_VERSIONS).map((el:string, idx:number)=>(
                    <option value={el} key={idx}>
                        {Object.keys(CODE_SNIPPETS)[idx]}
                    </option>
                ))}   
            </select>
            {storageLanguage !== defaultLanguage ?
                <button onClick={handleSaveLanguage} >
                    <Typography variant="h5">
                        Сохранить
                    </Typography>
                </button>:
                <></> 
            }
            
        </div>
    </Div>
)
} 


export default DefaultLanguage