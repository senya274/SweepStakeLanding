import React, { useState } from "react"
import styles from "./GiftBox.module.css"
export const GiftBox = () =>{
    const [count, setCount] = useState(0);
    const [isClickable, setIsClickable] = useState(true);
    const handleClick = () => {
        if (!isClickable) {
          return;
        }
    
        setCount(count + 1);
    
        if (count < 2) {
          alert('Попробуй еще раз');
        } else {
          alert('Поздравляю, вы выиграли');
          setIsClickable(false); 
        }
      };
  return(
    <div>
        <div className={styles.gift_wrapper}>
          <div className={styles.box} onClick={handleClick} disabled={!isClickable}>
           <img  className={styles.box_item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDvt2iyTpj2a98laM7A3hQP45RwVPA5aJbQ&usqp=CAU" alt="" />
          </div>
          <div className={styles.box} onClick={handleClick} disabled={!isClickable}>
          <img className={styles.box_item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDvt2iyTpj2a98laM7A3hQP45RwVPA5aJbQ&usqp=CAU" alt="" />
          </div>
          <div className={styles.box} onClick={handleClick} disabled={!isClickable}>
          <img className={styles.box_item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDvt2iyTpj2a98laM7A3hQP45RwVPA5aJbQ&usqp=CAU" alt="" />
          </div>
          </div>
        </div>
  )
}