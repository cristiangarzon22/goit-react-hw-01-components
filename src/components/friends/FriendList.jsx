import React from 'react';
import  FriendListItem  from "../friends/FriendListItem";
import css from "components/friends/FriendList";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <FriendListItem 
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline} 
        />
      ))}
    </ul>
  );
};
export default FriendList;