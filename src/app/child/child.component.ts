import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() binding: string | undefined;
  @Output() output = new EventEmitter();
  getData() {
    this.output.emit('kusuma');
  }
}
