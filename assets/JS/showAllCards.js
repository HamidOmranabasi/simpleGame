import {imgContainer, countdownTimer} from './variables.js';

const ShowAllCards = {
    setup: function(imgArray) {
        return new Promise((resolve) => {
            let countdownValue = 3;
            countdownTimer.innerHTML = countdownValue;
            imgContainer.innerHTML = "";
            imgArray.forEach((image, index) => {
                
                let newDomElement = `
                <div class="card" dataset="${index + 1}">
                ${image.outerHTML}
                <img class="backSide" src="./assets/img/backCard.jpg" alt="">
                </div>
                `;
                imgContainer.innerHTML += newDomElement;
            });
            
            const countdownInterval = setInterval(() => {
                
                countdownValue -= 1;
                countdownTimer.innerHTML = countdownValue;
                if (countdownValue < 1) {
                    clearInterval(countdownInterval);
                    countdownTimer.style.opacity = 0;
                }
            }, 1000);
            
            countdownValue = 3;
            countdownTimer.style.opacity = 1;
            

            setTimeout(() => {
                const Allfrontsides = document.querySelectorAll('.frontSide');
                const AllBackSides = document.querySelectorAll('.backSide');
                Allfrontsides.forEach( (frontSide)=> {
                    frontSide.classList.add('posAbsolute');
                })
                AllBackSides.forEach( (backSide)=> {
                    backSide.style.display = 'block';
                    backSide.classList.add('posRelative');
                })

                resolve();
            }, 3000);
        });
    }
};

export default ShowAllCards;