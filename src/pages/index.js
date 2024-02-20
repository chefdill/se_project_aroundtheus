// import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";
// import "./index.css";
// import Section from "../components/Section.js";
// import PopupWithImage from "../components/PopupWithImage.js";
// import PopupWithForm from "../components/PopupWithForm.js";
// import PopupWithDelete from "../components/PopupWithDelete.js";
// import UserInfo from "../components/UserInfo.js";
// import Api from "../components/Api.js";
// import {
//   initialCards, 
//   validationSettings, 
//   variables} from "../utils/constants.js";



// const api = new Api({
//   baseUrl: "https://around-api.en.tripleten-services.com/v1",
//   headers: {
//     authorization: "f00dbe4d-3bcf-40e3-a46f-9e1ed8206bd5",
//     "Content-Type": "application/json"
//   }
// }); 

// const userInfo = new UserInfo(
//   ".profile__title",
//   ".profile__description",
//   ".profile__image"
// );

// api
//   .getInitialCards()
//   .then((res) => {
//     section = new Section(
//       {
//         items: res,
//         renderer: (cardData) => {
//           createCard(cardData);
//         },
//       },
//       "cards__list"
//     );
//     section.renderItems();
//     console.log(res);
//   })
//   .catch(console.error);

// // api
// //   .getUserInfo()
// //   .then((res) => {
// //     console.log(res);
// //     userInfo.setUserInfo(res.name, res.about);
// //     userInfo.setAvatar(res.avatar);
// //   })
// //   .catch(console.error);

// const cardFormValidator = new FormValidator(variables.addNewModalCard, validationSettings);
// cardFormValidator.enableValidation();

// const profileEditForm = variables.profileEditModal.querySelector(".modal__form");
// const editFormValidator = new FormValidator(
//   profileEditForm,
//   validationSettings
// );

// let section = new Section(
//   {
//     items: initialCards,
//     renderer: (cardData) => {
//       const cardListEl = createCard(cardData);
//       section.addItem(cardListEl);
//     },
//   },
//   ".cards__list"
// );

// // const profileEditFormPopup = new PopupWithForm(
// //   "#profile-edit-modal",
// //   handleProfileEditFormSubmit
// // );

// const avatarModal = new PopupWithForm(
//   "#avatar-modal",
//   handleAvatarFormSubmit
// );
// avatarModal.setEventListeners();

// // function openAvatarForm() {
// //   avatarModal.open();
// // }

// // variables.profileImage.addEventListener("click", () => {
// //   openAvatarForm();
// // });

// // const popupWithImage = new PopupWithImage("#modal-preview");
// // popupWithImage.setEventListeners();

// // const addCardPopup = new PopupWithForm(
// //   "#add-card-modal",
// //   handleAddCardFormSubmit
// // );

// // const deleteModal = new PopupWithDelete("#delete-modal");
// // deleteModal.setEventListeners();

// // function setButtonText(button, text) {
// //   button.textContent = text;
// // }

// // function handleImageClick(cardData) {
// //   popupWithImage.open(cardData);
// // }

// // function handleDeleteClick(card) {
// //   // open the modal
// //   deleteModal.open();
// //   // set the submit action
// //   deleteModal.setSubmitAction(() => {
// //     api
// //       .deleteCard(card._id)
// //       .then(() => {
// //         deleteModal.close();
// //         card.handleDelete();
// //       })
// //       .catch(console.error);
// //   });
// // }

// // function handleLikeClick(card) {
// //   api
// //     .updateLike(card._id, card.isLiked())
// //     .then(() => {
// //       card.handleLike();
// //       console.log(card);
// //     })
// //     .catch(console.error);
// // }

// // function handleProfileEditFormSubmit(formData) {
// //   userInfo.setUserInfo(formData.title, formData.description);
// //   profileEditFormPopup.close();
// // }

// // editFormValidator.enableValidation();

// // variables.profileEditButton.addEventListener("click", () => {
// //   const profileUserInfo = userInfo.getUserInfo();
// //   profileTitleInput.value = profileUserInfo.title;
// //   profileDescriptionInput.value = profileUserInfo.description;
// //   profileEditFormPopup.open();
// // });

// // addCardPopup.setEventListeners();
// // profileEditFormPopup.setEventListeners();

// // variables.addNewCardButton.addEventListener("click", () => {
// //   cardFormValidator.toggleButtonState();
// //   addCardPopup.open();
// // });

// // Create a new card

// function createCard(cardData) {
//   const card = new Card(
//     cardData,
//     "#card-template",
//     handleImageClick,
//     handleDeleteClick,
//     handleLikeClick
//   );
//   section.addItem(card.getView());
// }

// section.renderItems();
// // let section = document.querySelector("cards__list");
// createCard(cardData);

// // Open the avatar form
// function openAvatarForm() {
//   avatarModal.open();
// }

// // Open the add card form
// function openAddCardForm() {
//   addCardPopup.open();
// }

// // Open the profile edit form
// function openProfileEditForm() {
//   const profileUserInfo = userInfo.getUserInfo();
//   profileTitleInput.value = profileUserInfo.title;
//   profileDescriptionInput.value = profileUserInfo.description;
//   profileEditFormPopup.open();
// }

// // Event listeners
// variables.profileImage.addEventListener("click", openAvatarForm);
// variables.addNewCardButton.addEventListener("click", openAddCardForm);
// variables.profileEditButton.addEventListener("click", openProfileEditForm);

