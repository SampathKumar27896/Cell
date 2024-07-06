class Grid {
    _object = null;
    _grid = [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O']
    ];
    constructor(object) {
        this.object = object;
    }
    displayGrid() {
        // console.log(prevPosition, currentPosition)
        this._grid[this.object._prevm][this.object._prevn] = 'O';
        this._grid[this.object.m][this.object.n] = this.object.pattern;
        console.log(`
            ${this._grid[0][0]}  ${this._grid[0][1]}  ${this._grid[0][2]}
            ${this._grid[1][0]}  ${this._grid[1][1]}  ${this._grid[1][2]}
            ${this._grid[2][0]}  ${this._grid[2][1]}  ${this._grid[2][2]}
        `);
    }
    getTotalArea() {
        return this._grid.length;
    }
}

module.exports = Grid;