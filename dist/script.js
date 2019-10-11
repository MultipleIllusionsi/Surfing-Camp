(function() {
  const OFFSET_BEFORE_SECTION = 150;
  const appSections = document.querySelectorAll("section");

  document.addEventListener("DOMContentLoaded", scrollSections);

  function scrollSections() {
    if (window.innerWidth > 767) {
      addingEventListenerToSections(appSections);
    } else {
      for (const section of sections) {
        section.classList.add("active");
      }
    }
  }

  function addingEventListenerToSections(sections) {
    window.addEventListener("scroll", function() {
      for (const section of sections) {
        const sectionCoordinate = this.innerHeight + this.scrollY;
        const scrollPage = section.offsetTop;

        if (sectionCoordinate - OFFSET_BEFORE_SECTION > scrollPage) {
          section.classList.add("active");
        }
      }
    });
  }
})();
