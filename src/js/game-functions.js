import { gameImages, gameRules } from './constants';
import {
	gameItemsElement,
	gameResultElement,
	pickedPcContainerElement,
	pickedPcImageElement,
	pickedUserContainerElement,
	pickedUserImageElement,
	pointsPcElement,
	pointsUserElement,
	resultItemsElement
} from './dom';

const gameItems = ['rock', 'paper', 'scissors'];

let userSelection = null;
let pcSelection = null;
let pointsUser = 0;
let pointsPc = 0;
let showResults = false;

const updatePoints = () => {
	pointsUserElement.textContent = pointsUser;
	pointsPcElement.textContent = pointsPc;
};

const changeScreen = () => {
	if (showResults) {
		gameItemsElement.classList.add('hide');
		resultItemsElement.classList.remove('hide');
	} else {
		gameItemsElement.classList.remove('hide');
		resultItemsElement.classList.add('hide');
	}
};

const printResults = () => {

	pickedUserContainerElement.classList.add(`game-item-${userSelection}`);
	pickedUserImageElement.src = gameImages[userSelection];
	pickedPcContainerElement.classList.add(`game-item-${pcSelection}`);
	pickedPcImageElement.src = gameImages[pcSelection];

	showResults = true;

	changeScreen();
};

const checkRulesGame = () => {
	if (userSelection === pcSelection) {
		console.log('empate');
		gameResultElement.textContent = 'DRAW';
		return;
	}
	if (gameRules[userSelection][pcSelection]) {
		pointsUser++;
		gameResultElement.textContent = 'YOU WIN';
		console.log(`YOU:${pointsUser}`);
	} else {
		pointsPc++;
		gameResultElement.textContent = 'YOU LOSE';
		console.log(`PC:${pointsPc}`);
	}

	updatePoints();
};

const generateRandomItem = () => {
	const randomItem = Math.floor(Math.random() * gameItems.length);
	const pcItem = gameItems[randomItem];
	pcSelection = pcItem;
	console.log(`user:${userSelection} pc:${pcSelection}`);
	checkRulesGame();
	printResults();
};

const getUserSelection = userItem => {
	userSelection = userItem;
	generateRandomItem();
};

const returnGame = () => {
    pickedUserContainerElement.classList.remove(`game-item-${userSelection}`);
    pickedPcContainerElement.classList.remove(`game-item-${pcSelection}`);
    
	showResults = false;
	changeScreen();
};

export { getUserSelection, returnGame, printResults, changeScreen };
