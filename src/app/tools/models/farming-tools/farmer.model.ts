import { BaseClickableItem } from '../base-clickable-item.model';

export class Farmer extends BaseClickableItem {
    constructor(count?: number) {
        super();
        this.id = 1;
        this.name = 'Farmer';
        this.income = 5.3;
        this.power = 1;
        this.icon = 'assets/icons/farmer.png';
        this.count = count || 0;
        this.price = 10;
        this.priceIncreaseFactor = 0.05;
    }
}
