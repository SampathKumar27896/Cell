const GameObject = require('./GameObject');

class MotionObject extends GameObject {
    //_moves = ['moveRight','moveDown', 'moveLeft', 'moveUp'];
    // constructor(position, pattern) {
    //    // super(position, pattern);
    // }
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

module.exports = MotionObject;