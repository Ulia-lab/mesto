const cardTemplate = document.querySelector(".card_template").content;
const popupCloseButton = document.querySelector('.popup__close-button-img');
const popupElement = document.querySelector('.popup-img');
const popupImage = document.querySelector('.popup__full-size');

export class Card {
    constructor(card) {
        this._link = card.link;
        this._name = card.name;
    }

    _getTemplate() {
        const newCard = cardTemplate.cloneNode(true);

        return newCard;
    }

    _closeByEscape(evt) {
        console.log('hi2');
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_active');
            openedPopup.classList.remove('popup_active');        
        }
      }

    _openPopup(evt) {
        const cardElement = evt.target.closest('.card');

        popupImage.src = cardElement.querySelector('.card__img').src;
        popupImage.alt = 'изображение';

        popupElement.querySelector('.popup__text').textContent = cardElement.querySelector('.card__name').textContent;

        popupElement.classList.add('popup_active');
        console.log(this._closeByEscape);
        document.addEventListener('keydown', this._closeByEscape);
    }
      
      // close popup
    _closePopup() {
        popupElement.classList.remove('popup_active');
        popupImage.src= '';
          
        document.removeEventListener('keydown', this._closeByEscape);
    }

    _handleLike(evt) {
        evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
    }

    _handleRemove(evt) {
        evt.target.closest('.card').remove();
      }

    _setEventListeners() {
        this._element.querySelector('.card__img').addEventListener('click', this._openPopup);
        
        popupCloseButton.addEventListener('click', () => {
            this._closePopup();
         });

        this._element.querySelector('.card__like-button').addEventListener('click', this._handleLike);

        this._element.querySelector('.card__remove-button').addEventListener('click', this._handleRemove);
      }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.card__img').src = this._link;
        this._element.querySelector('.card__img').alt = 'изображение';
        this._element.querySelector('.card__name').innerText = this._name;

        this._setEventListeners(this._element);

        return this._element;
    }

}


  