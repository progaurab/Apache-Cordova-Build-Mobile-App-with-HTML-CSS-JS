import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myProfileImage;

  constructor(
    private _camera: Camera,
    public _alertController: AlertController
  ) {}


  async selectImageSourse() {
      const cameraOptions: CameraOptions = {
        quality: 100,
        destinationType: this._camera.DestinationType.DATA_URL,
        encodingType: this._camera.EncodingType.JPEG,
        mediaType: this._camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this._camera.PictureSourceType.CAMERA
      };

      const galleryptions: CameraOptions = {
        quality: 100,
        destinationType: this._camera.DestinationType.DATA_URL,
        encodingType: this._camera.EncodingType.JPEG,
        mediaType: this._camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
      }

      const alert = await this._alertController.create({
        header: "Select Sourse",
        message: "Pick a sourse for your image",
        buttons: [
          {
            text: "Camera",
            handler: ()=> {
              this._camera.getPicture(cameraOptions)
              .then((imageData) => {
                this.myProfileImage = "data:image/jpeg;base64," + imageData;
              })
            }
          },
          {
            text: "Gallery",
            handler: ()=> {
              this._camera.getPicture(galleryptions)
              .then((imageData) => {
                this.myProfileImage = "data:image/jpeg;base64," + imageData;
              })
            }
          }
        ]
      });
      await alert.present();
  }
}
