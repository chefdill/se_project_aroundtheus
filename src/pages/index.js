import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import{
  initialCards,
  addNewModalCard,
  profileEditModal,
  cardListEl,
  validationSettings,
  profileTitleInput,
  profileDescriptionInput,
} from "../utils/constants.js";

const editFormValidator = new FormValidator(
  validationSettings,
  document.querySelector("#profile-edit-modal")
);

editFormValidator.enableValidation();

const cardFormValidator = new FormValidator(
  validationSettings,
  document.querySelector("#add-card-form")
);

cardFormValidator.enableValidation();

/*Elements*/

const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addCardCloseButton = document.querySelector("#add-card-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardFormElement = addNewModalCard.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const previewImageModal = document.querySelector("#modal-preview");
const previewImage = document.querySelector(".modal__image");
const previewImageTitle = document.querySelector(".modal__preview-title");
const previewImageModalClose = document.querySelector(
  "#preview-image-close"
  );

const inputEl = document.querySelector(".modal__input");

/*Functions*/
function openPopup(popup){
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
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
  const card = new Card(cardData, "#card-template", handleImageClick);
  wrapper.prepend(card.getView());
}

function handleEsc(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

function handleImageClick({ name, link }) {
  previewImage.src = link;
  previewImage.alt = name;
  previewImageTitle.textContent = name;
  openPopup(previewImageModal);
}

function closeModalOnRemoteClick(e) {
  if (e.target === e.currentTarget || e.target.classList.contains("modal")) { 
     closePopup(e.target)
  }
}

/*EVENT LISTENERS*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});


profileEditModal.addEventListener("mousedown", closeModalOnRemoteClick);
addNewModalCard.addEventListener("mousedown", closeModalOnRemoteClick);
previewImage.addEventListener("mousedown", closeModalOnRemoteClick);

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
addNewCardButton.addEventListener("click", () => {
  openPopup(addNewModalCard)
  cardFormValidator.resetValidation()
});

addCardCloseButton.addEventListener("click", () =>
  closePopup(addNewModalCard)
);

initialCards.forEach((cardData)  => renderCard(cardData, cardListEl));
 
