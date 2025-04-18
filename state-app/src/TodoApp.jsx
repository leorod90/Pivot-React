import { useState } from "react";
// const App = () => {}
// const App = function() {}
export default function TodoApp(props) {
  // state are variables that update UI
  // left side name, right side changes; set

  // const text = "";
  const [text, setText] = useState("");
  // const task = [];
  const [task, setTask] = useState([]);

  const changeHandler = (event) => {
    const input = event.target.value;
    setText(input);
  }

  const addTaskHandler = () => {
    // "!" means not
    if (text !== "") {
      // add to list          spread
      const newTask = [text, ...task]; // create a new array with text
      setTask(newTask);
      // reset the text
      setText("");
    }
  }

  const deleteHandler = (t) => {
    // filter out
    const updatedTasks = task.filter((e) => e !== t);
    setTask(updatedTasks);
  }

  return (
    <div>
      <h3>To-do App</h3>
      <div>
        <input
          value={text}
          // onChange={() => { code here }}
          onChange={changeHandler}
        />
        <button onClick={addTaskHandler}>Add Task</button>
      </div>
      <ul>
        {task.map(
          (t) => {
            return (
              <div>
                <li>{t}</li>
                <button onClick={
                  // deleteHandler
                  () => deleteHandler(t)
                }>delete</button>
              </div>
            )
          }
        )}
      </ul>
    </div>
  )
}
