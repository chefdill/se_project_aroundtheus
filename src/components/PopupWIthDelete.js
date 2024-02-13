import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._formEl = this._popupElement.querySelector(".modal__form");
  }

  setEventListeners() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }

  setSubmitAction(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }
}
