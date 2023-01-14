import styles from "./TransAction.module.css";
import { useState } from "react";

const TransAction = ({ transAction, searchHandler }) => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input type="search" value={value} onChange={changeHandler} />
      {transAction.map((t) => {
        return (
          <div key={t.id} className={styles.li}>
            <p>{t.desc}</p>
            <span>{t.amount}</span>
            <span>{t.type}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TransAction;
