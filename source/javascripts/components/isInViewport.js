class isInViewport {
  constructor () {

    var inViewport = function (elem) {
      var distance = elem.getBoundingClientRect()
      return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };



    window.onload = function() {
      var elems = document.querySelectorAll('[data-animate-auto]')
      for (var elem of elems) {
        elem.classList.add('visible')
        if (inViewport(elem)) {
          elem.classList.add('visible')
        }
      }
    }

    document.onscroll = function() {
      var elems = document.querySelectorAll('[data-animate]')
      for (var elem of elems) {
        if (inViewport(elem)) {
          elem.classList.add('visible')
        } else {
          elem.classList.remove('visible')
        }
      }
    }

  }
}

export default new isInViewport
