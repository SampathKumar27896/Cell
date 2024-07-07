const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');



class InputReader {
    _endOfInput = false;
    _readLineInterface = null;
    _interval = null;
    constructor() {
        readline.emitKeypressEvents(input);
    }
    listenInput(game) {
        // let interval = this._interval;
        if (process.stdin.isTTY)
            process.stdin.setRawMode(true);
        process.stdin.on('keypress', (chunk, key) => {
            game.load(key.sequence);
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