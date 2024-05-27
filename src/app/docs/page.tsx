'use client'
import { NextPage } from "next"
import css from "./docs.module.scss"
import { ReactNode, useState } from "react"
import {Introduction} from "./introduction/intro"



interface LinkType {
  link: string,
  page: string
}

const Docs:NextPage = ():ReactNode => {
  const [routing, setRouting] = useState<number>(0);

  const links:LinkType[] = [
    {
      link: "Вступление",
      page: "introduction"
    },
    {
      link: "Редактор кода",
      page: "editor"
    },
    {
      link: "Заметки",
      page: "todo"
    },
    {
      link: "Настройки",
      page: "setting"
    },

  ]

  
  return (
    <section id="docs" className={css.docs}>
      <div className={css.container}>
        <nav className={css.navgition} >
            {links.map((el:LinkType, idx:number)=>(
              <button 
                className={"text_16_400 " + (idx == routing ? css.active : "")} 
                key={idx} 
                onClick={()=>setRouting(idx)}
              >
                {el.link
              }</button>
            ))}
        </nav>
        <div className={css.contant}>
          
        </div>
      </div>
    </section>
  )
}

export default Docs
