'use client'
import Typography from "@/typography/typogrpahy";
import { useDialogStatus } from "@/zustands/Dialogs";
import useTodo from "@/zustands/todo";
import { Editor } from "@monaco-editor/react";
import { NextPage } from "next";
import { ReactNode } from "react";


const TodoCard:NextPage<{el:ElementType, idx:number, setIdTodo:(id:number)=>void}> = ({el, idx, setIdTodo}):ReactNode => {
    const { setTitleTodo, setDate, setCode} = useTodo();
    const { setDelete, setOpenTodo} = useDialogStatus();

    const handleCopyText = (text:string) => {
        navigator.clipboard.writeText(text)
    }
    
    return (
    <div className="todo_item">
        <div className="item_title">
            <div className="name_todo">
                <Typography variant="h4" >{el.note} </Typography>
                <Typography variant="body">{el.date.split(' ')[2]} {el.date.split(' ')[3]} {el.date.split(' ')[4] + " "}</Typography>
            </div>
            <span className="lanuage_item">{el.language}</span>
            <div className="card_btns">
                <button onClick={()=>handleCopyText(el.code)}>
                    <svg data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" aria-hidden="true" style={{color: "currentcolor", width: "20px", height: "20px"}}><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg>
                </button>
            </div>
        </div>
        <div className="code_block">
            <Editor
                options={{
                    minimap: {
                        enabled: false,
                    },
                    readOnly:true,
                    scrollBeyondLastLine: false,
                    scrollbar: {
                        vertical: 'hidden',
                        horizontal: 'hidden'
                    },    
                    fontSize: 14,
                    fontFamily: '"Azeret Mono", var(--font-family)',
                    contextmenu: false,
                    overviewRulerLanes: 0,
                    renderLineHighlight: "none"
                }}
                height={`${22 * el.code.split("\n").length}px`}
                theme="vs-dark"
                language={el.language}
                value={el.code} 
            />
        </div>
        <div className="action_btn">
            <button className="open_btn" onClick={()=>{
                setOpenTodo('opened');
                setTitleTodo(el.note);
                setCode(el.code);
                setDate(el.date);
                }} >
                <Typography variant="body">Открыть</Typography>
            </button>
            <button className="delete_btn" onClick={()=>{
                setDelete('opened');
                setIdTodo(idx)
                }} >
                <Typography variant="body">Удалить</Typography>
            </button>
        </div>
    </div>
    )
}

export default TodoCard