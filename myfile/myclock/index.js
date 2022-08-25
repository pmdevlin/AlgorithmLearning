let hourDigit1 = document.querySelector("#hourNum1");
let hourDigit2 = document.querySelector("#hourNum2");
let minDigit1 = document.querySelector("#minNum1");
let minDigit2 = document.querySelector("#minNum2");
let secDigit1 = document.querySelector("#secNum1");
let secDigit2 = document.querySelector("#secNum2");

const nodeArr = [
  hourDigit1,
  hourDigit2,
  minDigit1,
  minDigit2,
  secDigit1,
  secDigit2,
];

const addDigit = (arr) => {
  arr.map((elem) => {
    elem.innerHTML = "0";
  });
};
addDigit(nodeArr);

const secondsTimerFunction = () => {
  let count = 0;
  secDigit2.innerHTML = count;
  let sec = (secDigit1.innerHTML = 0);
  setTimeout(() => {
    if (count === 60) {
      count = 0;
      sec++;
    }
    count++;
  });
};

secondsTimerFunction();

// addDigit(hourDigit1);
// addDigit(hourDigit2);
// addDigit(minDigit1);
// addDigit(minDigit2);
// addDigit(secDigit1);
// addDigit(secDigit2);

//import clock from "./clockObj.js";

// const getHour = (time) => {
//   return clock[time];
// };

// const hoursWorked = (start, end, breaks) => {
//   if (start === "") {
//     return "enter a value for start";
//   }
//   if (end === "") {
//     return "enter a value for end";
//   }

//   return getHour(end) - getHour(start) - breaks;
// };

// let result = hoursWorked("5:00am", "4:00pm", 2);
// console.log(result);
