const ShowFrontside = {
    
    setup: function(card) {
        const frontSide = card.querySelector('img.frontSide');
        const backSide  = card.querySelector('img.backSide');

        frontSide.classList.remove('posAbsolute');
        
        backSide.classList.remove('posRelative');
        backSide.style.display = 'none';

        frontSide.classList.remove();
        backSide.classList.remove();

        frontSide.className = 'frontSide';
        backSide.className = 'backSide';
    }


}

export default ShowFrontside;