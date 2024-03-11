import {imgContainer, countdownTimer} from './variables.js';

const ShowAllCards = {
    setup: function(imgArray) {
        return new Promise((resolve) => {
            let countdownValue = 3;
            imgArray.forEach((image, index) => {
                let newDomElement = `
                    <div class="card" dataSet="${index + 1}">
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

            setTimeout(() => {
                const Allfrontsides = document.querySelectorAll('.frontSide');
                const AllBackSides = document.querySelectorAll('.backSide');
                Allfrontsides.forEach( (frontSide)=> {
                    frontSide.classList.add('posAbsolute')
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