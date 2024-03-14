// Import modules for showing front and back sides of cards, as well as necessary variables
import ShowFrontside from './6showFrontside.js'; // Import module for showing the front side of cards
import ShowBackside from './7showBackSide.js'; // Import module for showing the back side of cards
import { youWinBox, paredSound, wrongSound, winAllGame } from './1variables.js'; // Import necessary variables for game logic

// Initialize variables for game logic
let remainingCards = 16; // Total number of cards in the game
let turnedCardsNumbr = 0; // Number of currently turned cards
let firstCard = ""; // Reference to the first turned card
let secondCard = ""; // Reference to the second turned card

// Object to handle card click events and game logic
const CardClick = {
    setup: function() {
        try {
            // Get all cards in the game
            const AllCards = document.querySelectorAll('.card');

            // Add click event listener to each card
            AllCards.forEach((card) => {
                card.addEventListener('click', () => {
                    try {
                        const data = card.querySelector('img.frontSide').getAttribute('dataSet');
                        if (data == 0) return false; // Ignore clicks on already paired cards

                        // Switch case based on the number of turned cards
                        switch (turnedCardsNumbr) {
                            case 0:
                                turnedCardsNumbr++;
                                firstCard = card;
                                firstCard.style.pointerEvents = 'none'; // Disable click events on the first turned card
                                ShowFrontside.setup(card); // Show the front side of the card
                                break;
                            case 1:
                                turnedCardsNumbr++;
                                secondCard = card;
                                ShowFrontside.setup(card); // Show the front side of the card
                                // Compare the two turned cards to check if they form a pair
                                this.compaireCards(firstCard, secondCard) ? this.turnWrongCards(firstCard, secondCard) : this.disablePairCards(firstCard, secondCard);
                                break;
                            case 2:
                                // If two cards are turned and no match, turn back their front sides
                                ShowBackside.setup(firstCard);
                                ShowBackside.setup(secondCard);
                                break;
                        }
                    } catch (error) {
                        console.error('Error processing card click event:', error);
                    }
                });
            });
        } catch (error) {
            console.error('Error setting up card click event:', error);
        }
    },

    // Compare two cards to check if they form a pair
    compaireCards: function(cardA, cardB) {
        try {
            const frontSideA = cardA.querySelector('img.frontSide');
            const frontSideB = cardB.querySelector('img.frontSide');
            turnedCardsNumbr = 0; // Reset the number of turned cards
            return Math.abs(frontSideA.getAttribute('dataset') - frontSideB.getAttribute('dataset')) - 8;
        } catch (error) {
            console.error('Error comparing cards:', error);
            return 0; // Return 0 as a default value
        }
    },

    // Turn back wrong pairs after a delay and play a sound effect
    turnWrongCards: function(cardA, cardB) {
        try {
            this.playSound(wrongSound); // Play the wrong pair sound effect
            setTimeout(() => {
                ShowBackside.setup(cardA); // Turn back the first card's front side
                ShowBackside.setup(cardB); // Turn back the second card's front side
            }, 700); // Delay before turning back the cards
            firstCard = ""; // Reset the first turned card reference
            secondCard = ""; // Reset the second turned card reference
        } catch (error) {
            console.error('Error turning wrong cards:', error);
        }
    },

    // Disable correctly paired cards and update game status
    disablePairCards: function(cardA, cardB) {
        try {
            const frontSideA = cardA.querySelector('img.frontSide');
            const frontSideB = cardB.querySelector('img.frontSide');
            cardA.style.opacity = .3; // Reduce opacity of the first card
            cardB.style.opacity = .3; // Reduce opacity of the second card
            frontSideA.setAttribute('dataSet', "0"); // Set data attribute to indicate the card is paired
            frontSideB.setAttribute('dataSet', "0"); // Set data attribute to indicate the card is paired
            frontSideA.style.pointerEvents = 'none'; // Disable click events on the first card
            frontSideB.style.pointerEvents = 'none'; // Disable click events on the second card
            this.playSound(paredSound); // Play the paired card sound effect
            remainingCards -= 2; // Reduce the remaining cards count by 2 (a pair)

            // If only two cards are left, reveal them automatically
            if (remainingCards == 2) {
                const nonZeroDatasetElements = document.querySelectorAll('img[dataset]:not([dataSet="0"])');
                ShowFrontside.setup(nonZeroDatasetElements[0].parentNode);
                ShowFrontside.setup(nonZeroDatasetElements[1].parentNode);
                this.disablePairCards(nonZeroDatasetElements[0].parentNode, nonZeroDatasetElements[1].parentNode);
            }

            // If all cards are paired, show win box and play victory sound
            if (remainingCards == 0) {
                youWinBox.style.opacity = 1; // Show the win box
                youWinBox.style.zIndex = 2; // Set the win box above other elements
                this.playSound(winAllGame); // Play the victory sound effect
                remainingCards = 16; // Reset the remaining cards count for the next game
            }
        } catch (error) {
            console.error('Error disabling pair cards:', error);
        }
    },

    // Method to play a sound effect
    playSound: function(audioFile) {
        try {
            audioFile.play(); // Play the specified audio file
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }
}

// Export the CardClick object as default
export default CardClick; // Export the CardClick object to be used in other modules