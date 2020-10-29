import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksQuestionsAnswerPageRoutingModule } from './tasks-questions-answer-routing.module';

import { TasksQuestionsAnswerPage } from './tasks-questions-answer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksQuestionsAnswerPageRoutingModule
  ],
  declarations: [TasksQuestionsAnswerPage]
})
export class TasksQuestionsAnswerPageModule {}
