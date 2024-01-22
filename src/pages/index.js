import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import{
  initialCards,
  addNewModalCard,
  profileEditModal,
  cardListEl,
  validationSettings,
  profileTitleInput,
  profileDescriptionInput,
  profileEditButton,
  addNewCardButton,
} from "../utils/constants.js";

//Variables

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f00dbe4d-3bcf-40e3-a46f-9e1ed8206bd5",
    "Content-Type": "application/json"
  }
}); 

const cardFormValidator = new FormValidator(addNewModalCard, validationSettings);
cardFormValidator.enableValidation();

const profileEditForm = profileEditModal.querySelector(".modal__form");
const editFormValidator = new FormValidator(
  profileEditForm,
  validationSettings
);

const userInfo = new UserInfo(".profile__title", ".profile__description");

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardListEl = createCard(cardData);
      cardSection.addItem(cardListEl);
    },
  },
  ".cards__list"
);

const profileEditFormPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditFormSubmit
);

const popupWithImage = new PopupWithImage("#modal-preview");
popupWithImage.setEventListeners();

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);

//functions

function handleAddCardFormSubmit(formData) {
  const card = createCard({ name: formData.title, link: formData.url });
  cardSection.addItem(card);
  addCardPopup.close();
}

function createCard(cardData) {
  return new Card(cardData, "#card-template", () => {
    popupWithImage.open(cardData.link, cardData.name);
  }).getView();
}

function handleProfileEditFormSubmit(formData) {
  userInfo.setUserInfo(formData.title, formData.description);
  profileEditFormPopup.close();
}

cardSection.renderItems();

editFormValidator.enableValidation();

api.getUserInfo().then((UserInfo) => {
  userInfo.getUserInfo(UserInfo.name, UserInfo.about);
});

//Event Listeners

profileEditButton.addEventListener("click", () => {
  const profileUserInfo = userInfo.getUserInfo();
  profileTitleInput.value = profileUserInfo.title;
  profileDescriptionInput.value = profileUserInfo.description;
  profileEditFormPopup.open();
});

addCardPopup.setEventListeners();
profileEditFormPopup.setEventListeners();

document.querySelector(".profile__plus-button").addEventListener("click", () => {
  cardFormValidator.toggleButtonState();
  addCardPopup.open();
});