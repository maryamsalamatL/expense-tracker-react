import styles from "./OverView.module.css";
import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverView = ({ expense, income, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  const addHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <span>Balance : {income - expense}</span>
        <button className={styles.btn} onClick={addHandler}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransAction={addTransAction} />}
      <div className={styles.parentBox}>
        <div className={styles.box}>
          <p>Expense</p>
          <h2 className={styles.expense}>$ {expense}</h2>
        </div>
        <div className={styles.box}>
          <p>Income</p>
          <h2 className={styles.income}>$ {income}</h2>
        </div>
      </div>
    </div>
  );
};

export default OverView;
