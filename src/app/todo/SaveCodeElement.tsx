"use client"
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "@/constants";
import Typography from "@/typography/typogrpahy";
import useTodo from "@/zustands/todo";
import { NextPage } from "next";
import { ReactElement } from "react";


const SaveCodeElement:NextPage<{handleSandCode:()=>void, handleCloseWindow:()=>void,}> = ({handleSandCode, handleCloseWindow}):ReactElement => {
    const {
        titleTodo, 
        dropdawnLanguage, 
        language, 
        setdropdawnLanguage, 
        setLanguage,
        setTitleTodo
    } = useTodo();

    
    const indexLanguage = Object.keys(LANGUAGE_VERSIONS).findIndex((item:string)=>item == language);
    
    const languages = ["javascript","typescript","python","java","csharp","php"]
    return (
        <div className="info_save_code">
            <button className="change_language" onClick={()=>setdropdawnLanguage('oped')} >
                <Typography variant="body">
                    {Object.keys(CODE_SNIPPETS)[indexLanguage]}
                </Typography>
            </button>
           <div className={"dropdawn dropdawn_add_todo " + dropdawnLanguage} onClick={(e)=>e.stopPropagation()} >
            <ul>
                {Object.keys(LANGUAGE_VERSIONS).map((el:string, idx:number)=>(
                    <li key={idx}  className="title_16_500" onClick={()=>{
                        setdropdawnLanguage('close');
                        setLanguage(el)
                        }}>
                            {Object.keys(CODE_SNIPPETS)[idx]}
                            
                    </li>
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
        </div>
    )
}


export default SaveCodeElement