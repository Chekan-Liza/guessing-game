class GuessingGame {
    constructor(min, max, border) {
        this.min = min;
        this.max = max;
        this.border = border;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        return this.border = Math.round((this.max - this.min)/2 + this.min);
    }
    lower() {
        this.max = this.border;
    }
    greater() {
        this.min = this.border;
    }
}

module.exports = GuessingGame;
