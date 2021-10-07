import { Calendar } from '@/shared/value-objects/Calendar'
import { Money } from '@/shared/value-objects/Money'

export class SwingTransaction {
    public constructor(private _id: string, private _enteredDate: Calendar, private _tradingPair: string, private _enteredPrice: number) {

    }
}