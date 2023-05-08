import React from "react"
import styles from "./Main.module.css"


import Timer from "../Timer/Timer"
import EntryForm from "../EntryForm/EntryForm"



 export const Main = () => {
 return(
    <div className={styles.main_container}>
        <div className={styles.main_wrapper}>
            <div className={styles.main_info}>
                <h2 className={styles.main_offer}>Выиграйте пылесос <span>Dyson</span> : заполните форму и получите шанс выиграть</h2>
              <div className={styles.main_images}>
                <img className={styles.main_image} src="https://files.foxtrot.com.ua/PhotoNew/6874247_14_638162273099868062.webp" alt="Sorry, no pic here"></img>
                <img className={styles.main_image} src="https://files.foxtrot.com.ua/PhotoNew/6874247_7_638162268352548018.webp" alt="Sorry, no pic here"></img>
                </div>
                <Timer seconds={60}></Timer>
                 <EntryForm></EntryForm>
            </div>
        </div>
    </div>
 )
}