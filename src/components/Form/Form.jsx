import React from "react";
import styles from "./Form.module.css";

export default function Form (){


  return(
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <div className={styles.labelContainer}>
          <label name="username">
            Username:
          </label>
          <input type="text" name="username" />
        </div>

        <div className={styles.labelContainer}>
          <label name="password" style={{"marginTop": ".8rem"}}>
            Password:
          </label>
          <input type="text" name="password" />
        </div>
      </div>

      <button className={styles.form__btn_ingresar}>LOGIN</button>

    </form>
  );

};
