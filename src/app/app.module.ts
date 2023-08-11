import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CheckComponent } from './check/check.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { IndividualQuestionComponent } from './individual-question/individual-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    CheckComponent,
    ExamComponent,
    QuestionDetailsComponent,
    QuestionListComponent,
    IndividualQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
