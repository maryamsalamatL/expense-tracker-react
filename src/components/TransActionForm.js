import styles from "./TransActionForm.module.css";
import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsShow }) => {
  const [inputValues, setInputValues] = useState({
    desc: "",
    amount: 0,
    type: null,
  });

  const changeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      inputValues.desc === "" ||
      inputValues.amount === 0 ||
      inputValues.type === null
    )
      return alert("Please complete the form!");
    addTransAction(inputValues);
    setIsShow(false);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        className={styles.input}
        value={inputValues.desc}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        className={styles.input}
        onChange={changeHandler}
        value={inputValues.amount}
      />
      <div className={styles.radio}>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="styles.btn">
        add transAction
      </button>
    </form>
  );
};

export default TransActionForm;
