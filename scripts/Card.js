const cardTemplate = document.querySelector(".card_template").content;

export class Card {
  constructor(card, openImg) {
    this._link = card.link;
    this._name = card.name;
    this._openImg = openImg;
  }

  _getTemplate() {
    const newCard = cardTemplate.cloneNode(true);

    return newCard;
  }

  _handleLike(evt) {
    evt.target
      .closest(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleRemove(evt) {
    evt.target.closest(".card").remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__img")
      .addEventListener("click", (evt) => {
        this._openImg(evt);
      });

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._handleLike);

    this._element
      .querySelector(".card__remove-button")
      .addEventListener("click", this._handleRemove);
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__img").src = this._link;
    this._element.querySelector(".card__img").alt = "изображение";
    this._element.querySelector(".card__name").innerText = this._name;

    this._setEventListeners(this._element);

    return this._element;
  }
}
