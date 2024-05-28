'use client'
import Typography from "@/typography/typogrpahy";
import useEditor from "@/zustands/editor";
import type { NextPage } from "next";
import type { ReactElement } from "react";

const CodeOutput:NextPage = ():ReactElement => {
    const {output, executeCode, language, sourceCode} = useEditor();
    let outputCode = output?.output.split("\n");
    
    
    return (
    <div className="output_layout window_layout">
        <div className="layout_info">
            <Typography variant="body">Выходные данные</Typography>
            <button onClick={()=>executeCode(language, sourceCode)} >
                <Typography variant="body">Запустить</Typography>
            </button>
        </div>
        <div className="output_code">
            {outputCode?.filter(el=>el).map((el:string, idx:number)=>(
                <div key={idx} className="view_line">
                    <span className="numbers_line">{idx + 1}</span>
                    <span>{el}</span>
                </div>
            ))}
        </div>
    </div>
    )
}

export default CodeOutput