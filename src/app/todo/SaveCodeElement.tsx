"use client"
import Typography from "@/typography/typogrpahy";
import useTodo from "@/zustands/todo";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { ReactElement, useState } from "react";

const Box = styled.div`
    position: relative;
    border-radius: 8px;
    width: 100%;
    height: 60px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .change_language {
        background-color: var(--background-300);
        border: 1px solid var(--gray-alpha-400);
        padding: 8px 15px;
        border-radius: 6px;
    }
    input {
        transition: .15s;
        width: 70%;
        height: 38px;
        padding: 5px 10px;
        background-color: var(--background-300);
        border: 1px solid var(--gray-alpha-400);
        border-radius: 6px;
        outline: none;

        &:focus {
        border: 1px solid var(--gray-alpha-600);

        }
    }
    button {
        padding: 3px 12px;
        border-radius: 5px;
    }
    .save_btn {
        
        background: var(--gray-alpha-1000);
        color: black;
        border: none;
        &:hover {
            background: var(--gray-alpha-950);
        }
    }
    .close_btn {
        background-color: var(--background-300);
        border: 1px solid var(--gray-alpha-400);
    }
`

const SaveCodeElement:NextPage<{handleSandCode:()=>void, handleCloseWindow:()=>void,}> = ({handleSandCode, handleCloseWindow}):ReactElement => {
    const {
        titleTodo, 
        dropdawnLanguage, 
        language, 
        setdropdawnLanguage, 
        setLanguage,
        setTitleTodo
    } = useTodo();

    
    
    const languages = ["javascript","typescript","python","java","csharp","php"]
    return (
        <Box className="info_save_code">
            <button className="change_language" onClick={()=>setdropdawnLanguage('oped')} >
                <Typography variant="body">
                    {language}
                </Typography>
            </button>
           <div className={"dropdawn dropdawn_add_todo " + dropdawnLanguage} onClick={(e)=>e.stopPropagation()} >
            <ul>
                {languages.map((el:string, idx:number)=>(
                    <button className="dropdawn_item" key={idx} onClick={()=>{
                        setdropdawnLanguage('close');
                        setLanguage(el)
                    }}>
                        {el}
                    </button>
                ))}
            </ul>
           </div>
           <input value={titleTodo} onChange={({target})=>setTitleTodo(target.value)} type="text" placeholder="Название" />
           <button className="save_btn" onClick={handleSandCode} >
                <Typography variant="h4">
                Сохранить
                </Typography>
           </button>
           <button className="close_btn" onClick={handleCloseWindow} >
                <Typography variant="h4">
                Закрыть
                </Typography>
           </button>
        </Box>
    )
}


export default SaveCodeElement