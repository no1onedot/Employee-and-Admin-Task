import React, { useState , useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
   const [taskTitle, setTaskTitle] = useState("");
const [taskDescription, setTaskDescription] = useState("");
const [taskDate, setTaskDate] = useState("");
const [assignTask, setAssignTask] = useState("");
const [category, setCategory] = useState("");

const [newTask , setNewTask] = useState({})
 
 

const { userData, setUserData } = useContext(AuthContext);

const submitHandler = (e) => {
  e.preventDefault();

  const taskObj = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category,
    active: false,
    newTask: true,
    completed: false,
    failed: false
  };

  const data = JSON.parse(localStorage.getItem('employees'));

  const updatedEmployees = data.map((elem) => {
    if (assignTask === elem.firstName) {

      return {
      ...elem,
      tasks: [...(elem.tasks || []), taskObj],  // ✅ new array
      taskNumber: {
        ...elem.taskNumber,
        newTask: elem.taskNumber.newTask + 1   // ✅ new object
      }
    };
  }
  return elem;

  });

  // ✅ update localStorage
  localStorage.setItem('employees', JSON.stringify(updatedEmployees));

  // ✅ update context (IMPORTANT 🔥)
  setUserData({
    ...userData,
    employees: updatedEmployees
  });

  console.log(updatedEmployees);

  // reset
  setTaskTitle('');
  setTaskDescription('');
  setTaskDate('');
  setAssignTask('');
  setCategory('');
};
  return (
     <div className='bg-[]'>
                <form className='flex items-center justify-between bg-[#1c1c1c] p-5 ' onSubmit={(e)=>{
                    submitHandler(e);
                }}>
                    <div className='w-1/2'>

                        <div >
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gay-400 ' placeholder='Make a UI design' type='text'
                            value={taskTitle}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value)
                            }}
                            />
                        </div>


                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input type='date' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gay-400 '
                            value={taskDate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }}></input>
                        </div>


                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
                            <input type='text' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gay-400 ' placeholder='employee'
                            value={assignTask}
                            onChange={(e)=>{
                                setAssignTask(e.target.value)
                            }} />
                        </div>


                        <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input type='text' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gay-400 ' placeholder='design , dev , etc'
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }} />
                        </div>


                    </div>


                    <div className='w-1/2'>
                        <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea name='' rows='10' cols='30' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gay-400 '
                        value={taskDescription}
                            onChange={(e)=>{
                                setTaskDescription(e.target.value)
                            }}></textarea>
                    </div>


                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4  w-4/5'>Create Task</button>
                    </div>

                </form>
            </div>
  )
}

export default CreateTask