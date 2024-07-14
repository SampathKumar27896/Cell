class Grid {
    _objects = [];
    _pattern = '⬛​';
    _size = 0;
    _grid = [];
    constructor(size, objects) {
        this._size = size;
        this._objects = objects;
    }
    update(body) {
        let temp = body;
        while(temp !== null) {
            //this._grid[temp.prevX][temp.prevY] = this._pattern;
            this._grid[temp.currX][temp.currY] = temp.pattern;
            
            if(temp.next === null)
                this._grid[temp.prevX][temp.prevY] = this._pattern;

            temp = temp.next;
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
    getSize() {
        return this._size;
    }
    
}

module.exports = Grid;