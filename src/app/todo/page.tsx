'use client'

import Typography from "@/typography/typogrpahy"
import { useDialogStatus } from "@/zustands/Dialogs"
import useTodo from "@/zustands/todo"
import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode, useRef, useState } from "react"
import DialogAddTodo from "./dialogs/AddTodo"
import DeleteDialog from "./dialogs/delete"
import OpenTodo from "./dialogs/open"
import useAuth from "@/zustands/auth"
import TodoCard from "./TodoCard"

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
            width: 80%;
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
            padding: 6px 35px;
            background: var(--gray-alpha-1000);
            color: black;
            border-radius: 5px;
            border: none;
            &:hover {
                background: var(--gray-alpha-950);
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
                        <Typography variant="body">Добавить</Typography>
                    </button>
                </div>
                {
                    searching ? todo.filter((el)=>el.note.toLowerCase().includes(searching.toLowerCase())).map((el, idx:number)=>(
                        <TodoCard el={el} idx={idx} key={idx} setIdTodo={setIdTodo} />
                    )) : todo.map((el:ElementType, idx:number)=>(
                        <TodoCard key={idx} idx={idx} el={el} setIdTodo={setIdTodo} />
                    ))
                }
                
            </div>
        </Section>
    </>
    )
}


export default Todo


