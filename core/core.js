class Cell {
    prevX = 0;
    prevY = 0;
    currX = 1;
    currY = 1;
    next = null;
    pattern = '🟧';

}

class Body {
    head = null;
    limit = 0;
    constructor(head, limit) {
        this.head = head;
        this.limit = limit;
    }

    addCell() {
        const cell = new Cell();
        if(this.head === null) {
            cell.currX = 1;
            cell.currY = 1;
            this.head = cell;
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            cell.currX = temp.currX;
            cell.currY = temp.currY + 1;
            temp.next = cell;
        }
        
    }
    move(head, direction) {
        let temp = head;
        temp.prevX = temp.currX;
        temp.prevY = temp.currY;
        switch(direction) {
            case 'down':
                temp.currX = (temp.currX + 1) % this.limit;
                break;
            case 'up':
                temp.currX = (temp.currX - 1 < 0) ? (this.limit - 1): --temp.currX;
                break;
            case 'left':
                temp.currY = (temp.currY - 1 < 0) ? (this.limit - 1) : --temp.currY;
                break;
            case 'right':
                temp.currY = (temp.currY + 1) % this.limit;
                break;
            default:
        }
        this.moveBody(temp);
        return head;
    }
    moveBody(temp) {
        while(temp.next !== null) {
            temp.next.prevX = temp.next.currX;
            temp.next.prevY = temp.next.currY;
            temp.next.currX = temp.prevX;
            temp.next.currY = temp.prevY;
            temp = temp.next;
        }
    }
}
module.exports = {
    Cell,
    Body
}