class Snake {
    _pattern = '@';
    _prevm = 0;
    _prevn = 0;
    position = 0;
    
    constructor(
        position
    ) {
        this.position = position;
    }
    
    get m() {
        return this.position._m;
    }

    set m(m) {
        return this.position._m = m;
    }

    get n() {
        return this.position._n;
    }
    
    set n(n) {
        return this.position._n = n;
    }

    get prevm() {
        return this._prevm;
    }

    get prevn() {
        return this._prevn;
    }

    get pattern() {
        return this._pattern;
    }

    makeAMove(move) {
        this._prevm = this.position._m;
        this._prevn = this.position._n
        switch(move) {
            case 'moveRight':
                this.position.incrementNbyOne();
                break;
            case 'moveDown':
                this.position.incrementMbyOne();
                break;
            case 'moveLeft':
                this.position.decrementNbyOne();
                break;
            case 'moveUp':
                this.position.decrementMbyOne();
                break;
            default:
        }
    }
    
}

module.exports = Snake;