'use client'
import Typography from "@/typography/typogrpahy";
import { useDialogStatus } from "@/zustands/Dialogs";
import useTodo from "@/zustands/todo";
import styled from "@emotion/styled";
import { Editor } from "@monaco-editor/react";
import { NextPage } from "next";
import { ReactNode } from "react";

const Card = styled.div`
    --border-color: var(--gray-alpha-400);
    &:hover{
        --border-color: var(--gray-alpha-500);   
    
    }
    transition: .15s;
    width: 80%;
    border: 1.4px solid var(--border-color);
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    .code_block {
        position: relative;
        width: 100%;
        canvas {
            display: none;
        }
    }

    .item_title{
        width: 100%;
        padding: 5px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--gray-alpha-100);
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
    .monaco-editor .view-line:focus {
  outline: none;
  border: none;
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
    .card_btns {
        display: flex;
        align-items: center;
        gap: 10px;
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
    
`

const TodoCard:NextPage<{el:ElementType, idx:number, setIdTodo:(id:number)=>void}> = ({el, idx, setIdTodo}):ReactNode => {
    const { setTitleTodo, setDate, setCode} = useTodo();
    const { setDelete, setOpenTodo} = useDialogStatus();

    const handleCopyText = (text:string) => {
        navigator.clipboard.writeText(text)
    }
    
    return (
    <Card className="todo_item">
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
    </Card>
    )
}

export default TodoCard