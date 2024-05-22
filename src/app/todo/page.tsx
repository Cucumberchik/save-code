'use client'

import Typography from "@/typography/typogrpahy"
import { useDialogStatus } from "@/zustands/Dialogs"
import useTodo from "@/zustands/todo"
import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode } from "react"
import DialogAddTodo from "./AddTodo"

let Section = styled.section`
    width: 100%;
    height: 100vh;
    
    .container {
        width: var(--container-size);
        height: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;
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
`
const Todo:NextPage = ():ReactNode => {
    const {searching, setSearching, todo} = useTodo()
    const { setStatusTodo} = useDialogStatus()

    return(
    <>
        <DialogAddTodo />
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
            </div>
        </Section>
    </>
    )
}


export default Todo