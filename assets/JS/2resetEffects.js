// Importing required elements and sounds from variables file
import { youWinBox, paredSound, wrongSound, winAllGame } from './1variables.js';

// Define ResetEffects object to encapsulate reset functionality
const ResetEffects = {
    setup: function() {
        try {
            // Add a class to the 'youWinBox' for potential CSS effects before clearing styles
            youWinBox.classList.add('winBefor');
            // Clear inline styles from 'youWinBox'
            youWinBox.style = "";
            
            // Pause and reset the current time of each sound to ensure they can be played from the start next time
            paredSound.pause();
            paredSound.currentTime = 0;
            wrongSound.pause();
            wrongSound.currentTime = 0;
            winAllGame.pause();
            winAllGame.currentTime = 0;
        } catch (error) {
            console.error('Error resetting effects:', error);
            // Error handling
        }
    }
}

// Export the ResetEffects object for use in other modules
export default ResetEffects;