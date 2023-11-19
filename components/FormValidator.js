export default class FormValidator {
    constructor(validationSettings, formEl) {
      this._formElement = formEl;
      this._inputSelector = validationSettings.inputSelector;
      this._submitButtonSelector = validationSettings.submitButtonSelector;
      this._inactiveButtonClass = validationSettings.inactiveButtonClass;
      this._inputErrorClass = validationSettings.inputErrorClass;
      this._errorClass = validationSettings.errorClass;
  
      // Save elements in the class instance
      this._inputEls = this._formEl.querySelectorAll(
        this._inputSelector
      );
      this._submitButton = this._formEl.querySelector(
        this._submitButtonSelector
      );
    }
  
    _showInputError(inputEl) {
      const errorMessageElement = this._formEl.querySelector(
        `#${inputEl.id}-error`
      );
      errorMessageElement.textContent = inputEl.validationMessage;
      errorMessageElement.classList.add(this._errorClass);
    }
  
    _hideInputError(inputEl) {
      const errorMessageElement = this._formEl.querySelector(
        `#${inputEl.id}-error`
      );
      inputEl.classList.remove(this._inputErrorClass);
      errorMessageElement.textContent = "";
      errorMessageElement.classList.remove(this._errorClass);
    }
  
    _checkInputValidity(inputEl) {
      if (!inputEl.validity.valid) {
        return this._showInputError(inputEl);
      }
      this._hideInputError(inputEl);
    }
  
    _hasInvalidInput() {
      return Array.from(this._inputEls).some(
        (inputEl) => !inputEl.validity.valid
      );
    }
  
    _disableButton() {
      if (this._submitButton) {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
      }
    }
  
    _enableButton() {
      if (this._submitButton) {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
      }
    }
  
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._disableButton();
      } else {
        this._enableButton();
      }
    }
  
    _setEventListeners() {
      this._inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", () => {
          this._checkInputValidity(inputEl);
          this._toggleButtonState();
        });
      });
    }
  
    resetValidation() {
      this._inputEls.forEach((inputEl) => {
        this._checkInputValidity(inputEl);
      });
      this._toggleButtonState();
    }
  
    disableSubmitButton() {
      this._disableButton();
    }
  
    enableValidation() {
      this._formEl.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    }
  }