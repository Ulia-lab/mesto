const page = document.querySelector('.page');
const popup = page.querySelector('.popup');

//edit button
const editButton = page.querySelector('.profile__button_type_edit');
const editPopup = page.querySelector('.popup__edit');

//add button
const addButton = page.querySelector('.profile__button_type_add');
const addPopup = page.querySelector('.popup__add');

//close button
const closeButton = page.querySelectorAll('.popup__close-button');

//form elements
const formElement = document.querySelectorAll('.popup__form');
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
const newImg = document.querySelector('.img');

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

//cards
function renderCard (element) {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.card__img').src = element.link;
  newCard.querySelector('.card__name').innerText = element.name;

  setListeners(newCard);
  cardPlace.prepend(newCard);
}

function handleAddCards(evt) {
  evt.preventDefault();
  const newForm = new Object();

  newForm.name = inputCardName.value;
  newForm.link= inputCardDescription.value;
  
  renderCard (newForm);
  resetInputValue();
  closePopup();
}

function setListeners(element) {
  element.querySelector('.card__remove-button').addEventListener('click', handleRemove);
  element.querySelector('.img__open').addEventListener('click', openImage);
}
  
function resetInputValue () {
  inputCardName.value = "";
  inputCardDescription.value = "";
}

//open image
function openImage(element) {
  const closeCard = element.target.closest('.card');

  newImg.querySelector('.img__full-size').src = closeCard.querySelector('.card__img').src;
  newImg.querySelector('.img__text').textContent = closeCard.querySelector('.card__name').textContent;

  newImg.classList.add('img_active');
}

// card delete
function handleRemove(evt) {
  evt.target.closest('.card').remove();
}

// popup  
function openPopup(popupType) {
  switch (popupType.target.className) {
    case 'profile__edit-button':
      inputName.value = nameProfile.textContent;
      inputDescription.value = descriptionProfile.textContent;
      editPopup.classList.add('popup_active');
      break;
    case 'profile__add-button':
      addPopup.classList.add('popup_active');
      break;
  }
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    descriptionProfile.textContent = inputDescription.value;
    popup.classList.remove('popup_active'); 
}

// close
function closePopup() {
    editPopup.classList.remove('popup_active');
    addPopup.classList.remove('popup_active');
}

//listeners
editButton.addEventListener('click', openPopup);
addButton.addEventListener('click', openPopup);

formElement[0].addEventListener('submit', handleFormSubmit); 
formElement[1].addEventListener('submit', handleAddCards);  

closeButton[0].addEventListener('click', closePopup); 
closeButton[1].addEventListener('click', closePopup);

document.querySelector('.img__close-button').addEventListener('click', function () {newImg.classList.remove('img_active')
});

initialCards.forEach(renderCard);

