interface CardProps {
    word: string;
    flipped: boolean;
    color: string;
}

class Card {
    word: string;
    flipped: boolean;
    color: string;

    constructor(options: CardProps) {
        this.word = options.word;
        this.flipped = options.flipped;
        this.color = options.color;
    }
}

export { Card };