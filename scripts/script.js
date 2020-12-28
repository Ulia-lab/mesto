let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__button_type_edit');
let editPopup = page.querySelector('.edit');
let closeButton = page.querySelector('.edit__button_type_close');
let formElement = document.querySelector('.edit__form');
let nameProfile = page.querySelector('.profile__name');
let descriptionProfile = page.querySelector('.profile__description');
let inputName = page.querySelector('.edit__input_text_name');
let inputDescription = page.querySelector('.edit__input_text_description');

function openPopup() {
    inputName.value = nameProfile.textContent;
    inputDescription.value = descriptionProfile.textContent;
    editPopup.classList.add('edit_active');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    descriptionProfile.textContent = inputDescription.value;
    editPopup.classList.remove('edit_active'); 
}

function closePopup() {
    editPopup.classList.remove('edit_active');
}

editButton.addEventListener('click', openPopup);

formElement.addEventListener('submit', handleFormSubmit);  

closeButton.addEventListener('click', closePopup); 
