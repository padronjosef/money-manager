import React from "react";

const Expense = ({ expenses, deleteExpense, showMore, showbuttons }) =>
  expenses.map((expense) => (
    <li className={`expense__item ${showMore} ${showbuttons}`} key={expense.id}>
      <div>
        <p>
          <div>
            <p>{expense.name}</p>
            <time className="expense__date">{expense.date}</time>
          </div>
          <span className="expense__amount">$ {expense.amount}</span>
        </p>
      </div>
      <p className="expense__description">{expense.description}</p>

      <div className="row expense__buttons">
        <button
          className="one-half column delete alert-warning"
          onClick={() => deleteExpense(expense.id)}
        >
          Edit
        </button>
        <button
          className="one-half column delete alert-danger"
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </li>
  ));

export default Expense;
