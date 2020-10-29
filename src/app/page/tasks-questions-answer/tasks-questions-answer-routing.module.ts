import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksQuestionsAnswerPage } from './tasks-questions-answer.page';

const routes: Routes = [
  {
    path: '',
    component: TasksQuestionsAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksQuestionsAnswerPageRoutingModule {}
