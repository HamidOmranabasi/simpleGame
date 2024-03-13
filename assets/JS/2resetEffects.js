import { youWinBox, paredSound, wrongSound, winAllGame } from './1variables.js';
    
const ResetEffects = {
        setup: function() {
            youWinBox.classList.add('winBefor');
            youWinBox.style = "";
            paredSound.pause();
            paredSound.currentTime = 0;
            wrongSound.pause();
            wrongSound.currentTime = 0;
            winAllGame.pause();
            winAllGame.currentTime = 0;
        }
    }
    
    export default ResetEffects;