import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector(".modal__form")
        this._inputEls = [...this._popupForm.querySelectorAll("#add-card-modal")];
    }

    close() {
        this._popupForm.reset();
        super.close();
    }

    _getInputValues() {
        const inputValues = {};
        this._inputEls.forEach((inputEl) => {
          inputValues[inputEl.name] = inputEl.value;
        });
        return inputValues;
      }

    setEventListeners(){
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }

    getForm(){
        return this._popupForm;
    }

}
