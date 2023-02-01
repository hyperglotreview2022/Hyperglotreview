let noOfCharacs = 400;
let contentss = document.querySelectorAll(".contents");
contentss.forEach((contents) => {
  let displayText = contents.textContent.slice(0, noOfCharacs);
  let moreText = contents.textContent.slice(noOfCharacs);
  contents.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}