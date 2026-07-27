import React from "react";
import API from "../services/api";

const TransactionList = ({ transactions, fetchTransactions }) => {
  const deleteTransaction = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/transactions/${id}`);
      fetchTransactions();
    } catch (error) {
      console.error(error);
      alert("Failed to delete transaction");
    }
  };

  return (
    <div className="transaction-list">
      <h3>📋 Recent Transactions</h3>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💸</div>
          <h4>No Transactions Yet</h4>
          <p>Add your first income or expense to get started.</p>
        </div>
      ) : (
        transactions.map((transaction) => (
          <div key={transaction._id} className="transaction-item">
            <div className="transaction-left">
              <div className="transaction-icon">
                {transaction.type === "income" ? "📈" : "📉"}
              </div>

              <div>
                <h4>{transaction.title}</h4>

                <span
                  className={`category-badge ${
                    transaction.type === "income"
                      ? "income-badge"
                      : "expense-badge"
                  }`}
                >
                  {transaction.category}
                </span>

                <p className="transaction-date">
                  {new Date(transaction.createdAt).toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>

            <div className="transaction-right">
              <h3
                className={
                  transaction.type === "income"
                    ? "income-text"
                    : "expense-text"
                }
              >
                {transaction.type === "income" ? "+" : "-"} ₹
                {transaction.amount.toLocaleString("en-IN")}
              </h3>

              <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction._id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;