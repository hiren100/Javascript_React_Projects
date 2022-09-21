import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const [userinput, setuserinput] = useState('');
  const [userage, setuserage] = useState('');

  let input = document.getElementsByTagName('input')

  const addUserHandler = (event) => {
    event.preventDefault();
    if(userinput.trim().length === 0 || userage.trim().length===0){
      input.style.borderColor = "red"
      return;
    }
    if(Number(userage<1)){
      return;
    }
    setuserage("")
    setuserinput("")

    props.formData(userinput,userage)   
    
  };

  
  const handleUser = (event) =>{
    setuserinput(event.target.value)
  }

  const handleAge= (event) =>{
    setuserage(event.target.value)
  }


  return (
    <Card className={` test ${classes.input}`}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={handleUser} value={userinput} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={handleAge} value={userage}/>
        <Button type="submit">Add User</Button>
      </form>

    </Card>
  );
};

export default AddUser;
