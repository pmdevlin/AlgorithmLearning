// diagonals star with js

const n = 7;

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === j ||
        i === n - 1 ||
        j === n - 1 ||
        i + j === n - 1
      ) {
        console.log("*");
      } else {
        console.log(" ");
      }
      console.log();
    }
  }
};

pattern(n);
