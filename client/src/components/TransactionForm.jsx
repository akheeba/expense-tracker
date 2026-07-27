import React, { useState } from "react";
import API from "../services/api";

const TransactionForm = ({ fetchTransactions }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/transactions", {
        title,
        amount: Number(amount),
        type,
        category,
      });

      setTitle("");
      setAmount("");
      setType("expense");
      setCategory("Food");

      fetchTransactions();
    } catch (error) {
      console.error(error);
      alert("Failed to add transaction");
    }
  };

  return (
    <div className="transaction-form">
      <div className="form-header">
        <h3>➕ Add New Transaction</h3>
        <p>Record your income or expenses quickly.</p>
      </div>

      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Salary, Grocery, Shopping..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Transaction Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="expense">📉 Expense</option>
              <option value="income">📈 Income</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Food</option>
              <option>Salary</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Entertainment</option>
              <option>Health</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          💾 Save Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;