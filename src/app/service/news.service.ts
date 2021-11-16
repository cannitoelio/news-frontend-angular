import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotiziaDTO} from '../model/notizia/notiziaDTO';
import {Observable} from 'rxjs';
import {NotiziaForm} from '../model/notizia/notiziaForm';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://localhost:8080/api/v1/notizia';

  constructor(private httpClient: HttpClient) { }

  getNewsList(): Observable<NotiziaDTO[]> {
    return this.httpClient.get<NotiziaDTO[]>(`${this.baseUrl}/all`);
  }
  createNews(news: NotiziaForm): Observable<NotiziaForm> {
    return this.httpClient.post<NotiziaForm>(`${this.baseUrl}/create`, news);
  }
  getNewsById(id: number): Observable<NotiziaDTO> {
    return this.httpClient.get<NotiziaDTO>(`${this.baseUrl}/${id}`);
  }

  updateNews(id: number, news: NotiziaForm): Observable<NotiziaDTO> {
    return this.httpClient.put<NotiziaForm>(`${this.baseUrl}/${id}`, news);
  }

  deleteNews(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
