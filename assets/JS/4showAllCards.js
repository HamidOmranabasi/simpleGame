// Import necessary DOM elements from './1variables.js'
import { imgContainer, countdownTimer, youWinBox } from './1variables.js';

// Define an object to handle displaying all cards and countdown animation
const ShowAllCards = {
    // Method to setup and display all cards
    setup: function(imgArray) {
        return new Promise((resolve) => {
            try {
                let countdownValue = 3;

                // Hide the win box and set initial countdown value
                youWinBox.style.opacity = 0;
                countdownTimer.innerHTML = countdownValue;
                imgContainer.innerHTML = "";

                // Create DOM elements for each image in imgArray and append them to imgContainer
                imgArray.forEach((image, index) => {
                    let newDomElement = `
                        <div class="card" dataset="${index + 1}">
                            ${image.outerHTML}
                            <img class="backSide" src="./assets/img/backCard.jpg" alt="">
                        </div>
                    `;
                    imgContainer.innerHTML += newDomElement;
                });

                // Start countdown animation
                const countdownInterval = setInterval(() => {
                    countdownValue -= 1;
                    countdownTimer.innerHTML = countdownValue;
                    if (countdownValue < 1) {
                        clearInterval(countdownInterval);
                        countdownTimer.style.opacity = 0;
                    }
                }, 1000);

                countdownValue = 3; // Reset countdown value
                countdownTimer.style.opacity = 1; // Show countdown timer

                // Delay to reveal all card fronts and backs after countdown
                setTimeout(() => {
                    const Allfrontsides = document.querySelectorAll('.frontSide');
                    const AllBackSides = document.querySelectorAll('.backSide');

                    // Position front sides and reveal back sides
                    Allfrontsides.forEach((frontSide) => {
                        frontSide.classList.add('posAbsolute');
                    });
                    AllBackSides.forEach((backSide) => {
                        backSide.style.display = 'block';
                        backSide.classList.add('posRelative');
                    });

                    resolve(); // Resolve the promise after setup is complete
                }, 3000); // Delay for 3 seconds
            } catch (error) {
                console.error('Error setting up card display:', error);
                resolve(); // Resolve the promise even if there's an error to prevent blocking
            }
        });
    }
};

// Export the ShowAllCards object as default
export default ShowAllCards;