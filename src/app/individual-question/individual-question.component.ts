import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-individual-question',
  templateUrl: './individual-question.component.html',
  styleUrls: ['./individual-question.component.css']
})
export class IndividualQuestionComponent implements OnInit {
  showAnswer: boolean = false; // Start with answer hidden
  question: any = null;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loadQuestion(id);
    });
  }
  
  loadQuestion(id: number): void {
    this.questionsService.getQuestionById(id).subscribe(
      (question) => {
        this.question = question;
      },
      (error) => {
        console.error('Fehler beim Laden der Frage:', error);
      }
    );
  }
  
  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }
}
