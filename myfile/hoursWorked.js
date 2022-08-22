// create and algorithm that can workout the hours worked
//through a 24 hour period

// parameters hour of start to hour of finish
// data the 24 hour clock

const hoursWorked = (start, end, breakTime) => {
  const clock24 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  const clockReg = [
    "12:00am",
    "1:00am",
    "2:00am",
    "3:00am",
    "4:00am",
    "2:00am",
    "2:00am",
    "2:00am",
    "2:00am",
    "2:00am",
    "2:00am",
    "2:00am",
  ];
  return clock[end + 1] - clock[start + 1] - breakTime;
};

const time = hoursWorked(5, 16, 2);
console.log(time);
