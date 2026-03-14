import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    // move to constructor

    const inputValues = {};
    this._inputList.forEach((input) => {
      //add a key value pair to the values object for each input
      //the key is input name / the value is input.value
      // need to use brackets natation.
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      //pass result of _getinputValues to submission handler
      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }
}

export default PopupWithForm;
