class Grid {
    _objects = [];
    _pattern = '⬛​';
    _size = 0;
    _grid = [];
    constructor(size, objects) {
        this._size = size;
        this._objects = objects;
    }
    set objects(objects) {
        this.objects = objects;
    }
    get objects() {
        return this.objects;
    }
    clearObjects() {
        this._objects = [];
    }
    reset() {
        for(let [index,object] of this._objects.entries()) {
            if(this._grid[object._prevm][object._prevn] === object.pattern)
                this._grid[object._prevm][object._prevn] = this._pattern;
            this._grid[object.m][object.n] = object.pattern;
        }
    }
    display() {
        let outputString = `                                             `;
        for(let i = 0; i < this._size; i++) {
            for(let j = 0; j < this._size; j++) {
                outputString = outputString.concat(`${this._grid[i][j]}`);
            }
            outputString = outputString.concat(`\n                                             `);
        }
        console.log(outputString);
    }
    init() {
        for(let i = 0; i < this._size; i++) {
                const array = new Array(this._size).fill(`${this._pattern}`, 0, this._size)
                this._grid.push(array);
        }
    }
    getTotalArea() {
        return this._grid.length;
    }
}

module.exports = Grid;