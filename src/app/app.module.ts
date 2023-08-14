import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import hinzufügen
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CheckComponent } from './check/check.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { IndividualQuestionComponent } from './individual-question/individual-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    CheckComponent,
    ExamComponent,
    QuestionListComponent,
    IndividualQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Hier hinzufügen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
