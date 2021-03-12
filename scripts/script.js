import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const page = document.querySelector('.page');

//edit button
const editButton = page.querySelector('.profile__button_type_edit');
const editPopup = page.querySelector('.popup_type_edit');

//add button
const addButton = page.querySelector('.profile__button_type_add');
const addPopup = page.querySelector('.popup_type_add');

//form elements
const nameProfile = page.querySelector('.profile__name');
const descriptionProfile = page.querySelector('.profile__description');
const inputName = page.querySelector('.popup__input_text_name');
const inputDescription = page.querySelector('.popup__input_text_description');
const editForm = document.querySelector('.popup__form-edit');
const addForm = document.querySelector('.popup__form-add');

//adding card
const cardPlace = document.querySelector('.places');
const inputCardName = page.querySelector('.popup__input_card_name');
const inputCardDescription = page.querySelector('.popup__input_card_description');

const initialCards = [
    {
      name: 'Архыз',
      link: './images/photo/fachry-zella-devandra-YdzcMoLuwZY-unsplash-min.jpg'
    },
    {
      name: 'Челябинская область',
      link: './images/photo/harsh-gupta-1LHDZjtDhCY-unsplash-min.jpg'
    },
    {
      name: 'Иваново',
      link: './images/photo/puria-berenji-fcrVRva60Ko-unsplash-min.jpg'
    },
    {
      name: 'Камчатка',
      link: './images/photo/mehmet-turgut-kirkgoz-Sv2JiMC85Gk-unsplash-min.jpg'
    },
    {
      name: 'Холмогорский район',
      link: './images/photo/francesco-ungaro-3_bh5eRJchk-unsplash-min.jpg'
    },
    {
      name: 'Байкал',
      link: './images/photo/brandon-usmany-olvimDObfGY-unsplash-min.jpg'
    }
  ];

// rendering default cards from massive
initialCards.forEach(function (item) {
  const card = new Card(item);
  const cardElement = card.generateCard();
  // add in DOM
  cardPlace.prepend(cardElement);
});

// add new cards
function handleAddCards(evt) {
  evt.preventDefault();
  const cardInfo = {
      name: inputCardName.value,
      link: inputCardDescription.value
    }
  const newСard = new Card(cardInfo);
  const cardElement = newСard.generateCard();
  // add in DOM
  cardPlace.prepend(cardElement);
  evt.target.closest(".popup__form").reset();
}

// save popup-edit info
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  descriptionProfile.textContent = inputDescription.value;
}

// escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  }
}

// open popup
function openPopup(element) {
  element.classList.add('popup_active');
  document.addEventListener('keydown', closeByEscape);
}

//  close popup
function closePopup(element) {
  element.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEscape);
}

// listeners open popup
editButton.addEventListener('click', function () { 
  editPopup.querySelector(".popup__form").reset();

  inputName.value = nameProfile.textContent;
  inputDescription.value = descriptionProfile.textContent;

  openPopup(editPopup);
 });

addButton.addEventListener('click', function () { 
  addPopup.querySelector(".popup__form").reset();
  openPopup(addPopup);
 });

// listeners save button
editForm.addEventListener('submit', function (element) { 
  handleFormSubmit(element);
  closePopup(editPopup);
}); 

addForm.addEventListener('submit', function (element) { 
  handleAddCards(element);
  closePopup(addPopup);
});  

//common popup close
const popups = document.querySelectorAll('.popup')
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_active')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }

      if (evt.target.classList.contains('popup__overlay')) {
        closePopup(popup)
      }
    })
  })

  //validation
  const formList = Array.from(document.querySelectorAll('.popup__form')); 

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    });
    
    const Validator = new FormValidator({
      formSelector: '.popup__form',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__save-button',
      inputErrorClass: 'popup__input_type_error',
      disableSelector: 'popup__save-button_disabled',
      errorSelector: 'popup__input-error',
      errorActiveSelector: 'popup__input-error_active',
    }, formElement);

    Validator.enableValidation();
  });
