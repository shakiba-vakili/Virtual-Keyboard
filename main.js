let keys = document.querySelectorAll(".key");
let spaceKey = document.querySelector(".space-key");
let h1 = document.querySelector("h1");
let praghraf2 = document.querySelector(".praghraf2");
let BackspaceKey = document.querySelector(".Backspace-key");
let shiftLeft = document.querySelector(".shift-left");
let ctrlLeft = document.querySelector(".ctrl-left");
let altLeft = document.querySelector(".alt-left");
let altRight = document.querySelector(".alt-right");
let ctrlRight = document.querySelector(".ctrl-right");
let shiftRight = document.querySelector(".shift-right");
let capsLockKey = document.querySelector(".caps-lock-key");
let toggleCircle = document.querySelector(".toggle-circle");
let nightMode = document.querySelector(".night-mode");
let body = document.querySelector("body");
let keyboardWrapp = document.querySelector(".keyboard-wrapp");
let tabKey = document.querySelector(".tab-key");
let slashKey = document.querySelector(".slash-key");
let enterKey = document.querySelector(".enter-key");
let textInput = document.querySelector(".text");
let changeColor = document.querySelector(".change-light-color");
let colorsInput = document.querySelector(".colors-input");
let keyboardLight = document.querySelector(".keyboard-light");

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("LowerCaseName", keys[i].innerText.toLowerCase());
}

window.addEventListener("keydown", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
    }
    if (e.code == "ShiftLeft") {
      shiftLeft.classList.add("active");
      shiftRight.classList.remove("active");
    }
    if (e.code == "ShiftRight") {
      shiftRight.classList.add("active");
      shiftLeft.classList.remove("active");
    }
    if (e.code == "CapsLock") {
      capsLockKey.classList.add("active");
    }
    if (e.code !== "CapsLock") {
      capsLockKey.classList.remove("active");
    }
  }
});

window.addEventListener("keyup", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.remove("active");
      keys[i].classList.add("remove");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
      spaceKey.classList.remove("remove");
    }
    if (e.code == "shiftLeft") {
      shiftRight.classList.remove("active");
      shiftRight.classList.add("remove");
    }
    if (e.code == "shiftRight") {
      sheftLift.classList.remove("active");
      sheftLift.classList.add("remove");
    }

    setTimeout(() => {
      keys[i].classList.remove("remove");
    }, 200);
  }
});

nightMode.addEventListener("click", function () {
  toggleCircle.classList.toggle("active");
  body.classList.toggle("active");
  nightMode.classList.toggle("active");
  keyboardWrapp.classList.toggle("active");
  textInput.classList.toggle("active");
  changeColor.classList.toggle("active");
  h1.classList.toggle("active");
  praghraf2.classList.toggle("active");
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle("keys-night");
  }
});

colorsInput.addEventListener("input", function () {
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = colorsInput.value;
  }
  keyboardLight.style.background = colorsInput.value;
  h1.style.color = colorsInput.value;
});
