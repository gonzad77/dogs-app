import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController, IonSlides } from '@ionic/angular';

import { GalleryService } from 'src/app/providers/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  @ViewChild(IonSlides, { static: true }) ionSlides: IonSlides;

  public breeds = [];
  public breedImages = [];
  public form: FormGroup = this.defaultForm();
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  private loader: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loaderCtrl: LoadingController,
    private alertCtrl: AlertController,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.getBreeds();
  }

  submit(value: any) {
    this.getImages(value);
  }

  getBreeds() {
    this.galleryService.getBreeds()
    .then( (breeds: any) => {
      for (const key in breeds.message) {
        if (key) {
          this.breeds.push(key);
        }
      }
    })
    .catch(async () => {
      const alert = await this.alertCtrl.create({
        header: 'Unexpected error',
        message: 'Try again later...',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          handler: () => this.navCtrl.pop()
        }]
      });
      await alert.present();
    });
  }

  async getImages(value: any) {
    this.loader = await this.loaderCtrl.create({ message: 'Loading...'});
    await this.loader.present();
    // Get Images
    this.galleryService.getBreedImages(value.Breed)
    .then( (images: any) => {
      if (images.status === 'success') {
        this.breedImages = images.message;
        this.ionSlides.slideTo(2);
      }
      this.loader.dismiss();
    }).catch(async () => {
      const alert = await this.alertCtrl.create({
        header: 'Unexpected error',
        message: 'Try again later...',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          handler: () => this.navCtrl.pop()
        }]
      });
      await alert.present();
      this.loader.dismiss();
    });
  }

  ionViewWillLeave() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }

  private defaultForm(): FormGroup {
    return this.formBuilder.group({
        Breed: ['', [ Validators.required ], []],
      },
    );
  }

}
