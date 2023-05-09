import React from "react";
import styles from "./Description.module.css";
import { Question } from "../Question/Question";
import { Gift } from "../GiftBoxes/Gift";
export const Description = () => {
  return (
    <div className={styles.description_container}>
      <div className={styles.description_wrapper}>
        <div className={styles.description_info}>
          <div className={styles.info_title}>
            <h1>Описание Акции</h1>
          </div>
          <div className={styles.info_text}>
            <p>Участвуйте в нашей акции и получите шанс выиграть пылесос <span>Dyson</span> </p>
          </div>
          <div className={styles.info_images}>
            <img className={styles.info_image} src="https://files.foxtrot.com.ua/PhotoNew/6874247_6_638162268348246160.webp" alt="" />
            <img className={styles.info_image} src="https://files.foxtrot.com.ua/PhotoNew/6874247_9_638162268364809172.webp" alt="" />
            <img className={styles.info_image} src="https://files.foxtrot.com.ua/PhotoNew/6874247_4_638162268336801563.webp" alt="" />
          </div>
          <Question></Question>
          <Gift></Gift>
        </div>
      </div>
    </div>
  );
};
