// Exporting DOM elements for use across the project
export const startButton    = document.querySelector('#startBtn');
export const imgContainer   = document.querySelector('#img-container');
export const countdownTimer = document.querySelector('#countDown');
export const Allfrontsides  = document.querySelectorAll('.frontSide');
export const AllBackSides   = document.querySelectorAll('.backSide');
export const youWinBox      = document.querySelector('#win');
// Audio elements for various game events
export const paredSound     = new Audio('./assets/audio/yes.mp3');
export const wrongSound     = new Audio('/assets/audio/wrong.mp3');
export const winAllGame     = new Audio('/assets/audio/win1.mp3');
// Add more default image addresses as needed
export const defaultImages = [
    './assets/img/def/def01.jpeg',
    './assets/img/def/def02.jpeg',
    './assets/img/def/def03.jpeg',
    './assets/img/def/def04.jpeg',
    './assets/img/def/def05.jpeg',
    './assets/img/def/def06.jpeg',
    './assets/img/def/def07.jpeg',
    './assets/img/def/def08.jpeg'
];