'use client'
import { Editor } from "@monaco-editor/react";
import {useCallback, useRef, useState} from "react"
import type { NextPage } from "next";
import type { ReactElement } from "react";
import styled from "@emotion/styled";
import useEditor from "@/zustands/editor";
import Typography from "@/typography/typogrpahy";
import { LANGUAGE_VERSIONS } from "@/constants";

const Div = styled.div`
    width: 45%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--gray-alpha-500);
    border-radius: 15px;
    overflow: hidden;

    .editor_info {
        position: relative;
        width: 100%;
        height: 50px;
        background: var(--gray-alpha-100);
        border-bottom: 1px solid var(--gray-alpha-500);
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 0 30px;
        .change_language {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        button {
            background: transparent;
            color: var(--gray-alpha-900);
            border: 1px solid var(--gray-alpha-900);
            padding: 5px 10px;
            border-radius: 4px;
        }

        .dropdawn_language {
            position: absolute;
            z-index: 21;
            top: 0;
        }
        .dropdawn_language.disabled {
            display: none;
        }
        .dropdawn_language.closed {
            animation: closeDropdawnLanguage 0.3s ease-in-out forwards;
        }
        .dropdawn_language.opened {
            animation: openDropdawnLanguage 0.3s ease-in-out forwards;
        }
    }

    .monaco-editor .view-line:focus {
        outline: none;
    }

`

const CodeEditor:NextPage = ():ReactElement => {
    const [dropdawn, setDropdawn] = useState<string>('disabled')
    const {sourceCode,language, setSourceCode, setLanguage} = useEditor();

    const handleValue = useCallback((value:string)=>{
        setSourceCode(value)
    },[sourceCode, setSourceCode])

    return (
    <Div className="editor_code">
        <div className="editor_info">
            <div className="change_language">
                <Typography variant="body">Язык</Typography>
                <button onClick={()=>setDropdawn('opened')}>
                    <Typography variant="body">
                        {language}
                    </Typography>
                </button>
                <div className={"dropdawn dropdawn_language " + dropdawn} onClick={(e)=>e.stopPropagation()} >
                    <ul>
                        {Object.keys(LANGUAGE_VERSIONS).map((el:string, idx:number)=>(
                            <li className="dropdawn_item" key={idx} onClick={()=>{
                                setDropdawn('closed');
                                setLanguage(el)
                                }}>
                                    <Typography variant="body">
                                        {el}
                                    </Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <Editor
            options={{
                minimap: {
                    enabled: false,
                },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                contextmenu: false,
                scrollbar: {
                    vertical: 'hidden',
                    horizontal: 'hidden'
                },    
                fontSize: 14,
                fontFamily: '"Azeret Mono", var(--font-family)',
            }}
            height="95%"
            theme="vs-dark"
            language={language}
            value={sourceCode} 
            onChange={(value:any)=>handleValue(value)}
            />
    </Div>
    )
}

export default CodeEditor