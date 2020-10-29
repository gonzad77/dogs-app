import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastUtil {

    public text = '';
    public class = 'd-none';
    private timeOuts = [];
    private ms = 3000;

  constructor() { }

  show(t: string, ms: number) {
    this.text = t;

    this.ms = ms;

    this.class = 'toast-container d-none';
    this.timeOuts.map((timeOut: any) => clearTimeout(timeOut));

    setTimeout(() => {
      if (!this.class.includes('animatedIn')) {
        this.class = this.class.replace('d-none', '');
        this.class += ' animatedIn fadeInDown';

        this.timeOuts.push(setTimeout(() => {
          this.hide();
        }, this.ms));
      }
    }, 50);
  }

  hide() {
    this.timeOuts.map((timeOut: any) => clearTimeout(timeOut));

    this.class = this.class.replace('animatedIn', '');
    this.class += ' animatedOut fadeOutUp';

    this.timeOuts.push(setTimeout(() => {
      this.class = this.class.replace('fadeInDown animatedOut fadeOutUp', '');
      this.class += 'd-none';
    }, 500));
  }
}
