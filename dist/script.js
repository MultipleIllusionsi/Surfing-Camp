(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var appSections = [].slice.call(
      document.querySelectorAll("section")
    );

    if ("IntersectionObserver" in window) {
      let sectionsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              target.classList.add("active");
              sectionsObserver.unobserve(target);
            }
          });
        }
      );

      appSections.forEach(section =>
        sectionsObserver.observe(section)
      );
    } else {
      appSections.forEach(section => section.classList.add("active"));
    }
  });
})();
