const ShowBackside = {
    
    setup: function(card) {
        const frontSide = card.querySelector('img.frontSide');
        const backSide  = card.querySelector('img.backSide');

        frontSide.classList.add('posAbsolute');

        backSide.style.display = 'block';
        backSide.classList.add('posRelative');

    }

}

export default ShowBackside;