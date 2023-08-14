import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  questions: any[] = [];
  showAnswer: boolean[] = [];

  constructor(private questionsService: QuestionsService, private router: Router) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionsService.getQuestions().subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Fehler beim Laden der Fragen:', error);
      }
    );
  }
  

  toggleAnswer(index: number): void {
    this.showAnswer[index] = !this.showAnswer[index];
  }

  goToHomePage(): void {
    this.router.navigate(['/']); // Navigiere zur Startseite
  }
}
