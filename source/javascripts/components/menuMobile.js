class menuMobile {
  
  constructor () {
    var button = document.getElementById('menu-btn');
    var menu = document.querySelector('[data-animate-auto]');
    var open = false;

    button.onclick = function () {
    	if (open) {
    		this.classList.add('cross')
        menu.classList.add('open')
    		open = !open;
    	} else {
    		this.classList.remove('cross')
        menu.classList.remove('open')
    		open = !open;
    	}
    }
  }

}

export default new menuMobile
