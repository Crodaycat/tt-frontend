import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Flower } from '../../shared/model/flower';
import { FlowersApiService } from '../../shared/services/flowers-api.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-flowers-edit-page',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './flowers-edit-page.component.html',
  styleUrl: './flowers-edit-page.component.css',
})
export class FlowersEditPageComponent {
  isLoading = true;
  flower?: Flower;
  isEditing = false;

  constructor(
    private flowersApi: FlowersApiService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.findFlower();
  }

  findFlower() {
    this.isLoading = true;
    const flowerId: number = Number(
      this.route.snapshot.paramMap.get('flowerId')
    );

    this.flowersApi
      .findById(flowerId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (flower) => {
          this.flower = flower;
        },
        error: () => {
          this.flower = undefined;
          this.snackBar.open(
            'Error al cargar información de la flor',
            'Cerrar',
            {
              panelClass: 'snack-warning',
            }
          );
        },
      });
  }

  onSubmit(flower: Flower) {
    this.isEditing = true;
    flower.id = this.flower?.id;

    this.flowersApi
      .update(flower)
      .pipe(finalize(() => (this.isEditing = false)))
      .subscribe({
        next: () => {
          this.snackBar.open('Flor actualizada con éxito', 'Cerrar', {
            panelClass: 'snack-success',
          });
        },
        error: () => {
          this.snackBar.open(
            'Error, la flor no pudo ser actualizada.',
            'Cerrar',
            {
              panelClass: 'snack-warning',
            }
          );
        },
      });
  }
}
