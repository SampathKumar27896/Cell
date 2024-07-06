class UserInput {
     _input = '';
     _endOfInputCharacter = 'c';
     keyToMove = new Map([
        ['d', 'moveRight'],
        ['w', 'moveUp'],
        ['a', 'moveLeft'],
        ['s', 'moveDown'],
    ]);
    
    set input(input) {
        switch(input) {
            case 'd':
            case 's':
            case 'a':
            case 'c':
            case 'w':
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