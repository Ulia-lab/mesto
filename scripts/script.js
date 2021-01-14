let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__button_type_edit');
let editPopup = page.querySelector('.popup');
let closeButton = page.querySelector('.popup__button_type_close');
let formElement = document.querySelector('.popup__form');
let nameProfile = page.querySelector('.profile__name');
let descriptionProfile = page.querySelector('.profile__description');
let inputName = page.querySelector('.popup__input_text_name');
let inputDescription = page.querySelector('.popup__input_text_description');
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

function openPopup() {
    inputName.value = nameProfile.textContent;
    inputDescription.value = descriptionProfile.textContent;
    editPopup.classList.add('popup_active');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    descriptionProfile.textContent = inputDescription.value;
    editPopup.classList.remove('popup_active'); 
}

function closePopup() {
    editPopup.classList.remove('popup_active');
}

editButton.addEventListener('click', openPopup);

formElement.addEventListener('submit', handleFormSubmit);  

closeButton.addEventListener('click', closePopup); 
