'use client'
import { Editor } from "@monaco-editor/react";
import {useRef, useState} from "react"
import type { NextPage } from "next";
import type { ReactElement } from "react";
import styled from "@emotion/styled";
import useEditor from "@/zustands/editor";

const Div = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @keyframes openDropdawn {
        from {
            opacity: 0;
            margin-top: 2px;
            transform: translateY(-4px);
            display: none;
        }
        to {
            opacity: 1;
            margin-top: 45px;
            transform: translateY(0);
            display: block;
        }
    }

    @keyframes closeDropdawn {
        from {
            opacity: 1;
            margin-top: 45px;
            transform: translateY(0);
            display: block;

        }
        to {
            opacity: 0;
            margin-top: 2px;
            
            transform: translateY(-4px);
            display: none;

        }
    }
`

const CodeEditor:NextPage = ():ReactElement => {

    const {sourceCode,language, setSourceCode} = useEditor();


    return (
    <Div className="editor_code">
        <div className="editor_info">

        </div>
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
            }}
            height="95%"
            theme="vs-dark"
            language={language}
            value={sourceCode} 
            onChange={(value:any)=>setSourceCode(value)}
            />
    </Div>
    )
}

export default CodeEditor