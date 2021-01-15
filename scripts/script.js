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