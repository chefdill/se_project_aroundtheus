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
const previewImage = document.querySelector(".modal__preview-image");
const previewImageTitle = document.querySelector(".modal__preview-title");
const previewImageModalClose = document.querySelector(
  "#preview-button-close-modal"
  );

/*Functions*/
function openPopup(popup){
  popup.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
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
}

function renderCard(cardData, wrapper){
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

/*EVENT LISTENERS*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

/*forProfile*/
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
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
 
