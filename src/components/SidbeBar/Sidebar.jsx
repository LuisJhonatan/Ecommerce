import React from "react";
import styles from "./SideBar.module.css"

export const Sidebar = () => {
  return (
    <section className={styles.sidebarContainer}>
      <h3>Filtros</h3>
      <hr />
      <article>
        <p>Por color: </p>
        <hr />
        <section className={styles.radio}>
          <div>
            <input type="radio" name="color" id="color1" />
            <label htmlFor="color1"> Color 1</label>
          </div>
          <div>
            <input type="radio" name="color" id="color2" />
            <label htmlFor="color2"> Color 2</label>
          </div>
          <div>
            <input type="radio" name="color" id="color3" />
            <label htmlFor="color3"> Color 3</label>
          </div>
          <div>
            <input type="radio" name="color" id="color4" />
            <label htmlFor="color4"> Color 4</label>
          </div>
          <div>
            <input type="radio" name="color" id="color5" />
            <label htmlFor="color5"> Color 5</label>
          </div>
          <div>
            <input type="radio" name="color" id="color6" />
            <label htmlFor="color6"> Color 6</label>
          </div>
          <div>
            <input type="radio" name="color" id="color7" />
            <label htmlFor="color7"> Color 7</label>
          </div>
        </section>
      </article>
    </section>
  );
};
