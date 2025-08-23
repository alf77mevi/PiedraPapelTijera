export class Score {
constructor({ player = 0, cpu = 0, rounds = 0 } = {}) {
this.player = player;
this.cpu = cpu;
this.rounds = rounds;
Object.freeze?.(this);
}
static empty() { return new Score(); }
}