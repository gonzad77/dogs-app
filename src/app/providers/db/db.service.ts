import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  public dbDog: SQLiteObject = null;

  constructor(private sqlite: SQLite) { }

  async openDatabase() {
    return this.sqlite.create({
      name: 'data.dbDog',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.dbDog = db;
      return Promise.resolve(this.dbDog);
    });
  }

  closeDatabase() {
    return this.dbDog.close();
  }

  async existTable(table: string) {
    const sql = 'SELECT count(*) AS cantidad FROM sqlite_master WHERE type = "table" AND name = ?';

    return this.dbDog.executeSql(sql, [table])
    .then(response => {
      return Promise.resolve(response.rows.item(0));
    });
  }

}
