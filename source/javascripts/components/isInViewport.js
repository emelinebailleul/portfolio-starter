class isInViewport {
  constructor () {

    var inViewport = function (el) {
        var distance = el.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    var elems = document.querySelectorAll('[data-animate]');

    // Animate on load
    window.onload = function() {
      console.log('loaded1')
      for (var elem of elems) {
        if (inViewport(elem) == true) {
          console.log('loaded2')
          elem.classList.add('visible');
        }
      }
    }

    // Animate on scroll to create fade in effect
    document.onscroll = function() {
      console.log('scroll')
      for (var elem of elems) {
        if (inViewport(elem)) {
          elem.classList.add('visible');
        } else {
          elem.classList.remove('visible');
        }
      }
    }

  }
}

export default new isInViewport
