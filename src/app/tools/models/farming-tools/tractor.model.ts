import { BaseClickableItem } from "../base-clickable-item.model";

export class Tractor extends BaseClickableItem {
    constructor(count?: number) {
        super();
        this.id = 2;
        this.name = 'Tractor';
        this.income = 1;
        this.power = 2;
        this.icon = 'assets/icons/tractor.png';
        this.count = count || 0;
        this.price = 50;
        this.priceIncreaseFactor = 0.1;
    }
}