import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector(".modal__form")
        this._closeButton = this._popupElement.querySelector(".modal__close");
    }

    close() {
        this._popupForm.reset();
        super.close();
        this._popupForm.removeEventListener("submit", this._handleFormSubmit);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this._closeButton();
    }

    _getInputValues() {
        const inputs = this._popupForm.querySelectorAll(".modal__input");
        const inputValues = {};
        inputs.forEach((input) => 
            (inputValues[input.name] = input.value));
            return inputValues;
    }

    setEventListeners(){
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }

    getCloseButton(){
        return this._closeButton;

    }

    getForm(){
        return this._popupForm;
    }

}
