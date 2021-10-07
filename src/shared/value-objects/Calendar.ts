export class Calendar {
    public constructor(private _date: string = new Date().toISOString()) {}

    get date(): string {
        return this._date
    }
}