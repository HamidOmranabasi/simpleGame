const CardClick = {
    
    setup: function() {
        let turnedCardsNumbr = 0;
        const AllCards = document.querySelectorAll('.card');

        AllCards.forEach( (card, index) => {

            card.addEventListener('click' , () => {
                switch (turnedCardsNumbr) {
                    case 0:
                        console.log(card);
                        break;   
                }


            })
        })
    },


}

export default CardClick;