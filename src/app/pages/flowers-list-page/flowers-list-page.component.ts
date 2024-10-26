import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { Flower } from '../../shared/model/flower';
import { FlowersApiService } from '../../shared/services/flowers-api.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-flowers-list-page',
  standalone: true,
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './flowers-list-page.component.html',
  styleUrl: './flowers-list-page.component.css',
})
export class FlowersListPageComponent {
  isLoading = true;
  flowers: Flower[] = [];

  constructor(
    private flowersApi: FlowersApiService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loadFlowers();
  }

  loadFlowers() {
    this.isLoading = true;

    this.flowersApi
      .findAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (flowers) => {
          this.flowers = flowers;
        },
        error: () => {
          this.flowers = [];
          this.snackBar.open('Error al consultar las flores', 'Cerrar', {
            panelClass: 'snack-warning',
          });
        },
      });
  }

  editFlower(flower: Flower) {
    this.router.navigate(['flowers', flower.id, 'edit']);
  }

  deleteFlower(flower: Flower) {
    this.isLoading = true;

    this.flowersApi
      .delete(flower.id!)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.loadFlowers();

          this.snackBar.open(
            `Flor: ${flower.name} con id: ${flower.id} eliminada con éxito`,
            'Cerrar',
            {
              panelClass: 'snack-success',
            }
          );
        },
        error: () => {
          this.snackBar.open('Error al eliminar la flor', 'Cerrar', {
            panelClass: 'snack-warning',
          });
        },
      });
  }
}
