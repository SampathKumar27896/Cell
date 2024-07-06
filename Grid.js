class Grid {
    _object = null;
    _grid = [
        ['🟩', '🟩', '🟩'],
        ['🟩', '🟩', '🟩'],
        ['🟩', '🟩', '🟩']
    ];
    currentPositions = [];
    constructor(objects) {
        this.objects = objects;
    }
    reset() {
        for(let [index,object] of this.objects.entries()) {
            if(this._grid[object._prevm][object._prevn] === object.pattern)
                this._grid[object._prevm][object._prevn] = '🟩';
            this._grid[object.m][object.n] = object.pattern;
            this.currentPositions[index] = `${object.m}${object.n}`;
        }
        // console.log(this.currentPositions[0], this.currentPositions[1]);
    }
    display() {

        console.log(`
            ${this._grid[0][0]}   ${this._grid[0][1]}   ${this._grid[0][2]}
            ${this._grid[1][0]}   ${this._grid[1][1]}   ${this._grid[1][2]}
            ${this._grid[2][0]}   ${this._grid[2][1]}   ${this._grid[2][2]}
        `);
        
    }
    getTotalArea() {
        return this._grid.length;
    }
}

module.exports = Grid;