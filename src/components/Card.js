export default class Card {
    constructor(
      cardData, 
      cardSelector, 
      handleImageClick, 
      handleDeleteClick, 
      handleLikeIcon
      ) 
      
      {
      this._name = cardData.name;
      this._link = cardData.link;
      this._cardSelector = cardSelector;
      this._handleDeleteClick = handleDeleteClick;
      this._handleLikeIcon = handleLikeIcon;
      this._handleImageClick = handleImageClick;
    }

    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content.firstElementChild.cloneNode(true);
  
      return cardElement;
    }
  
    _setEventListeners() {
      this._cardElement
      .querySelector("card__button-remove")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });

      this._cardElement
      .querySelector("card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

      this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick({ name: this._name, link: this._link });
      });

    }
    
    _handleLike() {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button_active");
    }
  
    _handleDelete() {
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