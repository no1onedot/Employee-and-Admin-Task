import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../Utils/LocalStorage';

const Header = (props) => {
  const [userName, setUserName] = useState("");
  console.log(props)
  

  useEffect(() => {
    if (!props.data) {
      setUserName("Admin");
    } else {
      setUserName(props.data.firstName);
    }
  }, [props.data]);
  const logout =()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('')
   

  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{userName} ! 👋</span>
      </h1>
      <button className='bg-red-600 text-lg font-medium px-5 py-2 rounded-sm' onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default Header;