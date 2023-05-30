let noOfCharacs = 400;
let contentss = document.querySelectorAll(".contents");
let extracontents = document.querySelector(".extracontent")
contentss.forEach((contents) => {
  let displayText = contents.textContent.slice(0, noOfCharacs);
  let moreText = contents.textContent.slice(noOfCharacs);
  contents.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
});
function hideextra(){
  extracontents.classList.toggle("extracontent");
}
function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}

let noOfCharacs1 = 200;
let contentss1 = document.querySelectorAll(".contents1");
contentss1.forEach((contentss) => {
  let displayText = contentss.textContent.slice(0, noOfCharacs1);
  let moreText = contentss.textContent.slice(noOfCharacs1);
  contentss.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}