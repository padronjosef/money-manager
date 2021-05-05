import React, { useState } from "react";

const EditBudget = ({ budget, setBudget, setRemaining, expenses }) => {
  const [showTotal, setShowTotal] = useState(true);

  const activeInput = () => setShowTotal(!showTotal);

  const totalExpenses = expenses
    .map((expense) => expense.amount)
    .reduce((acc, val) => acc + val, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTotal(!showTotal);
    setRemaining(budget - totalExpenses);
  };

  const handleChange = (e) => {
    setBudget(parseInt(e.target.value, 10));
  };

  return showTotal ? (
    <p onClick={activeInput} className="one-third column alert alert-edit">
      Edit My Budget
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="one-third column row">
      <input
        className="edit-budget__input two-thirds column"
        onChange={handleChange}
        type="number"
      />
      <button
        className="edit-budget__button one-third column alert-edit"
        type="submit"
      >
        {/* check caracter */}
        &#x2713;
      </button>
    </form>
  );
};

export default EditBudget;
