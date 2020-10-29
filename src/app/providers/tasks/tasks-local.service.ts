import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

import { Task } from 'src/app/models/task/task';

@Injectable({
  providedIn: 'root'
})
export class TasksLocalService {

  private db: SQLiteObject = null;

  constructor(db: SQLiteObject) { this.db = db; }

  async select(where: string) {
    const sql = 'SELECT * FROM tasks ' + where ;
    return this.db.executeSql(sql, [])
    .then(response => {
      const notificaciones = [];
      for (let index = 0; index < response.rows.length; index++) {
        notificaciones.push(response.rows.item(index));
      }
      return Promise.resolve(notificaciones);
    });
  }

  insert(task: Task) {
    const sql = `INSERT INTO tasks (
      Description,
      Date
    ) VALUES (?, ?)`;
    return this.db.executeSql(sql, [
      task.Description,
      task.Date
    ]);
  }

  async delete(where: string) {
    const sql = 'DELETE FROM tasks ' + where;
    return this.db.executeSql(sql, [])
    .then(() => {
      return Promise.resolve();
    });
  }

  update(task: Task) {
    const sql = `UPDATE tasks SET
      Description=?,
      Date=?
    WHERE IDTask=?`;
    return this.db.executeSql(sql, [
      task.Description,
      task.Date
    ]);
  }

  create() {
    const sql = `CREATE TABLE IF NOT EXISTS tasks(
      IDTask INTEGER PRIMARY KEY AUTOINCREMENT,
      Description TEXT,
      Date TEXT
    )`;
    return this.db.executeSql(sql, []);
  }

  drop() {
    const sql = 'DROP TABLE IF EXISTS tasks';
    return this.db.executeSql(sql, []);
  }
}
