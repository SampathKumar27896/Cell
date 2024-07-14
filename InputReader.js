const readline = require('node:readline');
const { stdin: input } = require('node:process');

class InputReader {
    _endOfInput = false;
    _readLineInterface = null;
    _interval = null;
    constructor() {
        readline.emitKeypressEvents(input);
    }
    listenInput(game) {
        if (process.stdin.isTTY)
            process.stdin.setRawMode(true);
        const program = game.main.bind(game);
        setInterval(() => {
            program();
        }, 1000)
        process.stdin.on('keypress', (chunk, key) => {
            console.log(key.sequence);
            game.currInput = key.sequence;
        });
    }

    get isEndOfInput() {
        return this._endOfInput;
    }
    close() {
        clearInterval(this._interval);
        process.exit();
    }

}
module.exports = InputReader;