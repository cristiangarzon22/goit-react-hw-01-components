import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { User } from 'components/socialProfile/social1';
import {STadistics} from 'components/stadistics/stadistics1';
import { FriendList } from 'components/friends/friends1';
import {Transaccion} from 'components/Transactions/transactions1';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <User/>
    <STadistics/>
    <FriendList/>
    <Transaccion/>
  </React.StrictMode>
);
