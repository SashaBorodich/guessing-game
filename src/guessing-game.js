class GuessingGame {
    constructor() {}

    setRange(min, max) {
			this.min = min;
			this.max = max;
    }

    guess() {
			this.newRange = this.max - this.min;
			this.number = Math.ceil(this.newRange / 2) + this.min;
			return this.number;
    }

    lower() {
			this.max = this.number;
    }

    greater() {
			this.min = this.number;
    }
}

module.exports = GuessingGame;
