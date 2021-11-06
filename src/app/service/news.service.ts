import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotiziaDTO} from '../model/notizia/notiziaDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://localhost:8080/api/v1/notizia/all';

  constructor(private httpClient: HttpClient) { }

  getNewsList(): Observable<NotiziaDTO[]> {
    return this.httpClient.get<NotiziaDTO[]>('http://localhost:8080/api/v1/notizia/all');
  }
}
