import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor ({ popupSelector, handleFormSubmit }) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector('.popup__form')
        this._handleFormSubmit = handleFormSubmit;
        this._closeButton = this._popoupElement.querySelector("modal__close");
    }

    close() {
        this._popupForm.reset();
        super.close();
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
            this._handleFormSubmite(this._getInputValues());
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
