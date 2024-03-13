import { startButton , countdownTimer } from './1variables.js';
import ResetEffects    from './2resetEffects.js';
import CreateRandImgs  from './3randImgs.js';
import ShowAllCards    from './4showAllCards.js';
import CardClick       from './5cardClickConrtol.js';

document.addEventListener("DOMContentLoaded",  () => {
    startButton.addEventListener('click', async () => {
        ResetEffects.setup();
        CreateRandImgs.setup(16);
        const images = CreateRandImgs.getImgArray();
        await ShowAllCards.setup(images);
        countdownTimer.style.opacity = .3
        countdownTimer.innerHTML = '&#x23F0;';
        CardClick.setup();
    })
});