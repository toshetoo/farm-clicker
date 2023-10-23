import { BaseClickableItem } from "../base-clickable-item.model";
import { BaseProductionItem } from "../production/base-production-item.model";

export class BaseStorageItem extends BaseClickableItem {
    capacity!: number;
    upkeep!: number;
    inventory!: BaseProductionItem[];

    constructor(count?: number) {
        super();
        this.count = count || 0;
    }
}