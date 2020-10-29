/* IONIC */
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
/* MODELS */
import { TasksQuestion } from 'src/app/models/tasks-question/task';


@Component({
  selector: 'app-tasks-questions',
  templateUrl: './tasks-questions.page.html',
  styleUrls: ['./tasks-questions.page.scss'],
})
export class TasksQuestionsPage implements OnInit {

  public tasksQuestions: TasksQuestion[] = new Array();
  public showTitleHeader = false;
  private loader: HTMLIonLoadingElement;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
  ) { }

  async ngOnInit() {
    this.loader = await this.loadingCtrl.create({ message: 'Loading...' });
    await this.loader.present();
    const questions = [
      {
        ID: 1,
        Description: 'what is a task?',
        IDFather: 0
      },
      {
        ID: 2,
        Description: 'How can I add a task?',
        IDFather: 0
      },
      {
        ID: 3,
        Description: 'What is the maximum date to add a task?',
        IDFather: 0
      },
      {
        ID: 4,
        Description: 'Is it possible to delete a task?',
        IDFather: 0
      },
      {
        ID: 5,
        Description: 'Can I create a task without a date?',
        IDFather: 0
      },
      {
        ID: 6,
        Description: 'Is there a maximum of tasks created?',
        IDFather: 0
      },
      {
        ID: 6,
        Description: 'Can I create a task with the same description?',
        IDFather: 0
      },
      {
        ID: 7,
        Description: 'Is it possible to modify the description once the task is created?',
        IDFather: 0
      }
    ];

    questions.map(question => this.tasksQuestions.push(question));
    await this.loader.dismiss();
  }

  scrolling(e: any) {
    this.showTitleHeader = (e.detail.scrollTop > 16);
  }

  public seeModule($taskQuestion: TasksQuestion){
    this.navCtrl.navigateForward(['/tasks-questions-answer', {
      taskQuestion: JSON.stringify($taskQuestion)
    }]);
  }

  ionViewWillLeave() {
    if (this.loader){
      this.loader.dismiss();
    }
  }


}
