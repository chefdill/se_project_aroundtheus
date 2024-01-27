import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  initialCards, 
  validationSettings, 
  variables} from "../utils/constants.js";

//Variables

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f00dbe4d-3bcf-40e3-a46f-9e1ed8206bd5",
    "Content-Type": "application/json"
  }
}); 

const cardFormValidator = new FormValidator(variables.addNewModalCard, validationSettings);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(variables.avatarModal, validationSettings);
avatarFormValidator.enableValidation();

const profileEditForm = variables.profileEditModal.querySelector(".modal__form");
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
  variables.profileEditModal,
  handleProfileEditFormSubmit
);

const popupWithImage = new PopupWithImage("#modal-preview");
popupWithImage.setEventListeners();

const addCardPopup = new PopupWithForm(
  variables.addNewModalCard,
  handleAddCardFormSubmit
);

const avatarModal = new PopupWithForm(variables.avatarModal, handleAvatarFormSubmit);
avatarModal.setEventListeners();

//functions

// function createCard(cardData) {
//   const card = new Card(
//     cardData,
//     "#card-template",
//     handleImageClick,
//     handleDeleteClick,
//     handleLikeClick
//   );
//   section.addItem(card.generateCard());
// }
function openAvatarForm() {
  avatarModal.open();
}

function setButtonText(button, text) {
  button.textContent = text;
}

function handleAddCardFormSubmit(inputValues) {
  setButtonText(variables.addNewCardButton, "Saving...");
  api
    .addNewCard(inputValues)
    .then((res) => {
      console.log(res);
      // create a new card
      createCard(res);
      // render it
      variables.addNewModalCard.reset();
      // toggle button state
      cardFormValidator.toggleButtonState();
      // close modal
      addCardPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(variables.addNewCardButton, "Save");
    });

    const deleteModal = new PopupWithDelete(variables.deleteModal);
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
}

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
// function handleAddCardFormSubmit(formData) {
//   const card = createCard({ name: formData.title, link: formData.url });
//   cardSection.addItem(card);
//   addCardPopup.close();
// }

function createCard(cardData) {
  return new Card(cardData, "#card-template", () => {
    popupWithImage.open(cardData.link, cardData.name);
  }).getView();
}

function handleProfileEditFormSubmit(formData) {
  userInfo.setUserInfo(formData.title, formData.description);
  profileEditFormPopup.close();
}

variables.profileEditButton.addEventListener("click", () => {
  openAvatarForm();
})

cardSection.renderItems();

editFormValidator.enableValidation();

api.getUserInfo().then((UserInfo) => {
  userInfo.getUserInfo(UserInfo.name, UserInfo.about);
});

api.getInitialCards().then((cards) => {
  cards.forEach((card) => {
    const cardElemet = generateCard(card);
    cardSection.addItem(cardElemet);
  });
});

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
      "gallery__cards"
    );
    section.renderItems();
    console.log(res);
  })
  .catch(console.error);

api
  .getUserInfo()
  .then((res) => {
    console.log(res);
    userInfo.setUserInfo(res.name, res.about);
    userInfo.setAvatar(res.avatar);
  })
  .catch(console.error);

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