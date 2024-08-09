const {Cell} = require('./core/core');
class Game {
    currInput = '';
    constructor(body, foodBody, userInput, grid, inputReader) {
        this.body = body;
        this.foodBody = foodBody;
        this.userInput = userInput;
        this.grid = grid;
        this.inputReader = inputReader;
    }
    main() {
        this.userInput.input = this.currInput;
        if(this.userInput.isEndOfInput()) {
            this.inputReader.close();
        }
        this.body.move(this.body.head, this.userInput.getDirection());
        if(this.checkConflict()) {
            this.body.addCell(new Cell('🟧'));
            this.foodBody.setRandomPosition(this.foodBody.head);
            this.grid.update(this.foodBody.head);
        }
        
        this.grid.update(this.body.head);
       
        this.grid.display();
    }
    checkConflict() {
        return this.body.head.currX === this.foodBody.head.currX &&
               this.body.head.currY === this.foodBody.head.currY;
    }
}

module.exports = Game;