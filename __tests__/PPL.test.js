import { MOVES, decideWinner, computeNextScore, emptyScore } from "../util/GameUtils";

describe("GameUtils unit tests", () => {
  // ST001
  test("A player wins given that player chooses rock and the cpu chooses scissors", () => {
    const player = MOVES.ROCK;
    const cpu = MOVES.SCISSORS;

    const result = decideWinner(player, cpu);
    expect(result).toBe("player");

    const next = computeNextScore(emptyScore(), result);
    expect(next.player).toBe(1);
    expect(next.cpu).toBe(0);
    expect(next.rounds).toBe(1);
  });

  // ST002
  test("A player loses given that player chooses rock and the cpu chooses paper", () => {
    const player = MOVES.ROCK;
    const cpu = MOVES.PAPER;

    const result = decideWinner(player, cpu);
    expect(result).toBe("cpu");

    const next = computeNextScore(emptyScore(), result);
    expect(next.player).toBe(0);
    expect(next.cpu).toBe(1);
    expect(next.rounds).toBe(1);
  });

  // ST003
  test("A player ties with the computer given that both pick rock", () => {
    const player = MOVES.ROCK;
    const cpu = MOVES.ROCK;

    const result = decideWinner(player, cpu);
    expect(result).toBe("draw");

    const next = computeNextScore(emptyScore(), result);
    expect(next.player).toBe(0);
    expect(next.cpu).toBe(0);
    expect(next.rounds).toBe(1);
  });
}); 