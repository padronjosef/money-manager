import React from "react";
import EditBudget from "../EditBudget"
import { checkBudget } from "../Helper.js";

const ControlBudget = ({ budget, remaining, resetBudget, editBudget, setBudget, setRemaining, expenses }) => {
  return (
    <>
      <div className="row">
        <p className="one-third column alert alert-primary">
          Budget: $ {budget}
        </p>
        <p className={`one-third column ${checkBudget(budget, remaining)}`}>
          Remaining: $ {remaining}
        </p>
        <EditBudget budget={budget} setBudget={setBudget} setRemaining={setRemaining} expenses={expenses}/>
      </div>
      <p onClick={resetBudget} className="u-full-width alert alert-reset">
        Reset Budget
      </p>
    </>
  );
};

export default ControlBudget;
