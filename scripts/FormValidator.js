export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorSelector = config.errorSelector;
    this._errorActiveSelector = config.errorActiveSelector;
    this._disableSelector = config.disableSelector;

    this._formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._errorSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorActiveSelector);


  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._errorSelector);
    errorElement.classList.remove(this._errorActiveSelector);
    errorElement.textContent = ''; 
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      let errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._disableSelector);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._disableSelector);
      buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners () {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}


