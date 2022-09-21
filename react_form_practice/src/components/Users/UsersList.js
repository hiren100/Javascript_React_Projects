import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  
  const removeNode = (event) =>{
    event.target.parentNode.remove()
  }

  return (
    <div>
    <Card className={`${classes.users}`}>
    <ul>
      {props.users.map((user) => (
        <li key={Math.random(0 * 10)}>
          {user.name} {user.age} years old
          <button type='button' onClick={removeNode}>Remove</button>
        </li>
      ))}
    </ul>
    </Card>
    </div>
  );
};

export default UsersList;
