// export default class Card {
//     constructor(
//       cardData, 
//       cardSelector, 
//       handleImageClick, 
//       handleDeleteClick, 
//       handleLikeIcon
//       ) 
      
//       {
//       this._name = cardData.name;
//       this._link = cardData.link;
//       this._cardSelector = cardSelector;
//       this._handleDeleteClick = handleDeleteClick;
//       this._handleLikeIcon = handleLikeIcon;
//       this._handleImageClick = handleImageClick;
//     }

//     _getTemplate() {
//       const cardElement = document
//         .querySelector(this._cardSelector)
//         .content.firstElementChild.cloneNode(true);
  
//       return cardElement;
//     }
  
//     _setEventListeners() {
//       this._cardElement
//       .querySelector("card__button-remove")
//       .addEventListener("click", () => {
//         this._handleDeleteClick();
//       });

//       this._cardElement
//       .querySelector("card__like-button")
//       .addEventListener("click", () => {
//         this._handleLikeIcon();
//       });

//       this._cardElement
//       .querySelector(".card__image")
//       .addEventListener("click", () => {
//         this._handleImageClick({ name: this._name, link: this._link });
//       });

//     }
    
//     _handleLike() {
//       this._cardElement
//         .querySelector(".card__like-button")
//         .classList.toggle("card__like-button_active");
//     }
  
//     _handleDelete() {
//       this._cardElement.remove();
//       this._cardElement = null;
//     }
  
//     getView() {
//       const cardData = { link: this._link, name: this._name };
//       this._cardElement = this._getTemplate();
//       const cardImageEL = this._cardElement.querySelector(".card__image");
//       cardImageEL.src = this._link;
//       cardImageEL.alt = this._name;
//       const cardTitleEL = this._cardElement.querySelector(".card__label-title");
//       cardTitleEL.textContent = cardData.name;
  
//       this._setEventListeners();
  
//       return this._cardElement;
//     }
//   }

export default class Card {  
  constructor({ name, link, likes, owner }, cardSelector, handleImageClick, handleClick, handleLikeIcon) {
  this._name = name;
  this._link = link;    
  this._likes = likes;    
  this._owner = owner;
  this._cardSelector = cardSelector;
  this._handleImageClick = handleImageClick;
  this._handleDeleteClick = handleDeleteClick;
  this._handleLikeIcon = handleLikeIcon;
}

_getTemplate() {
  const cardElement = document
    .querySelector(this._cardSelector)
    .content.firstElementChild.cloneNode(true);

  return cardElement;
}

_setEventListeners() {
  this._cardElement
    .querySelector(".card__button-remove")
    .addEventListener("click", () => {
      this._handleDeleteClick();
    });

  this._cardElement
    .querySelector(".card__like-button")
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

_updateLikes(newLikes) {
  this._likes = newLikes;
  const likesCount = this._cardElement.querySelector(".card__like-count");
  likesCount.textContent = this._likes.length;
}

getView() {
  this._cardElement = this._getTemplate();
  const cardImageEL = this._cardElement.querySelector(".card__image");
  cardImageEL.src = this._link;
  cardImageEL.alt = this._name;
  const cardTitleEL = this._cardElement.querySelector(".card__label-title");
  cardTitleEL.textContent = this._name;
  const likesCount = this._cardElement.querySelector(".card__like-count");
  likesCount.textContent = this._likes.length;
  const isLiked = this._likes.some((like) => like._id === this._owner._id);
  this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active", isLiked);

  this._setEventListeners();

  return this._cardElement;
}
}