import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FlowersFormComponent } from './components/flowers-form/flowers-form.component';
import { NavComponent } from './components/nav/nav.component';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlowerCardComponent } from './components/flower-card/flower-card.component';
import { FlowersApiService } from './services/flowers-api.service';

@NgModule({
  declarations: [NavComponent, FlowersFormComponent, FlowerCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [NavComponent, FlowersFormComponent, FlowerCardComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    provideHttpClient(withInterceptorsFromDi()),
    FlowersApiService,
  ],
})
export class SharedModule {}
