import LIZARD from '../assets/images/icon-lizard.svg';
import PAPER from '../assets/images/icon-paper.svg';
import ROCK from '../assets/images/icon-rock.svg';
import SCISSORS from '../assets/images/icon-scissors.svg';
import SPOCK from '../assets/images/icon-spock.svg';

const gameRules = {
	rock: {
		paper: false,
		scissors: true,
		lizard: true,
		spock: false
	},
	scissors: {
		rock: false,
		paper: true,
		lizard: true,
		spock: false
	},
	paper: {
		rock: true,
		scissors: false,
		lizard: false,
		spock: true
	},
	lizard: {
		rock: false,
		paper: true,
		scissors: false,
		spock: true
	},
	spock: {
		rock: true,
		paper: false,
		scissors: true,
		lizard: false
	}
};

const gameImages = {
	rock: ROCK,
	paper: PAPER,
	scissors: SCISSORS,
	lizard: LIZARD,
	spock: SPOCK
};

export { gameRules, gameImages };
