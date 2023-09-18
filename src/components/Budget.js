import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, expenses, budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });

    if (newBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending.");
    }
  };

  console.log(currency);

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency} </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
