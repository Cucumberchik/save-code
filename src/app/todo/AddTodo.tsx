'use client'
import { useDialogStatus } from '@/zustands/Dialogs'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useRef, useState, type ReactNode } from 'react'
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from '@/constants'
import useTodo from '@/zustands/todo'
import SaveCodeElement from './SaveCodeElement'



interface StyledSectionPropsType {
    $status: string
}
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; display: none; }
`;

const Section = styled.section<StyledSectionPropsType>`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  display: ${({ $status }) => ($status === 'disabled' ? 'none' : 'flex')};
  animation: ${({ $status }) => ($status === 'opened' ? fadeIn : $status === 'closed' ? fadeOut : 'none')} 0.3s forwards;
  background-color: ${({ $status }) => ($status === 'opened' || $status === 'closed' ? 'rgba(0, 0, 0, 0.438)' : 'transparent')};

  .contant {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ._contant {
    display: ${({ $status }) => ($status === 'closed' ? 'none' : 'flex')};
  }
  .container {
    width: 80%;
    height: 80%;
    background: #1d1d1d;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    font-family: "DM Mono";
    --monaco-monospace-font: "DM Mono";
    .monaco_diff_editor {
        --vscode-editor-background: transparent;
    }
    .monaco-editor-background, .margin {
        background-color: #101010;
    }
  }

  .view-line {
    span {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: .5px;
    }
    
  }
    
`;

const DialogAddTodo:NextPage = ():ReactNode => {
    const editorRef = useRef<any>();
    const [code, setCode] = useState<string>("");
    const {statusTodo, setStatusTodo } = useDialogStatus();
    const {language, titleTodo , user_id, todo, setTitleTodo, postTodo} = useTodo();
  
    const onMount = (editor: any) => {
      editorRef.current = editor;
      editorRef.current.focus();
    };

    const handleCloseWindow = () => {
      setStatusTodo('closed');
      if(!code) return;

      let linkTodo:any = localStorage.getItem("todo")
      let todoStorage:ElementType[] = JSON.parse(linkTodo) || [];

      const todoObj:ElementType = {
        code,
        date: `${new Date()}`,
        language,
        note: titleTodo
      }
      localStorage.setItem('todo', JSON.stringify([...todoStorage, todoObj]));
      setCode('')
    }

    const handleSandCode = () => {
      if(!code){
        alert('Редактор кода пустой');
        return;
      }

        const todoObj:ElementType = {
          code,
          date: `${new Date()}`,
          language,
          note: titleTodo ? titleTodo : "Без имени"
        }
        
        postTodo(todoObj, user_id, todo);
        setCode("");
        setTitleTodo("");
        setStatusTodo('closed');
    }
    
    
  return (
    <Section $status={statusTodo} id="dialog" >
        <div className="contant" onClick={handleCloseWindow} >
            <div className="container" onClick={(e)=>e.stopPropagation()}>
                <SaveCodeElement handleSandCode={handleSandCode} />
                <Editor
                    options={{
                    minimap: {
                        enabled: false,
                    },
                    }}
                    height="90%"
                    width="98%"
                    theme="vs-dark"
                    language={language}

                    defaultValue={CODE_SNIPPETS[language]}
                    onMount={onMount}
                    value={code}
                    onChange={(value:any) => setCode(value)}
                />
            </div>
        </div>
    </Section>
  )
}


export default DialogAddTodo