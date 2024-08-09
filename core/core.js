class Cell {
    prevX = 0;
    prevY = 0;
    currX = 1;
    currY = 1;
    next = null;
    pattern = '🟧';
    constructor(pattern) {
        this.pattern = pattern
    }
}

class Body {
    head = null;
    limit = 0;
    constructor(head, limit) {
        this.head = head;
        this.limit = limit;
    }

    addCell(cell) {
        if(this.head === null) {
            cell.currX = 1;
            cell.currY = 1;
            this.head = cell;
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            cell.currX = temp.prevX;
            cell.currY = temp.prevY;
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
                temp.currY = (temp.currY + 1) % this.limit;

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
    setRandomPosition(head) {
        let temp = head;
        temp.prevX = temp.currX;
        temp.prevY = temp.currY;
        temp.currX = Math.floor(Math.random() * (this.limit - 0) + 0);
        temp.currY = Math.floor(Math.random() * (this.limit - 0) + 0);
        return head;
    }
}
module.exports = {
    Cell,
    Body
}