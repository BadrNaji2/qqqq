import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  showQuestionList: boolean = false;
  showIndividualQuestion: boolean = false;
  selectedQuestion: any;
  questions: any;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {}

  toggleQuestionList(): void {
    this.showQuestionList = true;
    this.showIndividualQuestion = false;
  }

  toggleIndividualQuestion(): void {
    this.showIndividualQuestion = true;
    this.showQuestionList = false;
  }

  showNextQuestion(): void {
    const currentIndex = this.questions.findIndex((q: { id: any; }) => q.id === this.selectedQuestion.id);
    if (currentIndex < this.questions.length - 1) {
      this.selectedQuestion = this.questions[currentIndex + 1];
    }
  }

  showPreviousQuestion(): void {
    const currentIndex = this.questions.findIndex((q: { id: any; }) => q.id === this.selectedQuestion.id);
    if (currentIndex > 0) {
      this.selectedQuestion = this.questions[currentIndex - 1];
    }
  }
}
