import "./pages/index.css";
import {api, inputName, inputBio, name, link, popupEditForm, popupAddForm, cardList, editButton, addFormContainer, editFormContainer, formNew, formEdit, popupImage, popupPicture, closeImageForm} from './const.js';
import {Popup} from './popup.js';
import {CardList} from './cardList.js';
import {handleValidate} from './validation.js';

new Popup(popupImage, popupPicture, closeImageForm);
api.getUser();
api.getCardArr();

//Слушатели:
editButton.addEventListener('click', function () {
  let userName = formEdit.elements.username;
  let bio = formEdit.elements.bio;
  userName.value = document.querySelector('.user-info__name').textContent;
  bio.value = document.querySelector('.user-info__job').textContent;
});

editFormContainer.addEventListener('submit', function() {
  event.preventDefault();
  const userName = formEdit.elements.username;
  const bio = formEdit.elements.bio;
  document.querySelector('.user-info__name').textContent = userName.value;
  document.querySelector('.user-info__job').textContent = bio.value;
  api.edit(userName.value, bio.value);
  formEdit.reset();
  popupEditForm.close();
});

addFormContainer.addEventListener('submit', function(){
  const arr=[];
  const newCardList = new CardList(cardList, arr);
  event.preventDefault();
  newCardList.addCard(formNew.elements.name.value, formNew.elements.link.value, "0");
  api.post(formNew.elements.name.value, formNew.elements.link.value);
  formNew.reset();
  popupAddForm.close();
});

inputName.addEventListener('input', handleValidate);
inputBio.addEventListener('input', handleValidate);
name.addEventListener('input', handleValidate);
link.addEventListener('input', handleValidate);