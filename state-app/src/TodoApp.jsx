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
      const newItem = {
        id: Math.random(), // 0 - .9999999999999999
        text: text,
        complete: false,
        createdAt: Date.now() // April 21 2025, 7h 42mn 5s 90ms
      };
      // add to list          spread
      const newTask = [newItem, ...task]; // create a new array with text
      setTask(newTask);
      // reset the text
      setText("");
    }
  }
  // parameter
  const deleteHandler = (id) => {
    // filter out
    // const updatedTasks = task.filter((e) => e.text !== t);
    // loop through array and create a new array []
    // [
    // {id: 0, text: chair},
    // {id:.1, text: bus}, 
    // {id:.2, text: car},
    // {id:.3, text: car},
    //]
    // new array = [
    // {id: 0, text: chair},
    // {id:.1, text: bus},
    // {id:.2, text: car}]
    const newArray = task.filter((object) => {
      // id = .3, return if NOT .3
      return object.id !== id
    });
    setTask(newArray);
  }

  const handleCheckBox = () => {
   
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
        {/* RENDER (display on UI) LIST */}
        {task.map(
          (object) => {
            console.log(object);
            return (
              // key: unique id for html
              <div key={object.id}>
                <li>{object.text}</li>
                <input
                  type="checkbox"
                  checked={object.complete}
                  onChange={handleCheckBox} // change this to arrow func and pass id
                />
                <button onClick={
                  () => deleteHandler(object.id)
                }>delete</button>
              </div>
            )
          }
        )}
      </ul>
    </div>
  )
}
