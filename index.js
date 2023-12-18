// window.addEventListener("load",function(){
//   setTimeout(
//     function open(event){
//       document.querySelector(".popup").style.display = "block";
//     },4000
//   )
// })
const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const hide = document.getElementById("hide");

const header = document.querySelector("nav");

// document.querySelector("#closepop").addEventListener("click",function(){
//   document.querySelector(".popup").style.display = "none";
// });




function alertb() {
  alert("Coming Soon");
}
var position = document.getElementById("navbar");
if (window.scrollY == 0) {
  document.querySelector(":root").style.setProperty("--white", "white");
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.querySelector(".float-btns").style.bottom = "-500px";
  } else {
    document.getElementById("navbar").style.top = "-500px";
    document.querySelector(".float-btns").style.bottom = "10px";
  }
  prevScrollpos = currentScrollPos;
};



menu.addEventListener("click", hidebutton);

function hidebutton() {
  menu.classList.toggle("hide");
  hide.classList.toggle("show");
}

hide.addEventListener("click", hideall);

function hideall() {
  menu.classList.toggle("hide");
  hide.classList.toggle("show");
  sidebar.style.left = "-1000px";
  more1.style.left = "-1000px";
  more2.style.left = "-1000px";
  more3.style.left = "-1000px";
  more4.style.left = "-1000px";
  more5.style.left = "-1000px";
  more6.style.left = "-1000px";
}
const extraslides = document.querySelectorAll(".show");
const more1 = document.querySelector(".more1");
const more2 = document.querySelector(".more2");
const more3 = document.querySelector(".more3");
const more4 = document.querySelector(".more4");
const more5 = document.querySelector(".more5");
const more6 = document.querySelector(".more6");

function show() {
  if ((sidebar.style.left = "-1000px")) {
    sidebar.style.left = "0px";
  }
}



extraslides.forEach((extraslide) => {
  extraslide.addEventListener("click", showingmore);
});

function showingmore(e) {
  if (e.target.id === "1") {
    more1.style.left = "0px";
    sidebar.classList.toggle("active");
  } else if (e.target.id === "2") {
    more2.style.left = "0px";
    sidebar.classList.toggle("active");
  } else if (e.target.id === "3") {
    more3.style.left = "0px";
    sidebar.classList.toggle("active");
  } else if (e.target.id === "4") {
    more4.style.left = "0px";
    sidebar.classList.toggle("active");
  } else if (e.target.id === "5") {
    more5.style.left = "0px";
    sidebar.classList.toggle("active");
  } else if (e.target.id === "6") {
    more6.style.left = "0px";
    sidebar.classList.toggle("active");
  }
}

const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  var w = document.documentElement.clientWidth || window.innerWidth;

  nxtBtn[i].addEventListener("click", () => {
    if (w <= 480) {
      item.scrollLeft += 370;
    }
    else  if(w<=1200){
      item.scrollLeft += 730;
    } else {
      item.scrollLeft += 1300;
    }
  });

  preBtn[i].addEventListener("click", () => {
    if (w <= 480) {
      item.scrollLeft -= 370;
    }
    else  if(w<=1200){
      item.scrollLeft -= 730;
    } else {
      item.scrollLeft -= 1300;
    }
  });
});

const productContainers1 = [...document.querySelectorAll(".product-container1")];
const nxtBtn1 = [...document.querySelectorAll(".nxt-btn1")];
const preBtn1 = [...document.querySelectorAll(".pre-btn1")];

productContainers1.forEach((item, i) => {
  var w = document.documentElement.clientWidth || window.innerWidth;

  nxtBtn1[i].addEventListener("click", () => {
    if (w <= 480) {
      item.scrollLeft += 330;
    } else {
      item.scrollLeft += 720;
    }
  });

  preBtn1[i].addEventListener("click", () => {
    if (w <= 480) {
      item.scrollLeft -= 330;
    } else {
      item.scrollLeft -= 720;
    }
  });
});

const productContainers2 = [...document.querySelectorAll(".product-container2")];
const nxtBtn2 = [...document.querySelectorAll(".nxt-btn2")];
const preBtn2 = [...document.querySelectorAll(".pre-btn2")];

productContainers2.forEach((item, i) => {
  var w = document.documentElement.clientWidth || window.innerWidth;

  nxtBtn2[i].addEventListener("click", () => {
    if (w <= 480) {
      item.scrollLeft += 370;
    }
  else  if(w<=1200){
      item.scrollLeft += 740;
    }
   else {
      item.scrollLeft += 1420;
    }
  });

  preBtn2[i].addEventListener("click", () => {
    if (w <= 480) {
      item.scrollLeft -= 370;
    }  else  if(w<=1200){
      item.scrollLeft -= 740;
    }
     else {
      item.scrollLeft -= 1420;
    }
  });
});

let noOfCharac = 140;
let contents = document.querySelectorAll(".content");
contents.forEach((content) => {
  let displayText = content.textContent.slice(0, noOfCharac);
  let moreText = content.textContent.slice(noOfCharac);
  content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
});


function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}

let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
  let i;

  // let slideimg = document.getElementsByClassName("sliderimg");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}

showSlides();
