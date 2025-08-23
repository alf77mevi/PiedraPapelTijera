import { useCallback, useState } from 'react';
import { Score } from '../valueobjects/ScoreVO';
import { MOVES, getRandomMove, decideWinner, computeNextScore } from '../util/GameUtils';


export function useRpsController() {
const [score, setScore] = useState(() => Score.empty());
const [playerMove, setPlayerMove] = useState(null); 
const [cpuMove, setCpuMove] = useState(null);
const [result, setResult] = useState(null); 


const onSelect = useCallback((move) => {
const cpu = getRandomMove();
const r = decideWinner(move, cpu);
setPlayerMove(move);
setCpuMove(cpu);
setResult(r);
setScore((prev) => computeNextScore(prev, r));
}, []);


const onReset = useCallback(() => {
setScore(Score.empty());
setPlayerMove(null);
setCpuMove(null);
setResult(null);
}, []);


return { score, playerMove, cpuMove, result, onSelect, onReset, MOVES };
}