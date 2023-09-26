const events = document.querySelector(".event");
const keyEvent = document.querySelector(".event-key .event-value");
const keyCodeEvent = document.querySelector(".event-keyCode .event-value");
const codeEvent = document.querySelector(".event-code .event-value");
const whichEvent = document.querySelector(".event-which .event-value");
const shiftKey = document.querySelector(".key-shift .key-status");
const ctrlKey = document.querySelector(".key-ctrl .key-status");
const altKey = document.querySelector(".key-alt .key-status");
const keyboard = document.querySelector(".keyboard");
const keyElements = keyboard.querySelectorAll(".row-key");

function keyboardEvents(e) {
  e.preventDefault();
  activeKey(e);

  if (e.key === " ") {
    keyEvent.style.fontStyle = "italic";
    keyEvent.textContent = "(space)";
  } else {
    keyEvent.textContent = e.key;
    keyEvent.style.fontStyle = "normal";
  }

  keyCodeEvent.textContent = e.keyCode;
  codeEvent.textContent = e.code;
  whichEvent.textContent = e.which;
}

function activeKey(e) {
  keyElements.forEach((key) => {
    if (e.code === key.dataset.spkey) {
      key.classList.add("active");
    } else if (e.keyCode == key.dataset.key) {
      key.classList.add("active");
    }
  });
}

function removeClass() {
  keyElements.forEach((key) => {
    if (key.classList.contains("active")) {
      key.classList.remove("active");
    }
  });
}

function specialKeys(e) {
  shiftKey.textContent = e.shiftKey ? "Active" : "Inactive";
  ctrlKey.textContent = e.ctrlKey ? "Active" : "Inactive";
  altKey.textContent = e.altKey ? "Active" : "Inactive";
}

window.addEventListener("keydown", keyboardEvents);
window.addEventListener("keydown", specialKeys);
window.addEventListener("keyup", specialKeys);
window.addEventListener("keyup", removeClass);

keyboard.addEventListener("click", function (e) {
  if (e.target.dataset.key) {
    keyCodeEvent.textContent = e.target.dataset.key;
    whichEvent.textContent = e.target.dataset.key;
    keyEvent.textContent = e.target.innerText;
  }
});
