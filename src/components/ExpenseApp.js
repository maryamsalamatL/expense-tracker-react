import OverView from "./OverView";
import { useState, useEffect } from "react";
import TransAction from "./TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  const [allTransAction, setAllTransAction] = useState([]);

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    allTransAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseInt(t.amount))
        : (inc = inc + parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transAction]);

  const addTransAction = (inputValues) => {
    setTransAction([...transAction, { ...inputValues, id: Date.now() }]);
    setAllTransAction([...allTransAction, { ...inputValues, id: Date.now() }]);
  };

  const searchHandler = (e) => {
    const filteredTransActions = allTransAction.filter((t) =>
      t.desc.toLowerCase().includes(e.toLowerCase())
    );
    setTransAction(filteredTransActions);
  };
  const deleteHandler = (id) => {
    const filteredTransActions = transAction.filter((t) => t.id != id);
    const filteredAllTransActions = allTransAction.filter((t) => t.id != id);
    setAllTransAction(filteredAllTransActions);
    setTransAction(filteredTransActions);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="topSection">
          <h1>Expense Tracker</h1>
          <OverView
            expense={expense}
            income={income}
            addTransAction={addTransAction}
          />
        </div>
        <TransAction
          transAction={transAction}
          searchHandler={searchHandler}
          allTransAction={allTransAction}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
};

export default ExpenseApp;
