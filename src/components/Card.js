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

class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);

    return cardElement;
  }

  isLiked() {
    return this._isLiked;
  }

  handleLike = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  handleDelete = () => {
    this._element.remove();
    this._element = null;
  };

  updateLikeView() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  _setEventListeners() {
    this._cardTrash.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._removeButton = this._element.querySelector(".card__button-remove");
    this._cardImageEl = this._element.querySelector(".card__image");

    this._setEventListeners();

    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = `Photo of ${this._name}`;
    this._element.querySelector(".card__label-title").textContent =
      this._name;

    this.updateLikeView();

    return this._element;
  }
}

export default Card;
