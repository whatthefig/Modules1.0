import {cardList, popupImage, popupPicture} from './const.js';

export class Card {
  constructor(name, link, likes, owner, cardId) {
   this.card = this.create(name, link, likes, owner, cardId);
   this.card.addEventListener('click', this.like)
   this.card.addEventListener('click', this.remove);
    
  }
  like(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked')
    }
  }
  remove() {
    if (event.target.classList.contains('place-card__delete-icon')) {
      cardList.removeChild(event.target.parentElement.parentElement)
    }
  }
  create(name, link, likes, owner) {
      const card = document.createElement('div');
      const cardImage = document.createElement('div');
      const deleteIcon = document.createElement('button');
      const cardDescription = document.createElement('div');
      const cardName = document.createElement('h3');
      const likeBlock = document.createElement('div');
      const likeCount = document.createElement('h4');
      const likeIcon = document.createElement('button');
    
      card.classList.add('place-card');
      cardImage.classList.add('place-card__image');
      cardImage.style.backgroundImage = `url(${link})`;
      deleteIcon.classList.add('place-card__delete-icon');
      cardDescription.classList.add('place-card__description');
      cardName.classList.add('place-card__name');
      cardName.textContent = name;
      likeBlock.classList.add('place-card__like-block');
      likeCount.classList.add('place-card__like-count');
      likeCount.textContent = likes;
      likeIcon.classList.add('place-card__like-icon');
    
      card.appendChild(cardImage);
      card.appendChild(cardDescription);
      cardImage.appendChild(deleteIcon);
      cardDescription.appendChild(cardName);
      cardDescription.appendChild(likeBlock);
      likeBlock.appendChild(likeIcon);
      likeBlock.appendChild(likeCount);
  
      if (owner !== 'cf687c2a74bfa663cda08b81') {
        deleteIcon.classList.add('place-card__delete-icon_hide');
      }
  
      cardImage.addEventListener('click', function(event){
        if (event.target.classList.contains('place-card__image')) {
          popupImage.classList.add('popup_is-opened');
          popupPicture.src = link;
        }
      });
      return card;
  }
}