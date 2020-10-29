import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksQuestionsPageRoutingModule } from './tasks-questions-routing.module';

import { TasksQuestionsPage } from './tasks-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksQuestionsPageRoutingModule
  ],
  declarations: [TasksQuestionsPage]
})
export class TasksQuestionsPageModule {}
