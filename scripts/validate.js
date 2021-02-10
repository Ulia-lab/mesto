const showInputError = (config) => {
    const errorElement = config.formElement.querySelector(`.${config.inputElement.id}-error`);
    config.inputElement.classList.add(config.errorSelector);
    errorElement.textContent = config.errorMessage;
    errorElement.classList.add(config.errorActiveSelector);


  };
  
  const hideInputError = (config) => {
    const errorElement = config.formElement.querySelector(`.${config.inputElement.id}-error`);
    config.inputElement.classList.remove(config.errorSelector);
    errorElement.classList.remove(config.errorActiveSelector);
    errorElement.textContent = ''; 
  };
  
  const checkInputValidity = (config) => {
    if (!config.inputElement.validity.valid) {
      config.errorMessage = config.inputElement.validationMessage;
      showInputError(config);
    } else {
      hideInputError(config);
    }
  };
  
  const hasInvalidInput = (config) => {
    return config.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (config) => {
    if (hasInvalidInput(config)) {
      config.buttonElement.classList.add(config.disableSelector);
      config.buttonElement.setAttribute('disabled', true);
    } else {
      config.buttonElement.classList.remove(config.disableSelector);
      config.buttonElement.removeAttribute('disabled');
    }
  };

  const setEventListeners = (config) => {
    const inputList = Array.from(config.formElement.querySelectorAll(config.inputSelector));
    const buttonElement = config.formElement.querySelector(config.submitButtonSelector);
    config.inputList = inputList;
    config.buttonElement = buttonElement;

    toggleButtonState(config);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function (evt) {
        config.inputElement = inputElement;
        config.formElement = evt.target.closest(config.formSelector);
        config.buttonElement = buttonElement;
        config.inputList = inputList;
        checkInputValidity(config);
        toggleButtonState(config);
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
      config.formElement = formElement;
      setEventListeners(config);
      });
  };
  
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_type_error',
    disableSelector: 'popup__save-button_disabled',
    disableAttribute: 'disabled',
    errorSelector: 'popup__input-error',
    errorActiveSelector: 'popup__input-error_active',
  });

