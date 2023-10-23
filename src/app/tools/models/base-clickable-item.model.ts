import { Subject } from "rxjs";

export class BaseClickableItem {
    id!: number;
    name!: string;
    icon!: string;
    income!: number;
    power!: number;
    count!: number;
    price!: number;
    priceIncreaseFactor: number = 1;

    income$: Subject<number> = new Subject<number>();

    private timer: any;

    constructor() {
        this.timer = setInterval(() => {
            this.income$.next(this.calculateIncome());
        }, 1000);
    }

    public addNew() {
        this.count++;
        this.updatePrice();
    }

    public remove() {
        this.count--;
        if (this.count === 0) {
            this.income$.complete();
            this.stopTimer();
        }
    }

    public getPrice() {
        // return this.price + (this.priceIncreaseFactor * this.count);
        return this.price;
    }

    private updatePrice() {
        this.price = this.price + (this.priceIncreaseFactor * this.count);
    }

    private calculateIncome() { 
        return this.count * this.income;
    }

    private stopTimer() {
        clearInterval(this.timer);
    }    
}