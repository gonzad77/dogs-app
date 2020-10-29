import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DefaultTasksQuestion, TasksQuestion } from 'src/app/models/tasks-question/task';

@Component({
  selector: 'app-tasks-questions-answer',
  templateUrl: './tasks-questions-answer.page.html',
  styleUrls: ['./tasks-questions-answer.page.scss'],
})
export class TasksQuestionsAnswerPage implements OnInit {

  private loader;
  public  tasksQuestions: TasksQuestion[] = new Array();
  public  taskQuestionFather: TasksQuestion = DefaultTasksQuestion();

  constructor(
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) {
    this.route.params.subscribe(data => {
      Object.assign(this.taskQuestionFather, JSON.parse(data.taskQuestion));
    });
   }

  async ngOnInit() {
    this.loader = await this.loadingCtrl.create({ message: 'Cargando' });
    this.loader.present();
    const answers = [
      {
        ID: 11,
        Description: 'What your heart says',
        IDFather: 1
      },
      {
        ID: 21,
        Description: 'I don\'t know',
        IDFather: 2
      },
      {
        ID: 31,
        Description: '2099',
        IDFather: 3
      },
      {
        ID: 41,
        Description: 'NO!',
        IDFather: 4
      },
      {
        ID: 42,
        Description: 'Date is required',
        IDFather: 4
      },
      {
        ID: 51,
        Description: 'NO! NO! NO!',
        IDFather: 5
      },
      {
        ID: 61,
        Description: 'Yes, why not?',
        IDFather: 6
      },
      {
        ID: 71,
        Description: 'NO',
        IDFather: 7
      },
      {
        ID: 72,
        Description: 'You have to delete and create new one',
        IDFather: 7
      }
    ];
    answers.map((answer: TasksQuestion) => {
      if (answer.IDFather === this.taskQuestionFather.ID) {
        this.tasksQuestions.push(answer);
      }
    });
    await this.loader.dismiss();
  }

  ionViewWillLeave() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }

}
