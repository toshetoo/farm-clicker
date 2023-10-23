import { Injectable } from '@angular/core';
import { BaseClickableItem } from 'src/app/tools/models/base-clickable-item.model';
import { Farmer } from 'src/app/tools/models/farming-tools/farmer.model';
import { Tractor } from 'src/app/tools/models/farming-tools/tractor.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  tools: BaseClickableItem[] = [new Farmer(1), new Tractor()];

  constructor() { }

  getTools(): BaseClickableItem[] {
    return this.tools;
  }
}
