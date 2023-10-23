import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseClickableItem } from '../models/base-clickable-item.model';
import { MoneyService } from 'src/app/core/services/money.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
  @Input() item!: BaseClickableItem;

  constructor(private moneyService: MoneyService) { }

  addNewItem(): void {
   if (this.moneyService.getMoney() >= this.item.getPrice()) {
      this.moneyService.subtractMoney(this.item.getPrice());
      this.item.addNew();
    }
  }
}
