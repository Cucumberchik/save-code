"use client"
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

    
    
    const languages = ["javascript","typescript","python","java","csharp","php"]
    return (
        <div className="info_save_code">
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
        </div>
    )
}


export default SaveCodeElement