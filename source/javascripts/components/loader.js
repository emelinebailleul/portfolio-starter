class loader {
  constructor () {
    //var loader = document.geElementById('loader')
    console.log('loader');
    window.addEventListener('turbolinks:load', function() {
      alert('loaded')
    })
  }
}
export default new loader
