import { Photo } from './../model/photo.model';
import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public Photos: Photo[]=[];

  constructor() { }

  public async addNewToGallery(){
    //take photo
    const capturedPhoto = await Camera.getPhoto({
      resultType : CameraResultType.Uri,
      source : CameraSource.Camera,
      quality :100
    })

    this.Photos.unshift({
      filepath:"soon",
      webviewPath :capturedPhoto.webPath
    })
  }
}
