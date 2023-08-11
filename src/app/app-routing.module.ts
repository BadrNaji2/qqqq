import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CheckComponent } from './check/check.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { IndividualQuestionComponent } from './individual-question/individual-question.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'learn', component: LearnComponent },
  { path: 'check', component: CheckComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'learn/list', component: QuestionListComponent },
  { path: 'learn/individual/:id', component: IndividualQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
