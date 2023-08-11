import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private baseUrl = 'assets/question.json'; // Passe den Pfad zur JSON-Datei an

  constructor(private http: HttpClient) {}

  
  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getQuestionById(id: number): Observable<any> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(questions => questions.find(question => question.id === id))
    );
  }
}
