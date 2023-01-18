import styles from "./TransAction.module.css";
import { useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";

const TransAction = ({
  transAction,
  searchHandler,
  deleteHandler,
  allTransAction,
}) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form
        className={`${styles.searchBox} ${
          allTransAction.length === 0 && styles.hidden
        }`}
      >
        <BiSearch className={styles.icon} />
        <input
          type="search"
          value={value}
          onChange={changeHandler}
          className={styles.search}
        />
      </form>

      <div className={styles.list}>
        {transAction.map((t) => {
          return (
            <div
              key={t.id}
              className={`${styles.li} ${
                t.type === "income" ? styles.inc : styles.exp
              }`}
            >
              <BiX
                className={styles.removeIcon}
                onClick={() => deleteHandler(t.id)}
              />
              <p>{t.desc}</p>
              <span>$ {t.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransAction;
