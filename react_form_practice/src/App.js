import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [getdata,setgetdata] = useState([])

  const handleData = (uname, uage)=>{
    setgetdata((prevData)=>{
      return [...prevData, {name:uname,age:uage}]
    });
  }


  return (
    <div>
      <AddUser formData={handleData} />
      <UsersList users={getdata} />
    </div>
  );
}

export default App;
