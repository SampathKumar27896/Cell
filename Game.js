class Game {
    constructor(body, userInput, grid, inputReader) {
        this.body = body;
        this.userInput = userInput;
        this.grid = grid;
        this.inputReader = inputReader;
    }
    main(input) {
        this.userInput.input = input;
        if(this.userInput.isEndOfInput()) {
            this.inputReader.close();
        }
        this.body.move(this.body.head, this.userInput.getDirection());
        this.grid.update(this.body.head);
        this.grid.display();
    }
}

module.exports = Game;