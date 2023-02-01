const header = document.querySelector("nav");
const sectionOne = document.querySelector(".slideshow-container");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
   
    if (!entry.isIntersecting) { console.log("i am here");
      header.classList.remove("nav-scrolled");
    } else {
      console.log("i am not here");
      header.classList.add("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);