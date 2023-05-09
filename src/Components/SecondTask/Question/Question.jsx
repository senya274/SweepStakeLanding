import React from "react";
import styles from "./Question.module.css";
import { Button, Input } from "@mui/material";
export const Question = () => {
  return (
    <div className={styles.question_container}>
      <div className={styles.question_block}>
        <h2 className={styles.question_title}>Ответьте на три простых вопроса, чтобы получить шанс на выигрыш:</h2>
        <ol className={styles.question_list}>
          <li>Откуда вы узнали про нашу акцию?</li>
          <Input placeholder="Введите ваш текст" /> 
          <Button>Отправить</Button>
          <li>Почему именно мы?</li>
          <Input placeholder="Введите ваш текст" />
          <Button>Отправить</Button>
          <li>Пользовались брендом Dyson?</li>
          <Input placeholder="Введите ваш текст" />
          <Button>Отправить</Button>
        </ol>
      </div>
    </div>
  );
};
