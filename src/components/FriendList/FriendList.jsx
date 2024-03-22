import FriendListItem from "./FriendListItem";

// import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              status={friend.isOnline}
              username={friend.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
