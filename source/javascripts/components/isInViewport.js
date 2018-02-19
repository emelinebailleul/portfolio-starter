class isInViewport {
  constructor () {

    var inViewport = function (elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    var elems = document.querySelectorAll('[data-animate]');


    window.onload = function() {
      for (var elem of elems) {
        if (inViewport(elem)) {
          elem.classList.add('visible');
        } else {
          elem.classList.remove('visible');
        }
      }
    }

    document.onscroll = function() {
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
