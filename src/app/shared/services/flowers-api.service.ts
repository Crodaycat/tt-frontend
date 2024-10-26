import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Flower } from '../model/flower';

@Injectable({
  providedIn: 'root',
})
export class FlowersApiService {
  constructor(private client: HttpClient) {}

  findAll(): Observable<Flower[]> {
    return this.client.get<Flower[]>(`${environment.apiUrl}/flowers`);
  }

  findById(id: number): Observable<Flower> {
    return this.client.get<Flower>(`${environment.apiUrl}/flowers/${id}`);
  }

  create(flower: Flower): Observable<Flower> {
    return this.client.post<Flower>(`${environment.apiUrl}/flowers`, flower);
  }

  update(flower: Flower): Observable<Flower> {
    return this.client.put<Flower>(
      `${environment.apiUrl}/flowers/${flower.id}`,
      flower
    );
  }

  delete(id: number) {
    return this.client.delete<Flower>(`${environment.apiUrl}/flowers/${id}`);
  }
}
