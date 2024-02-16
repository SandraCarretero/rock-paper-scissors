// Aquí van los getElementById y los querySelectorAll que pondrías al principio.
const gameItemsElement = document.getElementById('game-items');
const pointsUserElement = document.getElementById('points-user');
const pointsPcElement = document.getElementById('points-pc');

const resultItemsElement = document.getElementById('result-items');
const playAgainElement = document.getElementById('play-again');

const pickedUserContainerElement = document.getElementById(
	'picked-user-container'
);
const pickedUserImageElement = document.getElementById('picked-user-image');

const gameResultElement = document.getElementById('game-result');

const pickedPcContainerElement = document.getElementById('picked-pc-container');
const pickedPcImageElement = document.getElementById('picked-pc-image');

export {
	gameItemsElement,
	pointsUserElement,
	pointsPcElement,
	resultItemsElement,
	playAgainElement,
	pickedUserContainerElement,
	pickedUserImageElement,
	gameResultElement,
	pickedPcContainerElement,
	pickedPcImageElement
};
