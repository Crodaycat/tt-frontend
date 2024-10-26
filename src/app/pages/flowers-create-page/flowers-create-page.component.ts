import { Component } from '@angular/core';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { Flower } from '../../shared/model/flower';
import { FlowersApiService } from '../../shared/services/flowers-api.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-flowers-create-page',
  standalone: true,
  imports: [SharedModule, MatSnackBarModule],
  templateUrl: './flowers-create-page.component.html',
  styleUrl: './flowers-create-page.component.css',
})
export class FlowersCreatePageComponent {
  isLoading = false;

  constructor(
    private flowersApi: FlowersApiService,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(flower: Flower) {
    this.isLoading = true;

    this.flowersApi
      .create(flower)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.snackBar.open('Flor creada con éxito', 'Cerrar', {
            panelClass: 'snack-success',
          });
        },
        error: () => {
          this.snackBar.open(
            'Error, la flor no pudo ser registrada.',
            'Cerrar',
            {
              panelClass: 'snack-warning',
            }
          );
        },
      });
  }
}
