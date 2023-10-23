import { Component } from '@angular/core';
import { MoneyService } from '../core/services/money.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent {
  money: number = 0;

  constructor(private moneyService: MoneyService) { 
    this.moneyService.money$.subscribe(money => this.money = money);
  }

  get income(): number {
    return this.moneyService.getIncomePerSecond();
  }
}
