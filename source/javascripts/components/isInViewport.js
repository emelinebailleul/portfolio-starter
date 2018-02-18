class isInViewport {
  constructor () {
    const sections = document.querySelectorAll('.project-card');

    document.onload = function() {
      // Don't run the rest of the code if every section is already visible
      if (document.querySelectorAll('section.project-card:not(.visible)').length === 0) return;

      // Run this code for every section in sections
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.75 && section.getBoundingClientRect().top > 0) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      }
    };
  }
}

export default new isInViewport
