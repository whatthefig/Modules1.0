export class Popup {
    constructor(container, showPopup, hidePopup) {
      this.container = container;
      this.showPopup = showPopup;
      this.hidePopup = hidePopup;
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.showPopup.addEventListener('click', this.open);
      this.hidePopup.addEventListener('click', this.close);
    }
  
    open() {
      this.container.classList.add('popup_is-opened');
    }
  
    close() {
      this.container.classList.remove('popup_is-opened');
    }
  }