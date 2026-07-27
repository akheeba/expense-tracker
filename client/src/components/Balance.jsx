import React from "react";

const Balance = ({ transactions }) => {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="balance-container">
      <div className="balance-header">
        <div>
          <h2>💰 Expense Tracker</h2>
          <p className="balance-subtitle">
            Track your income and expenses with ease
          </p>
        </div>
      </div>

      <div className="balance-main">
        <p className="balance-label">Current Balance</p>

        <h1 className="balance-amount">
          ₹{balance.toLocaleString("en-IN")}
        </h1>
      </div>

      <div className="summary">
        <div className="income-box">
          <span className="summary-icon">📈</span>

          <div>
            <h4>Total Income</h4>
            <p>₹{income.toLocaleString("en-IN")}</p>
          </div>
        </div>

        <div className="expense-box">
          <span className="summary-icon">📉</span>

          <div>
            <h4>Total Expense</h4>
            <p>₹{expense.toLocaleString("en-IN")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;