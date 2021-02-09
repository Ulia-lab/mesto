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

//adding card
const cardTemplate = document.querySelector(".card_template").content;
const cardPlace = document.querySelector('.places');
const inputCardName = page.querySelector('.popup__input_card_name');
const inputCardDescription = page.querySelector('.popup__input_card_description');
const cardRemove = document.querySelectorAll('.card__remove-button');

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

//create card from any object
function createCard (element) {
  const newCard = cardTemplate.cloneNode(true);
  const newCardImg = newCard.querySelector('.card__img');
  const newCardName = newCard.querySelector('.card__name');
  newCardImg.src = element.link;
  newCardImg.alt = 'изображение';
  newCardName.innerText = element.name;

  setListeners(newCard);
  return newCard;
}

// common function for add new card in card place
function addCard (container, newCard) {
  container.prepend(newCard);
}

// add new cards
function handleAddCards(element) {
  element.preventDefault();
  const newForm = {
    name: inputCardName.value,
    link: inputCardDescription.value
  }

  addCard(cardPlace, createCard(newForm));
  element.target.closest(".popup__form").reset();
}

// card listeners
function setListeners(element) {
  element.querySelector('.card__remove-button').addEventListener('click', handleRemove);

  element.querySelector('.img__open').addEventListener('click', function (element) {
    openImage(element); 
    openPopup(newImg)
  });

  element.querySelector('.card__like-button').addEventListener('click', handleLike);
}

// likes
function handleLike(element) {
  element.target.closest('.card__like-button').classList.toggle('card__like-button_active');
}

// remove card 
function handleRemove(element) {
  element.target.closest('.card').remove();
}

//open image
function openImage(element) {
  const closeCard = element.target.closest('.card');
  const popupFullSize = newImg.querySelector('.popup__full-size');
  const cardImg = closeCard.querySelector('.card__img');

  popupFullSize.src = cardImg.src;
  popupFullSize.alt = cardImg.alt;
  newImg.querySelector('.popup__text').textContent = closeCard.querySelector('.card__name').textContent;
}

// save popup-edit info
function handleFormSubmit (element) {
  element.preventDefault();
  nameProfile.textContent = inputName.value;
  descriptionProfile.textContent = inputDescription.value;
}

// open popup
function openPopup(element) {
  element.classList.add('popup_active');
}

// close popup
function closePopup(element) {
  element.classList.remove('popup_active');
}

// listeners open popup
editButton.addEventListener('click', function () { 
  inputName.value = nameProfile.textContent;
  inputDescription.value = descriptionProfile.textContent;
  openPopup(editPopup);
  setEventListeners(editPopup.querySelector('.popup__form'));
 });

addButton.addEventListener('click', function () { 
  openPopup(addPopup);
  setEventListeners(addPopup.querySelector('.popup__form'))
 });

// listeners save button
document.querySelector('.popup__form-edit').addEventListener('submit', function (element) { 
  handleFormSubmit(element);
  closePopup(editPopup);
}); 

document.querySelector('.popup__form-add').addEventListener('submit', function (element) { 
  handleAddCards(element);
  closePopup(addPopup);
});  

// listeners close popup
document.querySelector('.popup__close-button-edit').addEventListener('click', () => {
   closePopup(editPopup);
   editPopup.querySelector(".popup__form").reset();
   hideInputError(editPopup.querySelector(".popup__form"), editPopup.querySelector(".popup__input_text_name"));
   hideInputError(editPopup.querySelector(".popup__form"), editPopup.querySelector(".popup__input_text_description"));
}); 

document.querySelector('.popup__close-button-add').addEventListener('click', () => {
  closePopup(addPopup);
  addPopup.querySelector(".popup__form").reset();
  hideInputError(addPopup.querySelector(".popup__form"), addPopup.querySelector(".popup__input_card_name"));
  hideInputError(addPopup.querySelector(".popup__form"), addPopup.querySelector(".popup__input_card_description"));
});

document.querySelector('.popup__close-button-img').addEventListener('click', () => closePopup(newImg));


//close overlay 
editOverlay.addEventListener('click', () => {
  closePopup(editPopup);
  editPopup.querySelector(".popup__form").reset();
  hideInputError(editPopup.querySelector(".popup__form"), editPopup.querySelector(".popup__input_text_name"));
  hideInputError(editPopup.querySelector(".popup__form"), editPopup.querySelector(".popup__input_text_description"));
}); 

addOverlay.addEventListener('click', () => {
  closePopup(addPopup);
  addPopup.querySelector(".popup__form").reset();
  hideInputError(addPopup.querySelector(".popup__form"), addPopup.querySelector(".popup__input_card_name"));
  hideInputError(addPopup.querySelector(".popup__form"), addPopup.querySelector(".popup__input_card_description"));
});

imgOverlay.addEventListener('click', () => closePopup(newImg));

//close with enter
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup(editPopup);
    editPopup.querySelector(".popup__form").reset();
    hideInputError(editPopup.querySelector(".popup__form"), editPopup.querySelector(".popup__input_text_name"));
    hideInputError(editPopup.querySelector(".popup__form"), editPopup.querySelector(".popup__input_text_description"));

    closePopup(addPopup);
    addPopup.querySelector(".popup__form").reset();
    hideInputError(addPopup.querySelector(".popup__form"), addPopup.querySelector(".popup__input_card_name"));
    hideInputError(addPopup.querySelector(".popup__form"), addPopup.querySelector(".popup__input_card_description"));

    closePopup(newImg)
  }
});

// rendering default cards from massive
initialCards.forEach(function (element) {
  addCard(cardPlace, createCard(element));
 });

