import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
/* SERVICES */
import { DBService } from 'src/app/providers/db/db.service';
import { TasksLocalService } from './providers/tasks/tasks-local.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private tasksLocalService: TasksLocalService;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private db: DBService,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      try {
        this.statusBar.styleDefault();
        await this.db.openDatabase();
        this.tasksLocalService = new TasksLocalService(this.db.dbDog);
        const taskLocalTable = await this.db.existTable('tasks') as any;
        if (!taskLocalTable.cantidad) {
          this.tasksLocalService.create();
        }
        this.splashScreen.hide();
      } catch {
        const alert = await this.alertCtrl.create({message: 'Error opening tasks local database'});
        alert.present();
      }
    });
  }
}
