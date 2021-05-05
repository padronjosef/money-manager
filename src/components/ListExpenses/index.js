import React, { useState } from "react";
import Expense from "../Expense";

const ListExpenses = ({ expenses, deleteExpense }) => {
  const [showMore, setShowMore] = useState("");
  const [showbuttons, setShowbuttons] = useState("");

  const handlerShowMore = () => {
    !showMore ? setShowMore("showMore") : setShowMore("");
  };

  const handlerShowbuttons = () => {
    !showbuttons ? setShowbuttons("showbuttons") : setShowbuttons("");
  };

  return (
    <div className="expenses">
      <h2>Expenses List</h2>
      <div className="row">
        <button onClick={handlerShowMore} className="one-half column">
          {showMore === "showMore" ? "show Less" : "Show More"}
        </button>
        <button onClick={handlerShowbuttons} className="one-half column">
          {showbuttons === "showbuttons" ? "Hide Buttons" : "Show Buttons"}
        </button>
      </div>
      <ul>
        <Expense
          expenses={expenses}
          deleteExpense={deleteExpense}
          showMore={showMore}
          showbuttons={showbuttons}
        />
      </ul>
    </div>
  );
};

export default ListExpenses;
