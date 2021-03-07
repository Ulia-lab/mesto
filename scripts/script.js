import { Card } from './Card.js';

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
const cardTemplate = document.querySelector(".card_template").content;
const cardPlace = document.querySelector('.places');
const inputCardName = page.querySelector('.popup__input_card_name');
const inputCardDescription = page.querySelector('.popup__input_card_description');

//open img
const newImg = document.querySelector('.popup-img');

//overlay
const editOverlay = page.querySelector('.overlay-edit');
const addOverlay = page.querySelector('.overlay-add');
const imgOverlay = document.querySelector('.overlay-img');

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

// //create card from any object
// function createCard (element) {
//   const newCard = cardTemplate.cloneNode(true);
//   const newCardImg = newCard.querySelector('.card__img');
//   const newCardName = newCard.querySelector('.card__name');
//   newCardImg.src = element.link;
//   newCardImg.alt = 'изображение';
//   newCardName.innerText = element.name;

//   setListeners(newCard);
//   return newCard;
// }

// // common function for add new card in card place
// function addCard (container, newCard) {
//   container.prepend(newCard);
// }

// add new cards
function handleAddCards(evt) {
  evt.preventDefault();
  const newForm = {
    name: inputCardName.value,
    link: inputCardDescription.value
  }

  addCard(cardPlace, createCard(newForm));
  evt.target.closest(".popup__form").reset();
}

// // card listeners
// function setListeners(element) {
//   element.querySelector('.card__remove-button').addEventListener('click', handleRemove);

//   element.querySelector('.img__open').addEventListener('click', function (element) {
//     openImage(element); 
//     openPopup(newImg)
//   });

//   element.querySelector('.card__like-button').addEventListener('click', handleLike);
// }

// // likes
// function handleLike(evt) {
//   evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
// }

// // remove card 
// function handleRemove(evt) {
//   evt.target.closest('.card').remove();
// }

// //open image
// function openImage(evt) {
//   const closeCard = evt.target.closest('.card');
//   const popupFullSize = newImg.querySelector('.popup__full-size');
//   const cardImg = closeCard.querySelector('.card__img');

//   popupFullSize.src = cardImg.src;
//   popupFullSize.alt = cardImg.alt;
//   newImg.querySelector('.popup__text').textContent = closeCard.querySelector('.card__name').textContent;
// }

// save popup-edit info
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  descriptionProfile.textContent = inputDescription.value;
}

// // escape
// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_active');
//     closePopup(openedPopup);
//   }
// }

// // open popup
// function openPopup(element) {
//   element.classList.add('popup_active');

//   document.addEventListener('keydown', closeByEscape);
// }

//  close popup
function closePopup(element) {
  element.classList.remove('popup_active');
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


// rendering default cards from massive
// initialCards.forEach(function (element) {
//   addCard(cardPlace, createCard(element));
//  });

// rendering default cards from massive
initialCards.forEach(function (item) {
  const card = new Card(item);
  const cardElement = card.generateCard();

  // add in DOM
  cardPlace.prepend(cardElement);

});
