import React, { useEffect, useState } from 'react'
import "./Calculator.css"

// default export 1 file only, but we can give nickname
export default function CalculatorApp() {
  // string are text, integers are numbers
  const addNumbers = (numberOne, numberTwo, numberThree) => {
    console.log("add", numberOne + numberTwo + numberThree);
  }
  // console 2 - 2, then call it
  // add 4 parameters and subtract them; call it twice
  const subtractNumbers = (x, y, a, b) => {
    console.log("subtract", x - y - a - b)
  }

  const divideNumbers = (numOne, numTwo) => {
    if (numOne === 0 || numTwo === 0) {
      console.log("can't use 0")
    } else {
      console.log("divide", numTwo / numOne);
    }
  }

  const multiplyArray = () => {
    // SCOPE: things can go in, they cant go out
    const numbersArray = [3, 9, 7, 7, 2, 1, 5, 12, 99]; // indexes
    // console.log(numbersArray[0] + numbersArray[4] * numbersArray[1] * numbersArray[3] * numbersArray[4] * numbersArray[5])

    let addedArrayNumbers = 0;
    for (let index = 0; index < numbersArray.length; index++) {
      const item = numbersArray[index]; // numbersArray[0], numbersArray[1]...
      // addedArrayNumbers = addedArrayNumbers + item;  
      addedArrayNumbers += item;
    }
    console.log(addedArrayNumbers);
  }

  const sayHello = (hi) => {
    const names = ["Leo", "Bobby", "Jess"];
    // 1. for loop leave inside brackets empty;
    // 2. console log the current item
    for (let index = 0; index < names.length; index++) {
      const item = names[index]; // gets current item index
      console.log(hi + " " + item);
    }
  }

  // crate a function called displayColors, no parameters
  let colors = [];
  const displayColors = () => {
    for (let index = 0; index < colors.length; index++) {
      const item = colors[index];
      console.log(item);
    }
  }

  // console.log("-------") // colors = []
  colors.push("red"); // colors = ["red"]
  colors.push("blue"); // colors = ["red", "blue"]
  colors.push("yellow"); // colors = ["red", "blue", "yellow"]
  colors.pop(); // colors = ["red", "blue"]
  // console.log(colors);

  const students = [
    {
      name: "Leo",
      grade: 77
    }
  ];

  const addStudent = (namePlaceholder, gradePlaceholder) => {
    students.push({ name: namePlaceholder, grade: gradePlaceholder });
  }
  // pass the parameters; add a name and grade, do it twice

  addStudent("Emma", 54); // students.push({ name: "Emma", grade: 54 });
  addStudent("Kendra", 99); // students.push({ name: "Kendra", grade: 99 });
  addStudent("James", 14); // students.push({ name: "James", grade: 14 });

  // console.log(students);

  // for (let index = 0; index < students.length; index++) {
  //   const element = students[index];
  //   console.log(element.name + " got a grade of " + element.grade)
  // }

  // react combines HTML, JS and CSS
  // const displayGrade = 0;
  // const [displayGrade, setDisplayGrade] = useState(0);

  let displayGrade = 0;
  const getGrade = (placeholderName) => {
    const found = students.find((element) => element.name === placeholderName);
    // save the grade to the state
    // setDisplayGrade(found.grade)
    displayGrade = found.grade;
  }
  getGrade("Emma");

  // create a variable called passingStudents
  // initialize (create) as empty array
  // if you get confused log student (array)
  let passingStudents = [];

  const getPassingStudents = () => {
    // const element = students[i];
    passingStudents = students.filter(element => {
      return element.grade > 65;
    });

  }
  // call function
  getPassingStudents()
  // create a parameter(placeholder) to search by (REPLACE "Leo");
  // log the "you got a" then add the grade to it

  // getGrade("Leo");
  // getGrade("Kendra");

  // displayColors();
  // sayHello("Hello");
  // multiplyArray()
  // divideNumbers(3, 9); // divide 3
  // divideNumbers(3, 0); // can't use 0

  // addNumbers(10, 4, 11);
  // addNumbers(7, 41, 6);

  // subtractNumbers(11, 2, 6, 1);
  // subtractNumbers(111, 22, 6, 1);

  return (
    <div style={{ color: "black" }}>
      {/* show the grade here*/}
      <p>The grade is {displayGrade}</p>
      <p>--------</p>
      {passingStudents.map(object => <p>{object.name} passed</p>)}
    </div>
  )
}
