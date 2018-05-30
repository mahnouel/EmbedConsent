import Cookie from 'js-cookie'

class EmbedConsent {
  constructor () {
    this.elements = null
  }

  enable () {
    this.elements = document.querySelectorAll('.js-embed')
    this.elements.forEach((element) => {
      if (this.isOpen(element)) {
        this.open(element)
        return
      }

      const opener = element.querySelector(':scope .js-embed__opener')
      if (opener) {
        opener.addEventListener('click', this.open.bind(this, element))
      } else {
        console.warn('embed: .js-embed__opener not found', element)
      }
    })
  }

  open (element) {
    const src = element.dataset.embedSrc
    if (src) {
      const iframe = document.createElement('iframe')
      iframe.classList.add('embed')
      iframe.classList.add('js-embed--open')

      const classList = element.dataset.embedClass
      if (classList) {
        iframe.classList.add(...classList.split(' '))
      }

      iframe.src = src
      element.replaceWith(iframe)

      this.saveOpen(element)
    } else {
      console.warn('embed: data-embed-src not set', element)
    }
  }

  saveOpen (element) {
    const id = element.dataset.embedId
    if (id) { Cookie.set(`embed-${id}`, true, { expires: 90 }) }
  }

  isOpen (element) {
    const id = element.dataset.embedId
    if (id) { return Cookie.get(`embed-${id}`) }
    console.info('embed: not using cookie', element)
    return false
  }
}

export default EmbedConsent
