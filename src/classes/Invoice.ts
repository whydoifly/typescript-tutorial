import { HasFormatter } from '../interfaces/HasFormatter.js';

// Classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
