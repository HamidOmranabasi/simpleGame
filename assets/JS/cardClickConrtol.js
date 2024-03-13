import ShowFrontside from './showFrontside.js';
import ShowBackside  from './showBackSide.js';
import { youWinBox, paredSound, wrongSound, winAllGame } from './variables.js';
    
let remainingCards   = 16;
let turnedCardsNumbr = 0;
let firstCard  = "";
let secondCard = "";

const CardClick = {
    setup: function() {

        const AllCards = document.querySelectorAll('.card');

        AllCards.forEach( (card) => {

            card.addEventListener('click' , () => {
                const data = card.querySelector('img.frontSide').getAttribute('dataSet');
                if (data == 0) return false;
                switch (turnedCardsNumbr) {
                    case 0:
                        turnedCardsNumbr++;
                        firstCard = card;
                        firstCard.style.pointerEvents = 'none';
                        ShowFrontside.setup(card);
                        break;
                    case 1:
                        turnedCardsNumbr++;
                        secondCard = card;
                        ShowFrontside.setup(card);
                        this.compaireCards(firstCard, secondCard) ? this.turnWrongCards(firstCard, secondCard) : this.disablePairCards(firstCard, secondCard) ;
                        break;
                    case 2:
                        ShowBackside.setup(firstCard);
                        ShowBackside.setup(secondCard);
                        break;   
                }
            })
        })
    },

    compaireCards: function(cardA, cardB) {
        const frontSideA = cardA.querySelector('img.frontSide');
        const frontSideB = cardB.querySelector('img.frontSide');
        turnedCardsNumbr = 0;
        return Math.abs(frontSideA.getAttribute('dataset') - frontSideB.getAttribute('dataset') ) - 8;
     },

     turnWrongCards: function(cardA, cardB) {
         this.playSound(wrongSound);
         setTimeout(() => {
             ShowBackside.setup(cardA);
             ShowBackside.setup(cardB);
            }, 700);
        firstCard  = "";
        secondCard = "";
     },

     disablePairCards: function(cardA, cardB) {
        const frontSideA = cardA.querySelector('img.frontSide');
        const frontSideB = cardB.querySelector('img.frontSide');
        cardA.style.opacity = .3; 
        cardB.style.opacity = .3;
        frontSideA.setAttribute('dataSet', "0");
        frontSideB.setAttribute('dataSet', "0");
        frontSideA.style.pointerEvents = 'none';
        frontSideB.style.pointerEvents = 'none';
        this.playSound(paredSound);
        remainingCards -= 2;

        if (remainingCards == 2) {
            const nonZeroDatasetElements = document.querySelectorAll('img[dataset]:not([dataSet="0"])');
            ShowFrontside.setup(nonZeroDatasetElements[0].parentNode);
            ShowFrontside.setup(nonZeroDatasetElements[1].parentNode);
            this.disablePairCards(nonZeroDatasetElements[0].parentNode, nonZeroDatasetElements[1].parentNode);
        }
        
        if (remainingCards == 0) {
            youWinBox.style.opacity = 1;
            youWinBox.style.zIndex  = 2;
            this.playSound(winAllGame);
            remainingCards = 16;
        }
    },

    playSound: function (audioFile) {
        audioFile.play();
    }



}

export default CardClick;