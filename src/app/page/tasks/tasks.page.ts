import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

import { DefaultTask, Task } from 'src/app/models/task/task';

import { DBService } from 'src/app/providers/db/db.service';
import { TasksLocalService } from 'src/app/providers/tasks/tasks-local.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  public form: FormGroup = this.defaultForm();
  public tasks = [];

  private loader: any;
  private tasksLocalService: TasksLocalService;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private db: DBService
  ) {
    this.tasksLocalService = new TasksLocalService(this.db.dbDog);
  }

  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    this.loader = await this.loadingCtrl.create({ message: 'Cargando' });
    await this.loader.present();
    try {
      this.tasks = await this.tasksLocalService.select('ORDER BY Description ASC');
      this.loader.dismiss();
    } catch {
      this.loader.dismiss();
    }

  }

  addTask(value: any) {
    const task = DefaultTask();
    task.Description = value.Description;
    task.Date = value.Date;
    this.tasksLocalService.insert(task)
    .then(async () => {
      this.tasks = await this.tasksLocalService.select('ORDER BY Description ASC');
    });
  }

  deleteTask(task: Task) {
    this.tasksLocalService.delete(`WHERE IDTask = ${task.IDTask}`)
    .then( async () => {
      const data = await this.tasksLocalService.select('ORDER BY Description ASC');

      const el = document.querySelector(`.task-${task.IDTask}`);
      el.classList.add('animatedOut', 'fadeOutRight');

      setTimeout(() => {
        this.tasks.map((n, i) => {
          if (n.IDTask === task.IDTask) {
            this.tasks.splice(i, 1);
          }
        });
        this.tasks = data;
      }, 500);

    });
  }

  openPage(page: string) {
    this.navCtrl.navigateForward(page);
  }

  ionViewWillLeave() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }

  private defaultForm(): FormGroup {
    return this.formBuilder.group({
        Description: ['', [ Validators.required ], []],
        Date: ['', [ Validators.required, this.validateDate ], []],
      },
    );
  }

  private validateDate(control: AbstractControl) {
    const date = control.value;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    const isValid = dateRegex.test(date);

    if (!isValid){
      return { validateDate: true }; // True means the control have errors
    } else {
      return null; // null means the control is ok
    }
  }

}
