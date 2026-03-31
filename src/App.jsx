import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState('');
  const [loggedInUserData,setLoggedInUserData] = useState(null);
  const Data1 = useContext(AuthContext);
  const authData = Data1.userData
  console.log(authData)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser');
  if(loggedInUser){
   const userData = JSON.parse(loggedInUser);
   setUser(userData.role)
   setLoggedInUserData(userData.data)
  }
},[])

  const handleLogin = (email, password) => {
  
    const employee = authData.employees.find((e)=>email==e.email && e.password==password);
    
    if(employee){
      setUser('employee');
      setLoggedInUserData(employee);
       localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data : employee}));

  } else if (email === 'admin@example.com' && password === '123') {
    setUser('admin');
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  } else {
    alert("Invalid Credentials");
  }
  
};


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashBoard changeUser={setUser} /> : user == 'employee' ? <EmployeeDashBoard data={loggedInUserData} changeUser={setUser}/> : null}
      {/* <AdminDashBoard/> */}
    </>
  )
}

export default App
