'use client'

import Typography from "@/typography/typogrpahy"
import { useDialogStatus } from "@/zustands/Dialogs"
import useTodo from "@/zustands/todo"
import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode, useRef, useState } from "react"
import DialogAddTodo from "./AddTodo"
import DeleteDialog from "./DeleteDialog"
import OpenTodo from "./OpenTodo"
import { Editor } from "@monaco-editor/react"
import useAuth from "@/zustands/auth"

let Section = styled.section`
    width: 100%;
    /* height: 100vh; */
    
    .container {
        width: var(--container-size);
        height: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;
        gap: 22px;
    }
    .info_todo {
        width: 80%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .searching {
            width: 60%;
            border: 1px solid var(--gray-alpha-500);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5px;
            border-radius: 5px;
            input {
                width: 100%;
                height: 35px;
                padding: 0 10px;
                border: none;
                background: none;
                outline: none;
            }
        }
        button {
            padding: 6px 30px;
            background: var(--gray-alpha-1000);
            color: black;
            border-radius: 5px;
            border: none;
            &:hover {
                background: var(--gray-alpha-950);
            }
        }
    }
    .todo_item {
        --border-color: var(--gray-alpha-400);
        &:hover{
            --border-color: var(--gray-alpha-500);   
        }
        transition: .15s;
        width: 80%;
        border: 1.4px solid var(--border-color);
        border-radius: 10px;
        padding: 5px 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        cursor: pointer;
        .code_block {
            position: relative;
            width: 100%;
        }

        .item_title{
            width: 100%;
            padding: 5px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
            button {
                display: flex;
                align-items: center;
                padding: 5px 5px;
                background: transparent;
                border-radius: 6px;
                transition: transform 0.2s ease; 
                border: 1.6px solid var(--gray-alpha-500);
                &:hover {
                    background: var(--gray-alpha-100);

                }
                &:active {
                    transform: scale(0.9); 

                }
            }
        }
        .name_todo {
            display: flex;
            flex-direction: column;
        }
        .lanuage_item {
            border: 1.4px solid var(--gray-alpha-500);
            border-radius: 4px;
            padding: 3px 8px;
            font-family: var(--font-family);
        }
        .action_btn {
            display: flex;
            justify-content: space-between;
            gap: 5px;
            padding: 7px 20px;
            width: 100%;
            border-top: 1px solid var(--border-color);
            button {
                padding: 5px 10px;
                border-radius: 5px;

            }
            .open_btn {
                background: var(--gray-alpha-1000);
                color: var(--background-100);
                border: none;
                &:hover {
                    background: var(--gray-alpha-950);
                }
            }
            .delete_btn {
                background: none;
                border: 1.2px solid var(--red-600);
                color: var(--red-900);
            }
        }
    }
    .mtk8 {
        color: #F75F8F;
    }

    .mtk22 {
        color: #BF7AF0;
    }

    .mtk9.bracket-highlighting-0{
        color: #EDEDED;
    }

    .monaco-editor {
        overflow: scroll;
        .monaco_diff_editor {
            --vscode-editor-background: transparent;
            --vscode-editorGutter-background: transparent;
        }
        .monaco-editor-background, .margin {
            background-color: #101010;
        }
    }

    .view-line {
        span {
            /* font-size: 15px; */
            font-weight: 400;
        }
    
    }
`
const Todo:NextPage = ():ReactNode => {
    const {user, loadingUser} = useAuth()
    const [searching, setSearching] = useState("")
    const { todo, setTitleTodo, setDate, setCode} = useTodo();
    const { setStatusTodo, setDelete, setOpenTodo} = useDialogStatus();
    const [idTodo, setIdTodo] = useState<number>(NaN);

    
    const handleCopyText = (text:string) => {
        navigator.clipboard.writeText(text)
    }
    
    return !loadingUser && user === null ?
    <div style={{width: '100%', display:"flex", justifyContent: "center"}}>
        <Typography variant="web">Авторизуйтесь</Typography>
    </div> :( 
    <>
        <DialogAddTodo />
        <DeleteDialog id={idTodo}/>
        <OpenTodo />
        <Section className="d-f-c" id="todo">
            <div className="container">
                <div className="info_todo">
                    <div className="searching">
                        <input value={searching} onChange={({target})=>setSearching(target.value)} type="text" placeholder="Поиск..." />
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <button onClick={()=>setStatusTodo('opened')} >
                        <Typography variant="h5">Добавить</Typography>
                    </button>
                </div>
                {
                    searching ? todo.filter((el)=>el.note.toLowerCase().includes(searching.toLowerCase())).map((el, idx:number)=>(
                        <div key={idx} className="todo_item">
                            <div className="item_title">
                                <div className="name_todo">
                                    <Typography variant="h4" >{el.note} </Typography>
                                    <Typography variant="body">{el.date.split(' ')[2]} {el.date.split(' ')[3]} {el.date.split(' ')[4] + " "}</Typography>
                                </div>
                                <span className="lanuage_item">{el.language}</span>
                                <button onClick={()=>handleCopyText(el.code)}>
                                <svg data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" aria-hidden="true" style={{color: "currentcolor", width: "20px", height: "20px"}}><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg>
                                </button>
                            </div>
                            <Editor
                                options={{
                                    minimap: {
                                        enabled: false,
                                    },
                                    readOnly:true,
                                    scrollBeyondLastLine: false,
                                    automaticLayout: true,
                                    scrollbar: {
                                        vertical: 'hidden',
                                        horizontal: 'hidden'
                                    },    
                                    fontSize: 14,
                                    fontFamily: '"Azeret Mono", var(--font-family)',
                                    contextmenu: false,
                                }}
                                height={`${22 * el.code.split("\n").length}px`}
                                theme="vs-dark"
                                language={el.language}
                                value={el.code}
                                
                            />
                            <div className="action_btn">
                                <button className="open_btn" onClick={()=>{
                                    setOpenTodo('opened');
                                    setTitleTodo(el.note);
                                    setCode(el.code);
                                    setDate(el.date)
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
                    )) : todo.map((el:ElementType, idx:number)=>(
                        <div key={idx} className="todo_item">
                            <div className="item_title">
                                <div className="name_todo">
                                    <Typography variant="h4" >{el.note} </Typography>
                                    <Typography variant="body">{el.date.split(' ')[2]} {el.date.split(' ')[3]} {el.date.split(' ')[4] + " "}</Typography>
                                </div>
                                <span className="lanuage_item">{el.language}</span>
                                <button onClick={()=>handleCopyText(el.code)}>
                                <svg data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" aria-hidden="true" style={{color: "currentcolor", width: "20px", height: "20px"}}><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg>
                                </button>
                            </div>
                            <div className="code_block">
                                <Editor
                                    options={{
                                        minimap: {
                                            enabled: false,
                                        },
                                        readOnly:true,
                                        scrollBeyondLastLine: false,
                                        automaticLayout: true,
                                        scrollbar: {
                                            vertical: 'hidden',
                                            horizontal: 'hidden'
                                        },    
                                        fontSize: 14,
                                        fontFamily: '"Azeret Mono", var(--font-family)',
                                        contextmenu: false,
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
                    ))
                }
                
            </div>
        </Section>
    </>
    )
}


export default Todo


