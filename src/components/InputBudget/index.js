import React, { useState } from "react";
import Error from "../Error";

const InputBudget = ({ setBudget, setRemaining, setShowBudgetInput }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // function that define the budget
  const defineBudget = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  // submit to define the budget
  const addBudget = (e) => {
    e.preventDefault();

    // validation
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }

    // if the validation it's ok
    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setShowBudgetInput(false);
  };

  return (
    <>
      <h2>Insert your budget</h2>
      {error ? <Error message="The budget is not valid" setError={setError}/> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="insert your budget"
          onChange={defineBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="define budget"
        />
      </form>
    </>
  );
};

export default InputBudget;
