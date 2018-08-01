import React from 'react';

const UserInfo = (props) => {
  const user = props.user;
  return (
    <li>
      <div className="Users-list-name">
        <span className="Users-list-img">{user.img}</span>
        {user.name}
      </div>
      <div className="Users-list-date">
        {user.createdAt}
      </div>
    </li>
  );
};

export default UserInfo;
