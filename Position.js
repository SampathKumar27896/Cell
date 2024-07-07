class Position {
    _m = 0;
    _n = 0;
    _limit = 3;
    constructor(limit) {
        this._limit = limit;
    }
    set m(postion) {
        this._m = position;
    }

    set n(postion) {
        this._n = position;
    }

    get m() {
        return this._m;
    }

    get n() {
        return this._n;
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

    setRandomPosition() {
        this._m = (Math.floor(Math.random() * this._limit));
        this._n = (Math.floor(Math.random() * this._limit));
    }
}

module.exports = Position;