const sections = document.querySelector(".container").children;

window.addEventListener("scroll", function() {
  for (let section of sections) {
    // make more efficient
    if (this.innerHeight + this.scrollY - 150 > section.offsetTop) {
      section.classList.add("active");
    }
  }
});
