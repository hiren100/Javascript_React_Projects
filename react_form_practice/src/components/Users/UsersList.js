import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
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
          <Button type='button'  onClick={removeNode}>Remove</Button>
        </li>
      ))}
    </ul>
    </Card>
    </div>
  );
};

export default UsersList;
