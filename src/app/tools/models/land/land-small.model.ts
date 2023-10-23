import { BaseClickableItem } from "../base-clickable-item.model";

export class SmallLand extends BaseClickableItem {
    constructor(count?: number) {
        super();
        this.id = 1;
        this.name = 'Small Land';
        this.income = 5.3;
        this.power = 0;
        this.icon = 'assets/icons/land-small.png';
        this.count = count || 0;
        this.price = 10;
        this.priceIncreaseFactor = 0.05;
    }
}