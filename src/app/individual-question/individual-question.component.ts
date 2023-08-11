import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-individual-question',
  templateUrl: './individual-question.component.html',
  styleUrls: ['./individual-question.component.css']
})
export class IndividualQuestionComponent implements OnInit {
toggleIndividualQuestion() {
throw new Error('Method not implemented.');
}
toggleQuestionList() {
throw new Error('Method not implemented.');
}
  question: any = null;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const questionId = Number(params.get('id'));
      this.loadQuestion(questionId);
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
}
