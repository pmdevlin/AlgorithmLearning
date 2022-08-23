// create and algorithm that can workout the hours worked
//through a 24 hour period

// parameters hour of start to hour of finish
// data the 24 hour clock

import clock from "./clockObj.js";

const getHour = (time) => {
  return clock[time];
};

const hoursWorked = (start, end, breaks) => {
  if (start === "") {
    return "enter a value for start";
  }
  if (end === "") {
    return "enter a value for end";
  }

  return getHour(end) - getHour(start) - breaks;
};

let result = hoursWorked("5:00am", "4:00pm", 2);
console.log(result);
