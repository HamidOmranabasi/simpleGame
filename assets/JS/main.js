import { startButton , countdownTimer } from './variables.js';
import CreateRandImgs  from './randImgs.js';
import ShowAllCards    from './showAllCards.js';
import CardClick       from './cardClickConrtol.js';


document.addEventListener("DOMContentLoaded",  () => {
    startButton.addEventListener('click', async () => {
        
        CreateRandImgs.setup(16);
        const images = CreateRandImgs.getImgArray();
        await ShowAllCards.setup(images);
        countdownTimer.style.opacity = .3
        countdownTimer.innerHTML = '&#x23F0;';
        CardClick.setup();
        
    })

});