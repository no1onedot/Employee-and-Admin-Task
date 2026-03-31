import React, { useContext } from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashBoard = (props) => {

    
    return (
        <div className='h-screen w-full '>
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>

           
        </div>
    )
}

export default AdminDashBoard