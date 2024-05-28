'use client'
import { NextPage } from "next"
import css from "./docs.module.scss"
import { ReactElement, ReactNode, useState } from "react"
import links from "./LinksInfo"

interface LinkType {
  link: string,
  page: string,
  element: ReactElement
}

const Docs:NextPage = ():ReactNode => {
  const [routing, setRouting] = useState<number>(0);

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
                {el.link}
              </button>
            ))}
        </nav>
        <div className={css.contant}>
        <article  className={css.article}>
          <div className={css.intro}>
            <h2 className="subtitle_24_600" >
              {links[routing].link}
            </h2>
          </div>
          {links[routing].element}
        </article>
        </div>
      </div>
    </section>
  )
}

export default Docs



