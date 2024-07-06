const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');



class InputReader {
    _endOfInput = false;
    _readLineInterface = null;
    constructor() {
        this._readLineInterface = readline.createInterface({input, output});
        
    }
    listenInput(game) {
        this._readLineInterface.on('line', (data) => {
            game.load(data);
        });
    }

    get isEndOfInput() {
        return this._endOfInput;
    }
    close() {
        this._readLineInterface.close();
    }

}
module.exports = InputReader;