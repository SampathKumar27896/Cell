class Position {
    _m = 0;
    _n = 0;
    _limit = 3;
    constructor(limit) {
        this._limit = limit;
    }
    set position(position) {
        this._position = position;
    }

    get position() {
        return this._position;
    }

    incrementNbyOne() {
        let newPosition = (++this._n)% this._limit;
        this._n = newPosition;
    }

    incrementMbyOne() {
        let newPosition = (++this._m)% this._limit;
        this._m = newPosition;
    }

    decrementNbyOne() {
        let newPosition = (--this._n);
        if(newPosition < 0)
            newPosition = (this._limit - 1);
        this._n = newPosition;
    }
    
    decrementMbyOne() {
        let newPosition = (--this._m);
        if(newPosition < 0)
            newPosition = (this._limit - 1);
        this._m = newPosition;
    }
}

module.exports = Position;