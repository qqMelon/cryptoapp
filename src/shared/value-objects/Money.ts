export enum Currency {
    USD = 'USD'
}

export class Money {
    public constructor(private _quantity: number, private _currency: Currency = Currency.USD) {}

    get quantity(): number {
        return this._quantity
    }

    get currency(): Currency {
        return this._currency
    }

    get formatted(): string {
        return `$${this._quantity / 100} ${this._currency}`
    }
}