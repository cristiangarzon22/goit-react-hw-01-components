import React from 'react';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'status online' : 'status offline';

  return (
    <li className="item">
      <span className={statusClass}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

