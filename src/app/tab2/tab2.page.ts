import { Component } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { AngularFireStorage } from '@angular/fire/storage';

export interface fileFoto {
  name: string; //filepath
  path: string; //webviewPath
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  urlImageStorage: string[] = [];
  constructor(public fotoService: FotoServiceService,private afStorage: AngularFireStorage) {}

  async ngOnInit(){
    await this.fotoService.loadFoto();
  }
  TambahFoto(){
    this.fotoService.tambahFoto();
  }

  uploadfoto(data){
    this.urlImageStorage = [];
    const imgFilePath = `imgStorage/${data.filePath}`;
    this.afStorage
        .upload(imgFilePath, data.dataImage)
        .then(() => {
          this.afStorage.storage
            .ref()
            .child(imgFilePath)
            .getDownloadURL()
            .then((url) => {
              this.urlImageStorage.unshift(url);
              alert("Sukses upload foto");
            });
        });
  }

  uploadFoto() {
    this.urlImageStorage = [];
    for (var index in this.fotoService.dataFoto) {
      const imgFilePath = `imgStorage/${this.fotoService.dataFoto[index].filePath}`;
      this.afStorage
        .upload(imgFilePath, this.fotoService.dataFoto[index].dataImage)
        .then(() => {
          this.afStorage.storage
            .ref()
            .child(imgFilePath)
            .getDownloadURL()
            .then((url) => {
              this.urlImageStorage.unshift(url);
            });
        });
    }
  }

  

}
