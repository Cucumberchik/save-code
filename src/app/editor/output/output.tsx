'use client'
import Typography from "@/typography/typogrpahy";
import useEditor from "@/zustands/editor";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import type { ReactElement } from "react";

const Div = styled.div`
    width: 35%;
    height: 95%;

    border: 1px solid var(--gray-alpha-500);
    border-radius: 15px;
    overflow: hidden;

    .output_info {
        width: 100%;
        height: 50px;
        background: var(--gray-alpha-100);
        border-bottom: 1px solid var(--gray-alpha-500);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;

        button {
            background: var(--gray-alpha-1000);
            transition: 0.15s;
            color: black;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            &:hover {
                background: var(--gray-alpha-950);
            }
        }
    }
    .output_code {
       display: flex;
       flex-direction: column;
       gap: 5px;
        .view_line {
            display: flex;
            padding: 5px 10px;
            gap: 10px;
            width: 100%;
            border-bottom: 1px solid var(--gray-alpha-300);

            span {
                font-size: 16px;
                color: var(--gray-alpha-1000);
                font-family: var(--font-family);
                font-weight: 500;
            }
        }
        .numbers_line {
            width: 20px;
        }
    }
`

const CodeOutput:NextPage = ():ReactElement => {
    const {output, executeCode, language, sourceCode} = useEditor();
    let outputCode = output?.output.split("\n");
    
    
    return (
    <Div>
        <div className="output_info">
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
    </Div>
    )
}

export default CodeOutput