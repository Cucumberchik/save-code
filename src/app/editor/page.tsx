'use server'
import { NextPage } from "next";
import { ReactNode } from "react";
import CodeEditor from "./code/code";
import "./style.css"
import CodeOutput from "./output/output";

const EditorPage:NextPage = ():ReactNode => {

   
    
    return (
        <section id="editor_page">
            <CodeEditor />
            <CodeOutput />
        </section>
    )
}

export default EditorPage