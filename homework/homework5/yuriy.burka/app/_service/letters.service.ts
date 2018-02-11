import { Injectable } from '@angular/core';
import { Letterbox } from '../_model/letterbox';
import { Letter } from '../_model/letter';

@Injectable()
export class LettersService {

boxes: Letterbox[] = [
    { id: 1, title: 'Почта' },
    { id: 2, title: 'Корзина' },
    { id: 3, title: 'Спам' }
];

letters: Letter[] = [];

private template = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum.`;

constructor() {
    for (let i = 1; i < 4; ++i) {
        for (let j = 1; j < 2 + Math.random() * 5; ++j) {
            this.letters.push( {
                id: j,
                boxId: i,
                title: `Letter #${j}`,
                body: this.generateBody()
            } );
        }
    }
}

private generateBody(): string {
    const from: number = Math.floor(Math.random() * (this.template.length - 100));
    return this.template.slice(from, from + 100);
}

getBoxes(): Letterbox[] {
    return this.boxes;
}

getLetters(boxId: string): Letter[] {
    return this.letters.filter((letter) => '' + letter.boxId === boxId);
}

getLetter(letterId: string): Letter | null {
    const letters = this.letters.filter((letter) => '' + letter.boxId === letterId);

    if (letters.length) {
        return letters[0];
    }

    return null;
}

}
