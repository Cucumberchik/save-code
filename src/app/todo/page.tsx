'use client'

import styled from "@emotion/styled"
import { NextPage } from "next"
import { ReactNode } from "react"

let Section = styled.section`
    
`
const Todo:NextPage = ():ReactNode => {
    return(
    <Section id="todo">
        <div className="container"></div>
    </Section>
    )
}


export default Todo