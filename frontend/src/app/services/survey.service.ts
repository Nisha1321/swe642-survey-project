// Service that handles all HTTP calls to the Spring Boot REST API.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey.model';

@Injectable({ providedIn: 'root' })
export class SurveyService {
    private apiUrl = 'http://localhost:8080/api/surveys';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.apiUrl);
    }

    getById(id: number): Observable<Survey> {
        return this.http.get<Survey>(`${this.apiUrl}/${id}`);
    }

    create(survey: Survey): Observable<Survey> {
        return this.http.post<Survey>(this.apiUrl, survey);
    }

    update(id: number, survey: Survey): Observable<Survey> {
        return this.http.put<Survey>(`${this.apiUrl}/${id}`, survey);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
