const readline = require('node:readline');
const { stdin: input } = require('node:process');



class InputReader {
    _endOfInput = false;
    _readLineInterface = null;
    constructor() {
        readline.emitKeypressEvents(input);
    }
    listenInput(game) {
        if (process.stdin.isTTY)
            process.stdin.setRawMode(true);
        process.stdin.on('keypress', (chunk, key) => {
            game.load(chunk);
        });
    }

    get isEndOfInput() {
        return this._endOfInput;
    }
    close() {
        process.exit();
    }

}
module.exports = InputReader;