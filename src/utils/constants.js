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

    const validationSettings = {
    // formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error"
  };

  const variables = {
      profileEditButton: document.querySelector("#profile-edit-button"),
      profileEditModal: document.querySelector("#profile-edit-modal"),
      profileTitleInput: document.querySelector("#profile-title-input"),
      profileDescriptionInput: document.querySelector("#profile-description-input"),
      profileImage: document.querySelector(".profile__image"),
      addNewModalCard: document.querySelector("#add-card-modal"),
      cardListEl: document.querySelector(".cards__list"),
      addNewCardButton: document.querySelector(".profile__plus-button"),
      deleteModal: document.querySelector("#delete-modal"),
      avatarInput: document.querySelector("#avatar-url-input"),
      avatarModal: document.querySelector("#avatar-modal"),
      avatarModalButton: document.querySelector("#avatar-modal-button"),
    
    }


export {initialCards, validationSettings, variables};

