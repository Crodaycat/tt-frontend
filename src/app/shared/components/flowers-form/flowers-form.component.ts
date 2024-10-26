import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flower } from '../../model/flower';

@Component({
  selector: 'app-flowers-form',
  templateUrl: './flowers-form.component.html',
  styleUrl: './flowers-form.component.css',
})
export class FlowersFormComponent {
  flowersForm!: FormGroup;

  @Input() set defaultValue(value: Flower) {
    this.intilizeForm(value);
  }

  @Input() isEdit = false;

  @Output()
  onSubmit: EventEmitter<Flower> = new EventEmitter<Flower>();

  constructor(private formBuilder: FormBuilder) {
    this.intilizeForm();
  }

  intilizeForm(defaultValue?: Flower) {
    const { name, color, imageUrl, price } = defaultValue || {
      name: '',
      color: '',
      imageUrl: '',
      price: 0,
    };

    this.flowersForm = this.formBuilder.group({
      name: [name, Validators.required],
      color: [color, Validators.required],
      imageUrl: [imageUrl, Validators.required],
      price: [price, [Validators.required, Validators.min(1)]],
    });
  }

  submit() {
    if (this.flowersForm.valid) {
      const { name, color, imageUrl, price } = this.flowersForm.value;

      this.onSubmit.emit({ name, color, imageUrl, price });
    }
  }
}
