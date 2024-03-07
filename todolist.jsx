import React, { useState } from 'react';


function ToDoListGenerator() {
  const [tasks, setTasks] = useState(Array(5).fill(''));
  const [taskInput, setTaskInput] = useState('');
  const [finishedMessage, setFinishedMessage] = useState('');

  const addTask = () => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((t) => t === '');
    if (index !== -1) {
      newTasks[index] = taskInput;
      setTasks(newTasks);
      setTaskInput('');

      if (index === newTasks.length - 1) {
        setFinishedMessage("That's a nice list! Now get to it!");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h2> To Do List Generator</h2>
          <form>
            <fieldset>
              <div id="input_div">
                <label className='form-label' htmlFor="task">Please enter a task to your list:</label>
                <input
                  type="text"
                  className='form-control'
                  id="taskinput"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                />
                <button type="button" onClick={addTask} class="btn btn-success">
                  Add Task
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="column">
          <h2> My To-Do List</h2>
          <ol>
            {tasks.map((task, index) => (
              <li key={index} id={`task${index + 1}`}>
                {task}
              </li>
            ))}
          </ol>
          <p id="finished">{finishedMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default ToDoListGenerator;