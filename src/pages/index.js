import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Api from "../components/Api.js";
import "./index.css";
import { validationSettings, variables } from "../utils/constants.js";

// API

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f00dbe4d-3bcf-40e3-a46f-9e1ed8206bd5",
    "Content-Type": "application/json",
  },
});

// SECTION

let section;

api
  .getInitialCards()
  .then((res) => {
    section = new Section(
      {
        items: res,
        renderer: (cardData) => {
          createCard(cardData);
        },
      },
      "cards__list"
    );
    section.renderItems();
    console.log(res);
  })
  .catch(console.error);

api
  .loadInfo()
  .then((res) => {
    console.log(res);
    userInfo.setUserInfo(res.name, res.about);
    userInfo.setAvatar(res.avatar);
  })
  .catch(console.error);

// POPUP WITH IMAGE

const popupWithImage = new PopupWithImage(
  "#modal-preview");
popupWithImage.setEventListeners();

// SAVE BUTTON TEXT CHANGE FUNCTION FOR FORMS

function setButtonText(button, text) {
  button.textContent = text;
}

// CARD

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  );
  section.addItem(card.generateCard());
}

function handleAddCardSubmit(inputValues) {
  setButtonText(variables.addModalButton, "Saving...");
  api
    .addNewCard(inputValues)
    .then((res) => {
      console.log(res);
      // create a new card
      createCard(res);
      // render it
      variables.addNewModalCard.reset();
      // toggle button state
      addFormValidator.toggleButtonState();
      // close modal
      addPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(variables.addModalButton, "Save");
    });
}

// HANDLE DELETE MODAL

const deleteModal = new PopupWithDelete(
  variables.deleteCard);
deleteModal.setEventListeners();

function handleDeleteClick(card) {
  // open the modal
  deleteModal.open();
  // set the submit action
  deleteModal.setSubmitAction(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        deleteModal.close();
        card.handleDelete();
      })
      .catch(console.error);
  });
}

// CARD LIKE

function handleLikeClick(card) {
  api
    .updateLike(card._id, card.isLiked())
    .then(() => {
      card.handleLike();
      console.log(card);
    })
    .catch(console.error);
}

// FORM VALIDATOR

const addFormValidator = new FormValidator(
  validationSettings,
  variables.addNewModalCard);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(
  validationSettings, 
  variables.profileEditModal);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(
  validationSettings, 
  variables.avatarModal);
avatarFormValidator.enableValidation();

// ADD FORM

const addPopup = new PopupWithForm(
  variables.addNewModalCard, 
  handleAddCardSubmit);

function openAddForm() {
  addPopup.open();
}

addPopup.setEventListeners();

variables.profileAddButton.addEventListener(
  "click", () => openAddForm());

// EDIT FORM

const editPopup = new PopupWithForm(
  variables.profileEditModal,
  handleEditFormSubmit
);

function openEditForm() {
  const user = userInfo.getUserInfo();
  variables.profileTitleInput.value = user.name;
  variables.profileDescriptionInput.value = user.description;
  editPopup.open();
}

editPopup.setEventListeners();

variables.profileEditButton.addEventListener("click", () => {
  openEditForm();
});

// AVATAR FORM

const avatarModal = new PopupWithForm(
  variables.avatarModal,
  handleAvatarFormSubmit
);
avatarModal.setEventListeners();

function openAvatarForm() {
  avatarModal.open();
}

variables.profileImage.addEventListener("click", () => {
  openAvatarForm();
});

function handleAvatarFormSubmit(inputValues) {
  setButtonText(variables.avatarModalButton, "Saving...");
  api
    .updateAvatar(inputValues.link)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
      console.log(res);
      avatarModal.close();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(variables.avatarModalButton, "Save");
    });
}

// USER INFO

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__avatar"
);

function handleEditFormSubmit(inputValues) {
  setButtonText(variables.editModalButton, "Saving...");
  api
    .editProfile(inputValues.title, inputValues.description)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about);
      console.log(res);
      editPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(variables.editModalButton, "Save");
    });
}

