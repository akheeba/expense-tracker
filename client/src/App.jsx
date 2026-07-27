import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import API from "./services/api";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <ExpenseChart transactions={transactions} />
      <TransactionForm fetchTransactions={fetchTransactions} />

      <TransactionList
        transactions={transactions}
        fetchTransactions={fetchTransactions}
      />
    </div>
  );
}

export default App;