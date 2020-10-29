import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./page/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./page/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'tasks-questions',
    loadChildren: () => import('./page/tasks-questions/tasks-questions.module').then( m => m.TasksQuestionsPageModule)
  },
  {
    path: 'tasks-questions-answer',
    loadChildren: () => import('./page/tasks-questions-answer/tasks-questions-answer.module').then( m => m.TasksQuestionsAnswerPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
