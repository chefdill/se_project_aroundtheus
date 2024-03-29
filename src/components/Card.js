export default class Card {
    constructor({ name, link }, cardSelector, handleImageClick) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleImageClick = handleImageClick;
    }
  
    _setEventListeners() {
      this._cardElement
        .querySelector(".card__like-button")
        .addEventListener("click", () => {
          this._handleLikeIcon();
        });
  
      this._cardElement
        .querySelector(".card__button-remove")
        .addEventListener("click", () => {
          this._handleDeleteCard();
        });
  
      // Update the event listener for image click
      this._cardElement
        .querySelector(".card__image")
        .addEventListener("click", () => {
          this._handleImageClick({ name: this._name, link: this._link });
        });
    }
  
    _handleLikeIcon() {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_active");
    }
  
    _handleDeleteCard() {
      this._cardElement.remove();
      this._cardElement = null;
    }
  
    getView() {
      const cardData = { link: this._link, name: this._name };
  
      this._cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
  
      const cardImageEL = this._cardElement.querySelector(".card__image");
      cardImageEL.src = this._link;
      cardImageEL.alt = this._name;
  
      const cardTitleEL = this._cardElement.querySelector(".card__label-title");
      cardTitleEL.textContent = cardData.name;
  
      this._setEventListeners();
  
      return this._cardElement;
    }
  }