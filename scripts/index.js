const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    alt: "Yosemite Valley",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    alt: "Lake Louise",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    alt: "Bald Mountains",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    alt: "Latemar",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg ",
    alt: "Vanoise National Park",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg  ",
    alt: "Lago di Braies",
  },
];

/*Elements*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__plus-button");
const addNewModalCard = document.querySelector("#add-card-modal");
const addCardCloseButton = document.querySelector("#add-card-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardFormElement = addNewModalCard.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const previewImageModal = document.querySelector("#modal-preview");
const previewImage = document.querySelector(".modal__image");
const previewImageTitle = document.querySelector(".modal__preview-title");
const previewImageModalClose = document.querySelector(
  "#preview-image-close"
  );

const inputElement = document.querySelector(".modal__input");

/*Functions*/
function openPopup(popup){
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
  document.addEventListener("click", handleClick);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
  document.removeEventListener("click", handleClick);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__label-title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardRemoveButton = cardElement.querySelector(".card__button-remove");


  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  cardRemoveButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.alt;
  cardTitleEl.textContent = cardData.name;

  cardImageEl.addEventListener("click", function () {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewImageTitle.textContent = cardData.name;
    openPopup(previewImageModal);
  });

  return cardElement;
}

const cardTitleInput = addNewCardFormElement.querySelector
(".modal__input_type_title");

const cardUrlInput = addNewCardFormElement.querySelector
(".modal__input_type_url" );


/*Event Handlers*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardSubmit(e){
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({name, link}, cardListEl);
  closePopup(addNewModalCard);
  addNewCardFormElement.reset();
}

function renderCard(cardData, wrapper){
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function handleEsc(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

function handleClick(e) {
  if (e.mouse === "click") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}


/*EVENT LISTENERS*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

/*forProfile*/
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

previewImageModalClose.addEventListener("click", () => {
  closePopup(previewImageModal);
});

/*forCards*/
addNewModalCard.addEventListener("submit", handleCardSubmit);
addNewCardButton.addEventListener("click", () => 
  openPopup(addNewModalCard)
);
addCardCloseButton.addEventListener("click", () => 
  closePopup(addNewModalCard)
);

initialCards.forEach((cardData)  => renderCard(cardData, cardListEl));
 
