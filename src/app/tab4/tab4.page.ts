import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoServiceService } from '../foto-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  urlImageStorage: string[] = [];
  source
  constructor(private route :ActivatedRoute,private afStorage: AngularFireStorage,
    public fotoService: FotoServiceService,) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.source =params.get('iFoto');
  }

  

}
