'use client'
import Typography from "@/typography/typogrpahy"
import { useDialogStatus } from "@/zustands/Dialogs"
import useTodo from "@/zustands/todo"
import { NextPage } from "next"
import { ReactNode, useState } from "react"
import DialogAddTodo from "./dialogs/AddTodo"
import DeleteDialog from "./dialogs/delete"
import OpenTodo from "./dialogs/open"
import useAuth from "@/zustands/auth"
import TodoCard from "./TodoCard"
import "./todo.scss"

const Todo:NextPage = ():ReactNode => {
    const {user, loadingUser} = useAuth()
    const [searching, setSearching] = useState("")
    const {todo} = useTodo();
    const {setStatusTodo} = useDialogStatus();
    const [idTodo, setIdTodo] = useState<number>(NaN);

    
    return !loadingUser && user === null ?
    <div style={{width: '100%', display:"flex", justifyContent: "center"}}>
        <Typography variant="web">Авторизуйтесь</Typography>
    </div> :( 
    <>
        <DialogAddTodo />
        <DeleteDialog id={idTodo}/>
        <OpenTodo />
        <section className="d-f-c" id="todo">
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
        </section>
    </>
    )
}


export default Todo


