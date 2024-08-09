class UserInput {
     _input = '';
     _endOfInputCharacter = 'c';
     keyToMove = new Map([
        ['\x1B[C', 'right'],
        ['\x1B[A', 'up'],
        ['\x1B[B', 'down'],
        ['\x1B[D', 'left'],
    ]);
    
    set input(input) {
        switch(input) {
            case '\x1B[A':
            case '\x1B[D':
            case '\x1B[B':
            case 'c':
            case '\x1B[C':
                this._input = input;
            break;
            default:
                this._input = '';
        }
    }
    get input() {
        return this._input;
    }

    isEndOfInput() {
        return this._input === this._endOfInputCharacter;
    }
    
    getDirection() {
        return this.keyToMove.get(this._input);
    }

}

module.exports = UserInput;