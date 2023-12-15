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
  profileEditButton,
  addNewCardButton,
} from "../utils/constants.js";

const cardFormValidator = new FormValidator(addNewModalCard, validationSettings);
cardFormValidator.enableValidation();

const profileEditForm = profileEditModal.querySelector(".modal__form");
const editFormValidator = new FormValidator(
  profileEditForm,
  validationSettings
);

profileEditButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = job;
  profileEditFormPopup.open();
});


const userInfo = new UserInfo("#profile-title", "#profile-description");

const profileEditFormPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditFormSubmit
);
profileEditFormPopup.setEventListeners();

document.querySelector(".profile__plus-button").addEventListener("click", () => {
  cardFormValidator.toggleButtonState();
  addCardPopup.open();
});

function handleAddCardFormSubmit(formData) {
  const card = createCard({ name: formData.title, link: formData.url });
  cardSection.addItem(card);
  addCardPopup.close();
}

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);
addCardPopup.setEventListeners();

function createCard(cardData) {
  return new Card(cardData, "#card-template", () => {
    popupWithImage.open(cardData.name, cardData.link);
  }).getView();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardEl = createCard(cardData);
      cardSection.addItem(cardListEl);
    },
  },
  ".cards__list"
);

cardSection.renderItems();

editFormValidator.enableValidation();

const popupWithImage = new PopupWithImage("#preview-image-modal");
popupWithImage.setEventListeners();

function handleProfileEditFormSubmit(formData) {
  userInfo.setUserInfo(formData.title, formData.description);
  profileEditFormPopup.close();
}