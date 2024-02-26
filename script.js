const body = document.getElementsByTagName("body")[0];

const left = document.getElementById("left");
const right = document.getElementById("right");

const buttonPower = document.getElementById("power");

const buttonOff = document.getElementById("off");

const AllButton = document.querySelectorAll(".same-btn");
// Appearence More And Less
const buttonMore = document.getElementById("more_app");
const buttonLess = document.getElementById("mines_app");

// Define variables for number buttons from 1 to 9
const buttonPoint = document.getElementById("decimal");
const buttonZero = document.getElementById("zero");
const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const buttonFive = document.getElementById("five");
const buttonSix = document.getElementById("six");
const buttonSeven = document.getElementById("seven");
const buttonEight = document.getElementById("eight");
const buttonNine = document.getElementById("nine");

// Define variables for arithmetic operation buttons
const buttonDelete = document.getElementById("del");
const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("mines");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("division");

// Define variables for reset and equals buttons
const buttonReset = document.getElementById("reset");
const buttonEqual = document.getElementById("equal");

// Now you can use these variables to add event listeners or perform other actions
const screen = document.getElementById("result-screen");

window.onload = () => {
  AllButton.forEach((e) => {
    e.classList.add("offing");
  });
};

buttonDelete.addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML.trim().slice(0, -1);
  var_power = true;
  if (screen.innerHTML.includes("Result = ")) {
    screen.innerHTML = "";
  }
});

buttonPoint.addEventListener("click", () => {
  if (!screen.innerHTML.includes(".")) {
    screen.innerHTML += ".";
    var_power = true;
    operator = true;
  }
});

buttonZero.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "0";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonOne.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "1";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonTwo.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "2";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonThree.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "3";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonFour.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "4";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonFive.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "5";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonSix.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "6";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonSeven.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "7";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonEight.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "8";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

buttonNine.addEventListener("click", () => {
  if (!isPowerEntered) {
    screen.innerHTML = screen.innerHTML + "9";
    var_power = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
  } else {
  }
});

// All Var
var operator = false;

var var_mult = false;
buttonMultiply.addEventListener("click", () => {
  if (var_mult && operator) {
    screen.innerHTML = screen.innerHTML + " x ";
    var_power = true;
    isPowerEntered = false;
    var_mult = false;
    operator = false;
    if (screen.innerHTML.includes("Result = ")) {
      const value_result = localStorage.getItem("value");
      screen.innerHTML = screen.innerHTML.replace(" = ", "");
      screen.innerHTML = screen.innerHTML.replace(/\d/g, "");
      if (screen.innerHTML.includes(".")) {
        screen.innerHTML = screen.innerHTML.replace(".", "");
      }
      return; // هنا يتم إيقاف تنفيذ أي تعليمات إضافية بعد تحديث الشاشة
    }
  }
});

var var_devesion = false;

buttonDivide.addEventListener("click", () => {
  if (var_devesion && operator) {
    screen.innerHTML = screen.innerHTML + " ÷ ";
    var_power = true;
    isPowerEntered = false;
    var_devesion = false;
    operator = false;
    if (screen.innerHTML.includes("Result = ")) {
      const value_result = localStorage.getItem("value");
      screen.innerHTML = screen.innerHTML.replace(" = ", "");
      screen.innerHTML = screen.innerHTML.replace(/\d/g, "");
      if (screen.innerHTML.includes(".")) {
        screen.innerHTML = screen.innerHTML.replace(".", "");
      }
      return; // هنا يتم إيقاف تنفيذ أي تعليمات إضافية بعد تحديث الشاشة
    }
  }
});

var var_mines = false;
buttonMinus.addEventListener("click", () => {
  if (var_mines && operator) {
    screen.innerHTML = screen.innerHTML + " - ";
    var_power = true;
    var_mines = false;
    operator = false;
    isPowerEntered = false;
    if (screen.innerHTML.includes("Result = ")) {
      const value_result = localStorage.getItem("value");
      screen.innerHTML = screen.innerHTML.replace(" = ", "");
      screen.innerHTML = screen.innerHTML.replace(/\d/g, "");
      if (screen.innerHTML.includes(".")) {
        screen.innerHTML = screen.innerHTML.replace(".", "");
      }
      return;
    }
  }
});

buttonReset.addEventListener("click", () => {
  screen.innerHTML = "";
});

var var_plus = false;
buttonPlus.addEventListener("click", () => {
  if (var_plus && operator) {
    screen.innerHTML = screen.innerHTML + " + ";
    isPowerEntered = false;
    var_power = true;

    var_plus = false;
    operator = false;

    if (screen.innerHTML.includes("Result = ")) {
      localStorage.setItem("value", screen.innerHTML.match(/\d+/g));

      const value_result = localStorage.getItem("value");
      screen.innerHTML = screen.innerHTML.replace(" = ", "");
      screen.innerHTML = screen.innerHTML.replace(/\d/g, "");
      if (screen.innerHTML.includes(".")) {
        screen.innerHTML = screen.innerHTML.replace(".", "");
      }
      return;
    }
  }
});

var var_eq = false;

buttonEqual.addEventListener("click", () => {
  if (screen.innerHTML.length > 0) {
    // Change X Operator With Regular Operator *
    if (screen.innerHTML.includes("x")) {
      screen.innerHTML = screen.innerHTML.replace("x", "*");
    }
    // Change ÷ Operator With Regular Operator /
    if (screen.innerHTML.includes("÷")) {
      screen.innerHTML = screen.innerHTML.replace("÷", "/");
    }
    // Change ² Operator With Regular Operator ** 2
    if (screen.innerHTML.includes("²")) {
      screen.innerHTML = screen.innerHTML.replace("²", "**2");
    }

    if (
      screen.innerHTML.includes("Result") &&
      !screen.innerHTML.includes("Result =")
    ) {
      const value_result = localStorage.getItem("value");
      screen.innerHTML = screen.innerHTML.replace("Result", value_result);
    }

    const result = eval(screen.innerHTML);
    localStorage.setItem("value", result);
    var_power = true;

    screen.innerHTML = "Result = " + result;
    var_eq = true;
  }
});

left.addEventListener("mousedown", () => {
  screen.scrollTo({
    left: screen.scrollLeft - 20,
    behavior: "smooth",
  });
});

right.addEventListener("mousedown", () => {
  screen.scrollTo({
    left: screen.scrollLeft + 20,
    behavior: "smooth",
  });
});

let isPowerEntered = false;
var var_power = false;

buttonPower.addEventListener("click", () => {
  if (var_power) {
    screen.innerHTML = screen.innerHTML + "²";
    isPowerEntered = true;
    var_plus = true;
    var_mult = true;
    var_mines = true;
    var_devesion = true;
    operator = true;
    var_power = false;
  }
});

buttonOff.onclick = (e) => {
  if (e.target.value === "ON") {
    e.target.value = "OFF";
    AllButton.forEach((element) => {
      element.classList.add("offing");
    });
  } else {
    e.target.value = "ON";
    AllButton.forEach((element) => {
      element.classList.remove("offing");
    });
  }
  screen.classList.toggle("onning");
};

var opacity_style = 1;

buttonMore.addEventListener("click", () => {
  if (opacity_style < 1) {
    opacity_style += 0.1;
    body.style.opacity = opacity_style;
  }
});

buttonLess.addEventListener("click", () => {
  if (opacity_style > 0) {
    opacity_style -= 0.1;
    body.style.opacity = opacity_style;
  }
});
