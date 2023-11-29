import ContenidoExtra from './ContenidoExtra'

import style from "./footer.module.css"

const Extra = () => {
  return (
    <section className={style.extraContainer}>
      <div className={`${style.extra} container`}>
        <ContenidoExtra />
      </div>
    </section>
  )
}

export default Extra