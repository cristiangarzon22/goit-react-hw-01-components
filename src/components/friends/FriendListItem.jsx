import React from 'react';
import css from "components/friends/FriendListItem";
const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'status online' : 'status offline';

  return (
    <li className={css.item}>
      <span className={statusClass}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;