const showInputError = (config, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.errorSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorActiveSelector);


  };
  
  const hideInputError = (config, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.errorSelector);
    errorElement.classList.remove(config.errorActiveSelector);
    errorElement.textContent = ''; 
  };
  
  const checkInputValidity = (config, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      errorMessage = inputElement.validationMessage;
      showInputError(config, formElement, inputElement, errorMessage);
    } else {
      hideInputError(config, formElement, inputElement);
    }
  };
  
  const hasInvalidInput = (config, inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (config, inputList, buttonElement) => {
    if (hasInvalidInput(config, inputList)) {
      buttonElement.classList.add(config.disableSelector);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(config.disableSelector);
      buttonElement.removeAttribute('disabled');
    }
  };

  const setEventListeners = (config, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(config, inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(config, formElement, inputElement);
        toggleButtonState(config, inputList, buttonElement);
      });
    });
  };

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector)); 
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      });
  
    });
      formList.forEach((formElement) => {
        setEventListeners(config, formElement);
      });
  };
  
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_type_error',
    disableSelector: 'popup__save-button_disabled',
    errorSelector: 'popup__input-error',
    errorActiveSelector: 'popup__input-error_active',
  });

