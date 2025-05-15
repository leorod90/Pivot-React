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

  const handleCheckBox = (passDownId) => {
    // const newState = task.map()
    // const newState = task.map(obj =>  )
    // [
    // {id: 0, text: chair},
    // {id:.1, text: bus}, 
    // {id:.2, text: car},
    // {id:.3, text: car},
    //]
    const newState = task.map(currentItem =>
      // if the id we pass is the same as the item id; update
      currentItem.id === passDownId ?
        { ...currentItem, complete: !currentItem.complete } :
        currentItem
    );
    // creating a new copy
    // console.log(task)
    // const newState = task.map();

    setTask(newState);
  }

  const taskLength = task.length;
  const taskCompleted = task.filter(t => t.complete).length;

  return (
    <div>
      <h3>To-do App by Leo</h3>
      {taskLength == 0 ? null : <p>you have {taskLength} items</p>}
      {taskCompleted == 0 ? null :
        <p>{taskCompleted} tasks completed</p>
      }
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
          (object) => <TaskItem
            key={object.id}
            object={object}
            handleCheckBox={handleCheckBox}
            deleteHandler={deleteHandler}
          />
        )}
      </ul>
    </div>
  )
}

// the component for each item
function TaskItem(props) {
  return (
    // key: unique id for html
    <div>
      <input
        type="checkbox"
        checked={props.object.complete}
        // onChange={handleCheckBox}
        onChange={
          () => props.handleCheckBox(props.object.id)
        } // change this to arrow func and pass id
      />
      <li
        style={{
          textDecoration: props.object.complete ? "line-through" : null,
        }}
      >{props.object.text}</li>
      <button onClick={
        () => props.deleteHandler(props.object.id)
      }>delete</button>
    </div>
  )
}