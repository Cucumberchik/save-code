'use server'
import css from "./docs.module.scss"

const Docs = () => {

  return (
    <section className={css.docs}>
      <div className={css.container}>
        <aside></aside>
        <div className={css.contant}></div>
      </div>
    </section>
  )
}

export default Docs
