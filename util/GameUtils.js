import { Score } from '../valueobjects/ScoreVO';


export const MOVES = {
ROCK: 'rock',
PAPER: 'paper',
SCISSORS: 'scissors',
};


const ORDER = [MOVES.ROCK, MOVES.PAPER, MOVES.SCISSORS];


// A vence a B
const WINS_OVER = {
[MOVES.ROCK]: MOVES.SCISSORS,
[MOVES.PAPER]: MOVES.ROCK,
[MOVES.SCISSORS]: MOVES.PAPER,
};


export function getRandomMove() {
const i = Math.floor(Math.random() * ORDER.length);
return ORDER[i];
}



export function decideWinner(playerMove, cpuMove) {
if (!playerMove || !cpuMove) return 'draw';
if (playerMove === cpuMove) return 'draw';
return WINS_OVER[playerMove] === cpuMove ? 'player' : 'cpu';
}


export function computeNextScore(prevScore, result) {
const next = {
player: prevScore?.player ?? 0,
cpu: prevScore?.cpu ?? 0,
rounds: (prevScore?.rounds ?? 0) + 1,
};
if (result === 'player') next.player += 1;
if (result === 'cpu') next.cpu += 1;
return new Score(next);
}


export function emptyScore() {
return Score.empty();
}