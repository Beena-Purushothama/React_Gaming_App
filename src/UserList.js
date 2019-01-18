import React from 'react';

const UserList = (props) => {
  const {usersDetails} = props;
  return (
    <ol style={{float : "left"}}> 
    {usersDetails.map((userInfo) => (<li key= {userInfo}>{userInfo}</li>))}
    </ol>
  );
}

export default UserList;