class loader {
  constructor () {
    var loader = document.geElementById('loader')

    document.addEventListener('turbolinks:load', () => {
      loader.classList.add('loaded')
    })
  }
}
