import React, { useState } from 'react'
import './toDo.css'

 
      


// import React, { useState } from 'react';

// const ToDo = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       if (editIndex !== null) {
//         // If editing, update the task at editIndex
//         const updatedTasks = [...tasks];
//         updatedTasks[editIndex] = newTask;
//         setTasks(updatedTasks);
//         setEditIndex(null);
//       } else {
//         // If not editing, add a new task
//         setTasks([...tasks, newTask]);
//       }
//       setNewTask('');
//     }
//   };

//   const handleEditTask = (index) => {
//     setNewTask(tasks[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//     setEditIndex(null);
//   };

//   return (
//     <div className="ToDo">
//       <h1>React To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleInputChange}
//           placeholder="Enter a new task"
//         />
//         <button onClick={handleAddTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => handleEditTask(index)}>Edit</button>
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDo;

