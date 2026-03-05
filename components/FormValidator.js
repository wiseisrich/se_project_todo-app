class FormValidator {
  constructor(settings, formEl) {
    this._formSelector = settings._formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._settings = settings;
    this._formEl = formEl;
  }

  _toggleButtonState() {
    this._inputList.some((inputElement) => {
      if (!inputElement.validity.valid) {
        this._disableSubmitButton();
      } else {
        this._enableSubmitButton();
      }
    });
  }

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorEl = this._formEl.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorEl.textContent = errorMessage;
    errorEl.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorEl = this._formEl.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorEl.textContent = "";
    errorEl.classList.remove(this._errorClass);
  }

  setEventListeners(settings) {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formEl.querySelector(
      settings.submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners(this._settings);
  }

  resetValidation() {
    this._formEl.reset();
    this._disableSubmitButton();
  }
}

export default FormValidator;
