let page = document.querySelector('.page');
let editButton = page.querySelector('.button__edit-button');
let editPopup = page.querySelector('.edit');
let closeButton = page.querySelector('.button__close-button');
let input = page.querySelector('.edit__input');
let saveButton = page.querySelector('.edit__save-button');
let likeButton = page.querySelector('.card__like-button');

function addPlaceholder() {
    let name = page.querySelector('.profile__name');
    let description = page.querySelector('.profile__description');

    input.innerHTML = `
    <input class='edit__input-text' type="text" name="profileName" placeholder='Имя' required value="${name.textContent}">
    <input class='edit__input-text' type="text" name='profileDescription' placeholder="О себе" required value="${description.textContent}">
    `
}

function saveButtons () {

    let name = page.querySelector('.profile__name');
    let description = page.querySelector('.profile__description');

    let inputName = page.querySelectorAll('.edit__input-text');

    name.textContent = inputName[0].value;
    description.textContent = inputName[1].value;
}

function likeActive () {

    likeButton.innerHTML = `<img src="./images/like-active.svg" alt="изображение">`;
}

likeButton.addEventListener('click', ()=> {
    likeActive();
});

editButton.addEventListener('click', ()=> {
    addPlaceholder();
    editPopup.classList.add('edit_active');
});

saveButton.addEventListener('click', ()=> {
    saveButtons();
    editPopup.classList.remove('edit_active'); 
});

closeButton.addEventListener('click', ()=> {
    editPopup.classList.remove('edit_active'); 
});
