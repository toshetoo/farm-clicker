import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge, tap } from 'rxjs';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  private money: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public money$: Observable<number> = this.money.asObservable();

  constructor(private toolsService: ToolsService) { 
    merge(
      ...this.toolsService.getTools().map(tool => tool.income$)
    ).pipe(
      // tap(() => console.log('money', this.money.value)),
      tap(money => this.money.next(this.money.value + money))
    ).subscribe();
  }

  getMoney(): number {
    return this.money.value;
  }

  getIncomePerSecond(): number {
    return this.toolsService.getTools().reduce((acc, tool) => acc + tool.count * tool.income, 0);
  }

  addMoney(money: number) {
    this.money.next(this.money.value + money);
  }

  subtractMoney(money: number) {
    this.money.next(this.money.value - money);
  }
  
}
