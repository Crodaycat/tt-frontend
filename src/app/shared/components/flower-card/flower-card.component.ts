import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flower } from '../../model/flower';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrl: './flower-card.component.css',
})
export class FlowerCardComponent {
  @Input()
  flower?: Flower;

  @Output()
  onEdit: EventEmitter<Flower> = new EventEmitter<Flower>();

  @Output()
  onDelete: EventEmitter<Flower> = new EventEmitter<Flower>();

  editFlower() {
    this.onEdit.emit(this.flower);
  }

  deleteFlower() {
    this.onDelete.emit(this.flower);
  }
}
