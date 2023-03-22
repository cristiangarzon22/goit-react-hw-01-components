import React from 'react';
import { TransactionHistory } from 'components/Transactions/transactions';
import transactions from 'components/Transactions/transactions.json';
export const Transaccion = () => {
    return (
        <>
      <div>
        <h1>Transaction History</h1>
        <TransactionHistory items={transactions} />
      </div>
      </>
    );
  };
  
  