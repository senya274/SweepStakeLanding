import React, { useState } from "react";
import styles from "./EntryForm.module.css";

function EntryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Имя:
          <input className={styles.form_input} type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input className={styles.form_input} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <button className={styles.form_button} type="submit">Отправить</button>
        <a className={styles.form_button} target="_blank" 
        href="https://www.foxtrot.com.ua/uk/shop/piylesosiy_dyson_sv22_v15_dt_abs_eu.html?gclid=Cj0KCQjwu-KiBhCsARIsAPztUF2uxJpITospAq2R2WcnWULtVJQLwf9wZe7amOeUyIjatc2UJHxF-kUaAh6zEALw_wcB" 
        >Узнать больше</a>
      </form>
    </div>
  );
}

export default EntryForm;