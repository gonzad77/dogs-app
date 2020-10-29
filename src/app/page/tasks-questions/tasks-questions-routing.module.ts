import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksQuestionsPage } from './tasks-questions.page';

const routes: Routes = [
  {
    path: '',
    component: TasksQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksQuestionsPageRoutingModule {}
