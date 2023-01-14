import OverView from "./OverView";
import { useState, useEffect } from "react";
import TransAction from "./TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  const [filterTransAction, setFilterTransAction] = useState([]);

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    filterTransAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseInt(t.amount))
        : (inc = inc + parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [filterTransAction]);

  const addTransAction = (inputValues) => {
    setTransAction([...transAction, { ...inputValues, id: Date.now() }]);
    setFilterTransAction([
      ...filterTransAction,
      { ...inputValues, id: Date.now() },
    ]);
  };

  const searchHandler = (e) => {
    const filteredTransActions = filterTransAction.filter((t) =>
      t.desc.toLowerCase().includes(e.toLowerCase())
    );
    setTransAction(filteredTransActions);
  };

  return (
    <div className="mainContainer">
      <h1>Expense Tracker</h1>
      <OverView
        expense={expense}
        income={income}
        addTransAction={addTransAction}
      />

      <TransAction transAction={transAction} searchHandler={searchHandler} />
    </div>
  );
};

export default ExpenseApp;
