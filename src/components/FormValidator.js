class FormValidator {
    constructor( validationSettings, formSelector ) {
      this._inputSelector = validationSettings.inputSelector;
      this._submitButtonSelector = validationSettings.submitButtonSelector;
      this._inactiveButtonClass = validationSettings.inactiveButtonClass;
      this._inputErrorClass = validationSettings.inputErrorClass;
      this._errorClass = validationSettings.errorClass;
      this._formEl = document.querySelector( formSelector );
      console.log(formSelector);
      this._submitButtons = this._formEl.querySelector(this._submitButtonSelector);
      this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    }
  
    _checkInputValidity(inputEl) {
      if (!inputEl.validity.valid) {
        return this._showInputError(inputEl);
      }
      this._hideInputError(inputEl);
    }
  
    _showInputError(input) {
      const errorMessageEl = this._formEl.querySelector(`#${input.id}-error`);
      input.classList.add(this._inputErrorClass);
      errorMessageEl.textContent = input.validationMessage;
      errorMessageEl.classList.add(this._errorClass);
    }
  
    _hideInputError(input) {
      const errorMessageEl = this._formEl.querySelector(`#${input.id}-error`);
      input.classList.remove(this._inputErrorClass);
      errorMessageEl.textContent = "";
      errorMessageEl.classList.remove(this._errorClass);
    }
  
    _hasInvalidInput(inputList) {
      return !inputList.every((inputEl) => inputEl.validity.valid);
    }
  
    toggleButtonState() {
      if (this._hasInvalidInput(this._inputEls)) {
        this._submitButtons.classList.add(this._inactiveButtonClass);
        this._submitButtons.disabled = true;
        return;
      }
      this._submitButtons.classList.remove(this._inactiveButtonClass);
      this._submitButtons.disabled = false;
    }

    
    _setEventListeners() {
      this._inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", (e) => {
          this._checkInputValidity(inputEl);
          this.toggleButtonState();
        });
      });
    }
  
    enableValidation() {
      this._formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      this._setEventListeners();
    }
  }
  export default FormValidator;

