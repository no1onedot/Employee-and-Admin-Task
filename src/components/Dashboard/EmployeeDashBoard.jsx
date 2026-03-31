import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../../TakeList/TaskList'

const EmployeeDashBoard = (props) => {

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
    <Header data={props.data} changeUser={props.changeUser}/>
    <TaskListNumbers data={props.data}/>
    <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashBoard