import {Card} from "./card.js";

export class CardList {
    constructor(container, array) { 
      this.container = container;
      this.array = array;
      this.render();
    }
  
    addCard(name, link, likes, owner, cardId) {
      const { card } = new Card(name, link, likes, owner, cardId);
      this.container.appendChild(card);
    }
  
    render() {
      this.array.forEach((item) => {
        const name = item.name;
        const link = item.link; 
        const likes = item.likes.length;
        const owner = item.owner._id;
        const cardId = item._id;
        this.addCard(name, link, likes, owner, cardId);
      });
    }
}