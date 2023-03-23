import React from 'react';
import  TransactionHistory  from 'components/Transactions/transactions';
import transactions from "data/transactions.json";
import css from "./transactions.module.css";
const Transaccion = () => {
    return (
        <>
      <div>
        <h1 className={css.title}>Transaction History</h1>
        <TransactionHistory items={transactions} />
      </div>
      </>
    );
  };

  export default Transaccion;
  
  