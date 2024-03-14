// Define the ShowFrontside object responsible for handling the front side of cards
const ShowFrontside = {
    setup: function(card) {
        try {
            // Get the front and back side images of the card
            const frontSide = card.querySelector('img.frontSide');
            const backSide = card.querySelector('img.backSide');

            // Remove classes that control the positioning and display of the card sides
            frontSide.classList.remove('posAbsolute');
            backSide.classList.remove('posRelative');

            // Hide the back side of the card
            backSide.style.display = 'none';

            // Remove all existing classes from front and back sides
            frontSide.classList.remove();
            backSide.classList.remove();

            // Set the appropriate classes for front and back sides
            frontSide.className = 'frontSide';
            backSide.className = 'backSide';
        } catch (error) {
            console.error('Error setting up front side:', error);
        }
    }
};

// Export the ShowFrontside object as default to be used in other modules
export default ShowFrontside;