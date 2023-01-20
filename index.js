function alertb(){
    alert("Coming Soon");
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.querySelector(".float-btns").style.bottom = "-500px"
  } else {
    document.getElementById("navbar").style.top = "-500px";
    document.querySelector(".float-btns").style.bottom = "20px"
  }
  prevScrollpos = currentScrollPos;
}

const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const hide = document.getElementById("hide");

menu.addEventListener("click",hidebutton);

function hidebutton(){
    menu.classList.toggle("hide");
    hide.classList.toggle("show");
}

hide.addEventListener("click",hideall);

function hideall(){
    menu.classList.toggle("hide");
    hide.classList.toggle("show");
    sidebar.style.left = "-1000px";
    more1.style.left = "-1000px";
    more2.style.left = "-1000px";
    more3.style.left = "-1000px";
}

function show(){
    if(sidebar.style.left = "-1000px"){
        sidebar.style.left = "0px";
    }
}



const extraslides = document.querySelectorAll(".show");
const more1 = document.querySelector(".more1");
const more2 = document.querySelector(".more2");
const more3 = document.querySelector(".more3");

extraslides.forEach(extraslide =>{
    extraslide.addEventListener("click",showingmore)
})

function showingmore(e){
    if(e.target.id === "1"){
        more1.style.left = "0px";
        sidebar.classList.toggle("active");
    } 
    else
    if(e.target.id === "2"){
        more2.style.left = "0px";
        sidebar.classList.toggle("active");
    }
    else
    if(e.target.id === "3"){
        more3.style.left = "0px";
        sidebar.classList.toggle("active");
    }
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    var w = document.documentElement.clientWidth || window.innerWidth;
 
    nxtBtn[i].addEventListener('click', () => {
        if (w <= 480){
            item.scrollLeft += 330;
        }else {
            item.scrollLeft += 1115;
        }

        
    })

    preBtn[i].addEventListener('click', () => {
        if (w <= 480){
            item.scrollLeft -= 330;
        }else {
            item.scrollLeft -= 1115;
        }
    })
})

let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
   
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
      
});

let noOfCharacs = 400;
let contentss = document.querySelectorAll(".contents");
contentss.forEach(contents => {
   
        let displayText = contents.textContent.slice(0,noOfCharacs);
        let moreText = contents.textContent.slice(noOfCharacs);
        contents.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
      
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
