"use client"

import { Editor } from '@monaco-editor/react'
import { NextPage } from 'next'
import React, { ReactNode } from 'react'

export const Present:NextPage = ():ReactNode => {
    const code = `function handleUser(user) {\n    let text = 'Hello ';\n    return text + user \n}`
  return (
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
        fontSize: 18,
        fontFamily: '"Fira Code"',
        contextmenu: false,
        overviewRulerLanes: 0,
        renderLineHighlight: "none"
        }}
    height={`${32 * code.split("\n").length}px`}
    theme="vs-dark"
    language='javascript'
    value={code} 
    />
  )
}
