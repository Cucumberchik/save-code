'use client'

import Typography from "@/typography/typogrpahy"
import { useDialogStatus } from "@/zustands/Dialogs"
import useTodo from "@/zustands/todo"
import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode, useState } from "react"
import DialogAddTodo from "./AddTodo"
import DeleteDialog from "./DeleteDialog"
import OpenTodo from "./OpenTodo"

let Section = styled.section`
    width: 100%;
    height: 100vh;
    
    .container {
        width: var(--container-size);
        height: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;
        gap: 12px;
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
        transition: .15s;
        width: 80%;
        height: 80px;
        border: 1px solid var(--gray-alpha-400);
        border-radius: 10px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        &:hover {
            border: 1px solid var(--gray-alpha-500);

        }

        .lanuage_item {
            border: 1.4px solid var(--gray-alpha-500);
            border-radius: 4px;
            padding: 1px 3px;
        }
        .action_btn {
            display: flex;
            flex-direction: column;
            gap: 5px;
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
`
const Todo:NextPage = ():ReactNode => {
    const {searching, setSearching, todo} = useTodo();
    const { setStatusTodo, setDelete, setOpenTodo} = useDialogStatus();
    const [idTodo, setIdTodo] = useState<number>(NaN);
    const [todoObj, setTodoObj] = useState<any>(null)

    return(
    <>
        <DialogAddTodo />
        <DeleteDialog id={idTodo}/>
        <OpenTodo obj={todoObj} />
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
                {todo.map((el:ElementType, idx:number)=>(
                    <div key={idx} className="todo_item">
                        <div className="item_title">
                            <Typography variant="h4" >{el.note} </Typography>
                            <Typography variant="body">{el.date.split(' ')[2]} {el.date.split(' ')[3]} {el.date.split(' ')[4] + " "}</Typography>
                            <span className="lanuage_item">{el.language}</span>
                        </div>
                        <div className="action_btn">
                            <button className="open_btn" onClick={()=>{
                                setOpenTodo('opened');
                                setTodoObj(el)
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
                ))}
            </div>
        </Section>
    </>
    )
}


export default Todo