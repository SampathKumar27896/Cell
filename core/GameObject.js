class GameObject {
    _pattern = '@';
    _prevm = 0;
    _prevn = 0;
    position = 0;
    
    constructor(
        position,
        pattern
    ) {
        this.position = position;
        this._pattern = pattern;
    }
    
    get m() {
        return this.position._m;
    }

    set m(m) {
        this.position._m = m;
    }

    get n() {
        return this.position._n;
    }
    
    set n(n) {
        this.position._n = n;
    }

    get prevm() {
        return this._prevm;
    }

    get prevn() {
        return this._prevn;
    }

    set pattern(pattern) {
        this._pattern = pattern;
    }

    get pattern() {
        return this._pattern;
    }

    spawnRandom() {
        this.position.setRandomPosition();
    }
}

module.exports = GameObject;