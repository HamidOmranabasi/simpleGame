// Define the ShowBackside object responsible for handling the back side of cards
const ShowBackside = {
    setup: function(card) {
        try {
            // Get the front and back side images of the card
            const frontSide = card.querySelector('img.frontSide');
            const backSide = card.querySelector('img.backSide');

            // Enable pointer events on the card
            card.style.pointerEvents = 'unset';

            // Position the front side of the card absolutely
            frontSide.classList.add('posAbsolute');

            // Display the back side of the card
            backSide.style.display = 'block';

            // Position the back side of the card relatively
            backSide.classList.add('posRelative');
        } catch (error) {
            console.error('Error setting up back side:', error);
        }
    }
};

// Export the ShowBackside object as default to be used in other modules
export default ShowBackside;