import { gameItemsElement, playAgainElement } from "./dom";
import { getUserSelection, returnGame } from "./game-functions";


if (document.body.dataset.mode === 'advanced') {
  gameItemsElement.push('lizard', 'spock');
}


gameItemsElement.addEventListener('click', event => {
  if (!event.target.classList.contains('game-item')) return;
  getUserSelection(event.target.dataset.item);
});

playAgainElement.addEventListener('click', returnGame);
