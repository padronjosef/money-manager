import React, { useState, useEffect } from "react";
import Error from "../Error";
import shortid from "shortid";

const InputExpenses = ({ setExpense, setCreateExpense, remaining }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("")
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("false");
  const [disabled, setDisabled] = useState(false);

  // function to add the expense
  const addExpense = (e) => {
    e.preventDefault();

    // validation
    if (!name.trim() || isNaN(amount) || !description.trim()) {
      setError(true);
      setErrorMessage("All fields are required");
      return;
    }

    if (amount < 1 || amount > remaining) {
      setError(true);
      setErrorMessage("Budget is wrong");
      return;
    }

    setError(false);

    // build the expense
    const expense = {
      name,
      amount,
      date,
      description,
      id: shortid.generate(),
    };

    // pass expense to principal component
    setExpense(expense);
    setCreateExpense(true);

    // reset form
    setName("");
    setAmount(0);
    setDescription("");
    setDate("")
  };

  useEffect(() => {
    remaining <= 0 ? setDisabled("disabled") : setDisabled(false);
  }, [remaining]);

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here</h2>

      {error ? <Error message={errorMessage} setError={setError}/> : null}

      <div className="field">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g: transportation"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="field">
        <label>Expense Amount</label>
        <input
          type="number"
          className="u-full-width"
          max={remaining}
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          disabled={disabled}
        />
      </div>
      <div className="field">
        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea
          className="u-full-width"
          placeholder="write a short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={disabled}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="add expense"
      />
    </form>
  );
};

export default InputExpenses;
