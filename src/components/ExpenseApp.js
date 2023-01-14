import OverView from "./OverView";
import { useState, useEffect } from "react";
import TransAction from "./TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseInt(t.amount))
        : (inc = inc + parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transAction]);

  const addTransAction = (inputValues) => {
    setTransAction([...transAction, { ...inputValues, id: Date.now() }]);
  };
  return (
    <div className="mainContainer">
      <h1>Expense Tracker</h1>
      <OverView
        expense={expense}
        income={income}
        addTransAction={addTransAction}
      />
      <TransAction transAction={transAction} />
    </div>
  );
};

export default ExpenseApp;
