
import React, { useState } from "react"

import styles from "./Gift.module.css"
import { GiftBox } from "./GiftBox";
 export const  Gift = () => {
    return (
      <div className={styles.gift_container}>
        <h2 className={styles.gift_title}>Подарочные коробки</h2>
        <p className={styles.gift_text}>Выберите одну из трех коробок:</p>
        <div className={styles.gift_box}>
         <GiftBox></GiftBox>
         
        </div>
      </div>
    );
  }