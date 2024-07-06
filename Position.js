class Position {
    _m = 0;
    _n = 0;
    _size = 3;
    constructor() {}
    set position(position) {
        this._position = position;
    }

    get position() {
        return this._position;
    }

    incrementNbyOne() {
        let newPosition = (++this._n)% 3;
        this._n = newPosition;
    }

    incrementMbyOne() {
        let newPosition = (++this._m)% 3;
        this._m = newPosition;
    }

    decrementNbyOne() {
        let newPosition = (--this._n);
        if(newPosition < 0)
            newPosition = 2;
        this._n = newPosition;
    }
    
    decrementMbyOne() {
        let newPosition = (--this._m);
        if(newPosition < 0)
            newPosition = 2;
        this._m = newPosition;
    }
}

module.exports = Position;