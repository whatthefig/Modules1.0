import {formNew, formEdit, addFormButton, editFormButton} from './const.js';

function validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);
    if (!element.checkValidity()) {
      if (element.value.length == 0) {
        addFormButton.setAttribute('disabled',true);
        addFormButton.classList.remove('popup__button_active');
        editFormButton.setAttribute('disabled',true);
        editFormButton.classList.remove('popup__button_active');
        errorElement.textContent = 'Это обязательное поле';
      } else {
        addFormButton.setAttribute('disabled',true);
        addFormButton.classList.remove('popup__button_active');
        editFormButton.setAttribute('disabled',true);
        editFormButton.classList.remove('popup__button_active');
        errorElement.textContent = 'Должно быть от 2 до 30 символов';
      }
      return false;
    } else {
        errorElement.textContent = '';
        if (formEdit.username.value.length > 1 && formEdit.bio.value.length > 1) {
          editFormButton.removeAttribute('disabled');
          editFormButton.classList.add('popup__button_active');
        }
        if (formNew.name.value.length > 1 && formNew.link.value.length > 0) {
          addFormButton.removeAttribute('disabled');
          addFormButton.classList.add('popup__button_active');
        }
      }
    return true;
}
  
export function handleValidate (event) {
    validate(event.target);
}