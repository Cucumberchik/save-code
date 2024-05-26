'use client'
import { Editor } from "@monaco-editor/react";
import {useCallback, useState} from "react"
import type { NextPage } from "next";
import type { ReactElement } from "react";
import useEditor from "@/zustands/editor";
import Typography from "@/typography/typogrpahy";
import { LANGUAGE_VERSIONS } from "@/constants";

const CodeEditor:NextPage = ():ReactElement => {
    const [dropdawn, setDropdawn] = useState<string>('disabled')
    const {sourceCode,language, setSourceCode, setLanguage} = useEditor();

    const handleValue = useCallback((value:string)=>{
        setSourceCode(value)
    },[sourceCode, setSourceCode])

    return (
    <div className="editor_code window_layout">
        <div className="layout_info">
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
                renderLineHighlight: "none",
                fontFamily: '"Azeret Mono", var(--font-family)',
            }}
            height="95%"
            theme="vs-dark"
            language={language}
            value={sourceCode} 
            onChange={(value:any)=>handleValue(value)}
            />
    </div>
    )
}

export default CodeEditor