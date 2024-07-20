import { Component, EventEmitter, Input, Output } from '@angular/core';
import { itemType } from '../enums/itemType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node!: itemType;
  @Output() selected = new EventEmitter<itemType>();
  expanded: boolean = false;

  onSelect(node: itemType) {
    this.selected.emit(node);
    this.expanded = !this.expanded;
  }
}
