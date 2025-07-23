var x = 3;
var y = 2;
var z = 2;

if (x >= y) {
  if (x >= z) {
    console.log("X is greatest.");
  } else if (x <= z) {
    console.log("Z is greatest.");
  }
} else if (y >= x) {
  if (y >= z) {
    console.log("Y is greatest.");
  } else if (y <= z) {
    console.log("Z is greatest.");
  }
}
