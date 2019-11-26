import {cardList, auth, serverUrl} from './const.js';
import {CardList} from './cardList.js';

export class Api {
    getUser() {
      fetch(`${serverUrl}/users/me`, {
        headers: {
          authorization: auth
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .then((data) => {
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${data.avatar})`;
        document.querySelector('.user-info__name').textContent = data.name
        document.querySelector('.user-info__job').textContent = data.about;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
    getCardArr() {
      fetch(`${serverUrl}/cards`, {
        headers: {
            authorization: auth
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .then((arr) => {
        new CardList(cardList, arr);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
    edit (name, about) {
      fetch(`${serverUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: auth,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    post (name, link) {
      fetch(`${serverUrl}/cards`, {
        method: 'POST',
        headers: {
          authorization: auth,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    remove(cardId) {
      fetch(`${serverUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: auth,
          'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
}