let page = document.querySelector('.page');
let popup = page.querySelector('.popup');

//edit button
let editButton = page.querySelector('.profile__button_type_edit');
let editPopup = page.querySelector('.popup__edit');

//add button
let addButton = page.querySelector('.profile__button_type_add');
let addPopup = page.querySelector('.popup__add');

//close button
let closeButton = page.querySelectorAll('.popup__close-button');

//form elements
let formElement = document.querySelector('.popup__form');
let nameProfile = page.querySelector('.profile__name');
let descriptionProfile = page.querySelector('.profile__description');
let inputName = page.querySelector('.popup__input_text_name');
let inputDescription = page.querySelector('.popup__input_text_description');

//adding card
const cardTemplate = document.querySelector(".card_template").content;
const cardPlace = document.querySelector('.places');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
//cards
function render() {
  initialCards.forEach(function (element) {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.card__img').src = element.link;
  newCard.querySelector('.card__name').innerText = element.name;

  cardPlace.append(newCard);
  });
}

render();


// buttons  
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

function closePopup() {
    editPopup.classList.remove('popup_active');
    addPopup.classList.remove('popup_active');
}

editButton.addEventListener('click', openPopup);
addButton.addEventListener('click', openPopup);

formElement.addEventListener('submit', handleFormSubmit);  

closeButton[0].addEventListener('click', closePopup); 
closeButton[1].addEventListener('click', closePopup);