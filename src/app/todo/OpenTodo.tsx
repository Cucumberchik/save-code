'use client'
import { useDialogStatus } from '@/zustands/Dialogs'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect, useState, type ReactNode } from 'react'
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from '@/constants'
import useTodo from '@/zustands/todo'
import SaveCodeElement from './SaveCodeElement'
import Typography from '@/typography/typogrpahy'



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
  z-index: 20;
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
      font-weight: 430;
      letter-spacing: .5px;
    }
    
  }
    
`;

const OpenTodo:NextPage<{obj:ElementType}> = ({obj}):ReactNode => {
    

    const [code, setCode] = useState<string>("");
    const {openTodoStatus, setOpenTodo } = useDialogStatus();
    const {language, titleTodo , user_id, todo, setTitleTodo, changeTodo} = useTodo();
    useEffect(()=>{
        setCode(obj?.code);
        setTitleTodo(obj?.note);
    },[obj?.code])

    const handleCloseWindow = () => {

      if(code !== obj?.code) {

          let userClose = confirm("Вы уверены, что хотите закрыть? Написанный код не будет сохранен");
          if(userClose){
            setCode('');
            setTitleTodo('')
            setOpenTodo('closed');
            return;
          }
      }
      
      
      
    }

    const handleSandCode = () => {
      if(!code){
        alert('Редактор кода пустой');
        return;
      }

        const todoObj:ElementType = {
          code,
          date: obj.date,
          language,
          note: titleTodo ? titleTodo : obj.note
        }
        let newTod:ElementType[] = todo.map((el:ElementType)=> el.date == obj.date ? todoObj : el)
        changeTodo( user_id, newTod);
        setCode("");
        setTitleTodo("");
        setOpenTodo('closed');
    }
    
   
  return (
    <Section $status={openTodoStatus} id="dialog" >
        <div className="contant" onClick={handleCloseWindow} >
            <div className="container" onClick={(e)=>e.stopPropagation()}>
                <SaveCodeElement handleCloseWindow={()=>setOpenTodo('closed')} handleSandCode={handleSandCode} />
                <Editor
                    options={{
                        minimap: {
                          enabled: false,
                        },
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
                    height="90%"
                    width="98%"
                    theme="vs-dark"
                    language={language}

                    defaultValue={CODE_SNIPPETS[language]}
                    value={code}
                    onChange={(value:any) => setCode(value)}
                />
                
            </div>
        </div>
    </Section>
  )
}


export default OpenTodo