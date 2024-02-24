import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super({ popupSelector });
        this._popupImage = this._popupElement.querySelector(".modal__image");
        this._popupTitle = this._popupElement.querySelector(".modal__preview-title");
    }

    open( link, name ){
        this._popupImage.src = link;
        this._popupImage.alt = `A photo of ${name}`;
        this._popupTitle.textContent = `${name}`;
        super.open();
    }
}