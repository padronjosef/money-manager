import React, { useState, useEffect } from "react";
import InputBudget from "./components/InputBudget";
import InputExpenses from "./components/InputExpenses";
import ListExpenses from "./components/ListExpenses";
import ControlBudget from "./components/ControlBudget";

function App() {
  // define the states
  const [showBudgetInput, setShowBudgetInput] = useState(true);
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [createExpense, setCreateExpense] = useState(false);

  // useEffect to update the remaining
  useEffect(() => {
    // add new budget
    if (createExpense) {
      setExpenses([...expenses, expense]);

      // remaining budget
      setRemaining(remaining - expense.amount);

      //set to false
      setCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    let amountDelete = expenses.filter((expense) => expense.id === id)[0]
      .amount;
    setRemaining(remaining + amountDelete);
  };

  const resetBudget = () => {
    setBudget(0);
    setExpenses([]);
    setRemaining(0);
    setShowBudgetInput(true);
  };

  return (
    <div className="container">
      <header>
        <h1>Money Manager</h1>
        <div className="content content-main">
          {showBudgetInput ? (
            <InputBudget
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowBudgetInput={setShowBudgetInput}
              remaining={remaining}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <InputExpenses
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                  remaining={remaining}
                />
              </div>
              <div className="one-half column">
                <ListExpenses
                  expenses={expenses}
                  deleteExpense={deleteExpense}
                />
                <ControlBudget
                  budget={budget}
                  remaining={remaining}
                  resetBudget={resetBudget}
                  setBudget={setBudget}
                  setRemaining={setRemaining}
                  expenses={expenses}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
