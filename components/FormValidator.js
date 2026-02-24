class FormValidator {
  constructor(settings, formEl) {
    this._formSelector = settings._formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      settings.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      this._inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, settings);
        this._toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}

export default FormValidator;
