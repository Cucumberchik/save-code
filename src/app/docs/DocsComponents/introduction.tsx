"use server"
import { NextPage } from "next"
import { ReactNode } from "react"
import css from "../docs.module.scss"

const Introduction:NextPage = ():ReactNode => {
  return (
    <article className={css.article}>
        <div className={css.article_contant}>
            <div className={css.intro}>
                <h2 className="headline_32_700">
                    Вступление
                </h2>
            </div>
            <div className={css.description}>
                <h3 className="headline_24_700">
                    Что такое Save-Code?
                </h3>
                <p className="title_14_500" >
                    Save-Code — это удобный онлайн-сервис, предназначенный для сохранения <br />
                    и управления кодом на различных языках программирования. Независимо от того, <br />
                    являетесь ли вы начинающим разработчиком или опытным программистом, Save-Code <br />
                    предоставляет все необходимые инструменты для эффективной работы с кодом.
                    <br />  
                    Одной из ключевых особенностей Save-Code является поддержка множества языков <br />
                    программирования. Вы можете сохранять и организовывать код на таких языках, как <br />
                    Python, JavaScript, Java, C++, C#, Swift, Rust, Dart, Ruby, PHP, Kotlin, Go(golang) <br />
                    и многих других. Это делает сервис универсальным инструментом для разработчиков, <br />
                    работающих с разными технологиями и проектами.
                    <br />
                    Кроме того, Save-Code предлагает встроенный редактор кода, который обеспечивает <br />
                    комфортную и продуктивную работу. Редактор поддерживает подсветку синтаксиса, <br />
                    автодополнение, проверку синтаксиса и другие функции, облегчающие написание и <br /> 
                    отладку кода. Благодаря этому, вы можете писать, редактировать и тестировать <br /> 
                    код непосредственно в браузере, не прибегая к использованию внешних IDE или <br /> 
                    текстовых редакторов.
                    <br />
                    Сервис Save-Code также позволяет легко делиться своим кодом с другими пользователями. <br />
                    Вы можете генерировать общедоступные или приватные ссылки на свои проекты, что упрощает <br /> 
                    совместную работу и обмен знаниями. Встроенные функции управления версиями помогают <br /> 
                    отслеживать изменения в коде и возвращаться к предыдущим версиям при необходимости.
                    <br />
                    В итоге, Save-Code — это мощный и удобный инструмент для сохранения, редактирования <br /> 
                    и обмена кодом на различных языках программирования. Независимо от вашего уровня <br />
                    опыта и специфики проекта, этот сервис станет незаменимым помощником в вашей разработке.
                </p>
            </div>
        </div>
    </article>
  )
}

export default Introduction