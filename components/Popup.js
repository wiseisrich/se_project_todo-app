class Popup {
  constructor({ PopupSelector }) {
    this._popupElement = document.querySelector(PopupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose() {
    if (Evt.key === "Escape") {
      this._popupCloseBtn();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    // remove the class from the popup element
    this._popupElement.classList.remove("popup_visible");
    //remove the escape listener.
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (evt) => {
      // if the event target's classList contain "popup__cplose" or "popup"
      // then close the modal
    });
  }
}

export default Popup;
