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
    }
  ]

  const pages:ReactNode[] = [
    <Introduction/>
  ]
  return (
    <section className={css.docs}>
      <div className={css.container}>
        <aside>
          <div className={css.navigation}>
            {links.map((el:LinkType, idx:number)=>(
              <button className={idx == routing ? "active" : ""} key={idx} >{el.link}</button>
            ))}
          </div>
        </aside>
        <div className={css.contant}>
          
        </div>
      </div>
    </section>
  )
}

export default Docs
