import { BaseStorageItem } from "./base-storage.model";

export class SmallBarn extends BaseStorageItem {
    constructor() {
        super();
        this.name = 'Small Barn';
        this.upkeep = 100;
        this.icon = 'assets/icons/barn-small.png';
        this.price = 300;
        this.priceIncreaseFactor = 0.05;
    }
}