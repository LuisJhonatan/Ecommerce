import React from "react";
import { Sidebar } from "../SidbeBar/Sidebar";
import { Cards } from "../Cards/Cards";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <main className={`${styles.main}`}>
      <Sidebar />
      <Cards />
    </main>
  );
};