// // Popup with image
// const popupWithImage = new PopupWithImage("#modal-preview");
// popupWithImage.setEventListeners();

// // Popup with delete
// const deleteModal = new PopupWithDelete("#delete-modal");
// deleteModal.setEventListeners();

// // Popup with form
// const addCardPopup = new PopupWithForm(
//   "#add-card-modal",
//   handleAddCardFormSubmit
// );
// addCardPopup.setEventListeners();

// const profileEditFormPopup = new PopupWithForm(
//   "#profile-edit-modal",
//   handleProfileEditFormSubmit
// );
// profileEditFormPopup.setEventListeners();

// // Functions

// function handleImageClick(cardData) {
//   popupWithImage.open(cardData);
// }

// function handleDeleteClick(card) {
//   // open the modal
//   deleteModal.open();
//   // set the submit action
//   deleteModal.setSubmitAction(() => {
//     api
//       .deleteCard(card._id)
//       .then(() => {
//         deleteModal.close();
//         card.handleDelete();
//       })
//       .catch(console.error);
//   });
// }

// function handleLikeClick(card) {
//   api
//     .updateLike(card._id, card.isLiked())
//     .then(() => {
//       card.handleLike();
//       console.log(card);
//     })
//     .catch(console.error);
// }

// function handleAvatarFormSubmit(inputValues) {
//   setButtonText(variables.avatarModalButton, "Saving...");
//   api
//     .updateAvatar(inputValues.link)
//     .then((res) => {
//       userInfo.setAvatar(res.avatar);
//       console.log(res);
//       avatarModal.close();
//     })
//     .catch(console.error)
//     .finally(() => {
//       setButtonText(variables.avatarModalButton, "Save");
//     });
// }

// function handleProfileEditFormSubmit(formData) {
//   userInfo.setUserInfo(formData.title, formData.description);
//   profileEditFormPopup.close();
// }

// function handleAddCardFormSubmit(inputValues) {
//   setButtonText(variables.addNewCardButton, "Saving...");
//   api
//     .addNewCard(inputValues)
//     .then((res) => {
//       createCard(res);
//       variables.addNewModalCard.reset();
//       cardFormValidator.toggleButtonState();
//       addCardPopup.close();
//     })
//     .catch(console.error)
//     .finally(() => {
//       setButtonText(variables.addNewCardButton, "Save");
//     });
// }

// // Render the card section
// cardSection.renderItems();

// // Enable validation for the edit form
// editFormValidator.enableValidation();

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWIthImage.js";

import PopupWithDelete from "../components/PopupWithDelete.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Section from "../components/Section.js";

import Card from "../components/Card.js";

import Api from "../components/Api.js";

import "./index.css";

import { config, variables } from "../utils/constants.js";

// API

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
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
      "gallery__cards"
    );
    section.renderItems();
    console.log(res);
  })
  .catch(console.error);

api
  .loadInfo()
  .then((res) => {
    console.log(res);
    userinfo.setUserInfo(res.name, res.about);
    userinfo.setAvatar(res.avatar);
  })
  .catch(console.error);

// POPUP WITH IMAGE

const popupWithImage = new PopupWithImage("#picture-modal");

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
      variables.profileAddForm.reset();
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

const deleteModal = new PopupWithDelete(variables.deleteCardClass);
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
  // handle changing the button's state in a .then after the successful response
}

// FORM VALIDATOR

const addFormValidator = new FormValidator(config, variables.profileAddModal);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, variables.profileEditModal);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(config, variables.avatarModal);
avatarFormValidator.enableValidation();

// POPUP WITH FORM - ADD FORM

const addPopup = new PopupWithForm(variables.addCardClass, handleAddCardSubmit);

function openAddForm() {
  addPopup.open();
}

addPopup.setEventListeners();

variables.profileAddButton.addEventListener("click", () => openAddForm());

// POPUP WITH FORM - EDIT FORM

const editPopup = new PopupWithForm(
  variables.editCardClass,
  handleEditFormSubmit
);

function openEditForm() {
  const user = userinfo.getUserInfo();
  variables.nameInput.value = user.name;
  variables.descriptionInput.value = user.description;
  editPopup.open();
}

editPopup.setEventListeners();

variables.profileEditButton.addEventListener("click", () => {
  openEditForm();
});

// POPUP WITH FORM - AVATAR FORM

const avatarModal = new PopupWithForm(
  variables.avatarModal,
  handleAvatarFormSubmit
);
avatarModal.setEventListeners();

function openAvatarForm() {
  avatarModal.open();
}

variables.avatarIcon.addEventListener("click", () => {
  openAvatarForm();
});

function handleAvatarFormSubmit(inputValues) {
  setButtonText(variables.avatarModalButton, "Saving...");
  api
    .updateAvatar(inputValues.link)
    .then((res) => {
      userinfo.setAvatar(res.avatar);
      console.log(res);
      avatarModal.close();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(variables.avatarModalButton, "Save");
    });
}

// USER INFO

const userinfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__avatar"
);

function handleEditFormSubmit(inputValues) {
  setButtonText(variables.editModalButton, "Saving...");
  api
    .editProfile(inputValues.name, inputValues.description)
    .then((res) => {
      userinfo.setUserInfo(res.name, res.about);
      console.log(res);
      editPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(variables.editModalButton, "Save");
    });
}