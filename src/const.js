import {Api} from './api.js'
import {Popup} from './popup.js'

const api = new Api ();
const cardList = document.querySelector('.places-list');
const addButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__button_edit');
const addFormContainer = document.querySelector('.popup');
const editFormContainer = document.querySelector('.popup-edit');
const formNew = document.forms.new;
const formEdit = document.forms.edit;
const addFormButton = document.querySelector('.popup__button_new');
const editFormButton = document.querySelector('.popup__button_edit');
const closeAddForm = document.querySelector('.popup__close');
const closeEditForm = editFormContainer.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupPicture = document.querySelector('.popup__picture');
const closeImageForm = popupImage.querySelector('.popup__close');
const popupAddForm = new Popup(addFormContainer, addButton, closeAddForm);
const popupEditForm = new Popup(editFormContainer, editButton, closeEditForm);
const inputName = document.querySelector('#username');
const inputBio = document.querySelector('#bio');
const name = document.querySelector('#name');
const link = document.querySelector('#link');
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort4' : 'https://praktikum.tk/cohort4';
const auth = '369d404c-a749-4f02-b687-51fa39461b61';

export {api, inputName, inputBio, name, link, popupEditForm, popupAddForm, auth, cardList, addButton, editButton, addFormContainer, editFormContainer, formNew, formEdit, addFormButton, editFormButton, closeAddForm, closeEditForm, popupImage, popupPicture, closeImageForm, serverUrl};