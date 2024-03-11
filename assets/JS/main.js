import CreateRandImgs from './randImgs.js';
import ShowAllCards   from './showAllCards.js';
import CardClick      from './cardClickConrtol.js';


document.addEventListener("DOMContentLoaded", async () => {
    CreateRandImgs.setup(16);
    const images = CreateRandImgs.getImgArray();
    await ShowAllCards.setup(images);
    CardClick.setup();
});