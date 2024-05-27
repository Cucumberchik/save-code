'use client'
import { Editor } from "@monaco-editor/react";
import { useState} from "react"
import type { NextPage } from "next";
import type { ReactElement } from "react";
import useEditor from "@/zustands/editor";
import Typography from "@/typography/typogrpahy";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "@/constants";

const CodeEditor:NextPage = ():ReactElement => {
    const [dropdawn, setDropdawn] = useState<string>('disabled')
    const {sourceCode,language, setSourceCode, setLanguage} = useEditor();

    const handleValue = (value:string)=>{
        setSourceCode(value)
    }
    const indexLanguage = Object.keys(LANGUAGE_VERSIONS).findIndex((el:string)=>el == language);


    return (
    <div className="editor_code window_layout">
        <div className="layout_info">
            <div className="change_language">
                <Typography variant="body">Язык</Typography>
                <button onClick={()=>setDropdawn('opened')}>
                    <Typography variant="body">
                        {Object.keys(CODE_SNIPPETS)[indexLanguage]}
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
                                        {Object.keys(CODE_SNIPPETS)[idx]}
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
                fontSize: 16,
                renderLineHighlight: "none",
                fontFamily: '"Fira Code"',
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