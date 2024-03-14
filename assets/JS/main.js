// Import necessary modules from other files for setup and game logic
import { startButton, countdownTimer } from './1variables.js'; // Import UI elements like start button and timer
import ResetEffects from './2resetEffects.js';                 // Import module for resetting game effects
import CreateRandImgs from './3randImgs.js';                   // Import module for creating random images for cards
import ShowAllCards from './4showAllCards.js';                 // Import module for displaying all cards initially
import CardClick from './5cardClickConrtol.js';                // Import module for handling card click events

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Add click event listener to the start button
    startButton.addEventListener('click', async () => {
        try {
            ResetEffects.setup();                        // Reset game effects to their initial state
            CreateRandImgs.setup(16);                    // Setup random images with a specified number of images (16 in this case)
            const images = CreateRandImgs.getImgArray(); // Retrieve the array of random images
            await ShowAllCards.setup(images);            // Display all cards with the images, awaiting any asynchronous operations
            countdownTimer.style.opacity = 0.3;          // Set the opacity of the countdown timer for visual effect
            countdownTimer.innerHTML = '&#x23F0;';       // Set the inner HTML of the countdown timer to a clock icon
            CardClick.setup();                           // Setup the click event handlers for cards
        } catch (error) {
            console.error('Failed to initialize game:', error);
            // Error handling
        }
    })
});