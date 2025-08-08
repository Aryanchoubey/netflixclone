
// const scrollContainer = document.getElementById("scroll-box");
// const scrollRightBtn = document.getElementById("scrollRight");
// const scrollLeftBtn = document.getElementById("scrollLeft");

// const scrollAmount = 300;

// scrollRightBtn.addEventListener("click", () => {
//   scrollContainer.scrollBy({
//     left: scrollAmount,
//     behavior: "smooth"
//   });
// });

//   scrollLeftBtn.addEventListener("click", () => {
//     scrollContainer.scrollBy({
//       left: -scrollAmount,
//       behavior: "smooth"
//     });
//   });
// const scrollContainer = document.getElementById("scroll-box");

// const scrollAmount = 300;

// function scrollRight() {
//   scrollContainer.scrollBy({
//     top:0
//     left: 100,
//     behavior: "smooth"
//   });
// }

// function scrollLeft() {
//   scrollContainer.scrollBy({
//     left: -scrollAmount,
//     behavior: "smooth"
//   })};
// }
// const scrollContainer = document.getElementById("scroll-box");
// const scrollAmount = 300;

// function scrollRight() {
//   scrollContainer.scrollBy({
//     left: scrollAmount,
//     behavior: "smooth"
//   });
// }

// function scrollLeft() {
//   scrollContainer.scrollBy({
//     left: -scrollAmount,
//     behavior: "smooth"
//   });
// }
// console.log("Script loaded");

// const scrollContainer = document.getElementById("scroll-box");
// const scrollAmount = 300;
// const leftScrollBtn = document.querySelector(".scroll-btn.left").addEventListener("click", scrollLeft);
// const rightScrollBtn = document.querySelector(".scroll-btn.right").addEventListener("click", scrollRight);

// function scrollRight() {
//   scrollContainer.scrollBy({
//     left: scrollAmount,
//     top: 0,
//     behavior: "smooth"
//   });
// }

// function scrollLeft() {
//   console.log("Scrolling left");
//   scrollContainer.scrollBy({
//     left: -scrollAmount,
//     top: 0,
//     behavior: "smooth"
//   });
// }
const scrollContainer = document.getElementById("scroll-box");
const scrollAmount = 300;

const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");
let scrollTimeout;
function scrollRight() {
  scrollContainer.scrollBy({
    left: scrollAmount,
    top: 0,
    behavior: "smooth"
  });
}
setTimeout(() => {
  console.log("Scrolling stopped!");
}, 200);

function scrollLeft() {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    top: 0,
    behavior: "smooth"
  });
}

function updateButtons() {
  // Hide left button if already at start
  leftBtn.classList.toggle("hidden", scrollContainer.scrollLeft <= 0);

  // Hide right button if already at end
  let atEnd =
    Math.ceil(scrollContainer.scrollLeft + scrollContainer.clientWidth) >=
    scrollContainer.scrollWidth;
  rightBtn.classList.toggle("hidden", atEnd);
}
function handlescroll(){
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateButtons, 300);
}

// Event listeners
leftBtn.addEventListener("click", scrollLeft);
rightBtn.addEventListener("click", scrollRight);
scrollContainer.addEventListener("scroll", handlescroll);

// Run once on page load
updateButtons();

const outer = document.querySelector(".class7");
const hiddenBox = document.querySelector(".class7b");
outer.addEventListener("click", () => {
  console.log("class7b")
  if (hiddenBox.style.display === "none" || hiddenBox.style.display === "") {
    hiddenBox.style.display = "block";
  } else {
    hiddenBox.style.display = "none";
  }
})
const outer1 = document.querySelector(".class8");
const hiddenbox1 = document.querySelector(".class8b");
outer1.addEventListener("click", () => {
  if (hiddenbox1.style.display === "none" || hiddenbox1.style.display === "") {
    hiddenbox1.style.display = "block";

  } else {
    hiddenbox1.style.display = "none";
  }
})
const outer2 = document.querySelector(".class9");
const hiddenbox2 = document.querySelector(".class9b");
outer2.addEventListener("click", () => {
  if (hiddenbox2.style.display === "none" || hiddenbox2.style.display === "") {
    hiddenbox2.style.display = "block";

  } else {
    hiddenbox2.style.display = "none";
  }
})
const outer3 = document.querySelector(".class10");
const hiddenbox3 = document.querySelector(".class10b");
outer3.addEventListener("click", () => {
  if (hiddenbox3.style.display === "none" || hiddenbox3.style.display === "") {
    hiddenbox3.style.display = "block";

  } else {
    hiddenbox3.style.display = "none";
  }
})
const btn = document.querySelector(".scroll-btn.left");
const btn1 =document.querySelector(".scroll-btn.right");

btn.addEventListener("click", function() {
  btn.classList.toggle("active");
  btn1.classList.remove("active");
    this.classList.add("active");
});
console.log("helo");



// const items = document.querySelector(".class7");
// const leftBtn = document.querySelector(".scroll-btn.left");
// const rightBtn = document.querySelector(".scroll-btn.right");

// function updateButtons() {
//   leftBtn.classList.toggle("hidden", items.scrollLeft <= 0);
//   rightBtn.classList.toggle(
//     "hidden",
//     items.scrollLeft + items.clientWidth >= items.scrollWidth
//   );
// }

// // Scroll actions
// leftBtn.addEventListener("click", () => {
//   items.scrollBy({ left: -200, behavior: "smooth" });
// });
// rightBtn.addEventListener("click", () => {
//   items.scrollBy({ right: 2300, behavior: "smooth" });
// });

// // Listen for scrolling to hide/show buttons
// items.addEventListener("scroll", updateButtons);

// // Initial check
// updateButtons();

const signiBtn = document.querySelector(".signin").addEventListener('click', navigateToSignin)

function navigateToSignin(){
  window.location.href = "signin.html"
}



