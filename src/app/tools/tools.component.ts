import { Component, Input } from '@angular/core';
import { BaseClickableItem } from './models/base-clickable-item.model';
import { ToolsService } from '../core/services/tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  tools: BaseClickableItem[] = [];

  constructor(private toolsService: ToolsService) {
    this.tools = this.toolsService.getTools();
  }
}
