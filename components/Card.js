export default class Card {
    constructor(cardData, cardSelector, handleImageClick){
        this._name = cardData.name;
        this._link = cardData.link;
        this._cardSelector = cardSelector;
        this._modalImage = cardData.previewImage;
        this._handleImageClick = handleImageClick;
    }

    _getElement() {
        return document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
    }

    _handleLikeIcon = () => {
        this._likeButton.classList.toggle("card__like-button_active");
    }

    _handleDeleteIcon = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }

    _handleImageClick = () => {
        this._modalImage({ name : this._name, link : this._link });
    }

    //defines cardElement
    getView() {
        this._cardElement = this._getElement();
        this._cardImageEl = this._cardElement.querySelector(".card__image");
        this._cardTitleEl = this._cardElement.querySelector(".card__label-title");
        this._likeButton = this._cardElement.querySelector(".card__like_button");
        this._deleteButton = this._cardElement.querySelector(".card__button_remove");
        this._cardImageEl.src = this._link;
        this._cardImageEl.alt = this._name;
        this._cardTitleEl.textContent = this._name;

        this._setEventListeners();
        return this._cardElement;
    }

    _setEventListeners() {
        //card__like-button
        this._likeButton.addEventListener("click", () => {
            this._handleLikeIcon();
          });
        //card__button-remove
        this._deleteButton.addEventListener("click", () => {
            this._handleDeleteIcon();
          });
        //card_ImageEl
        this._cardImageEl.addEventListener("click", () => {
            this._handleImageClick({ name: this._name, link: this._link });
          });
        }
}
