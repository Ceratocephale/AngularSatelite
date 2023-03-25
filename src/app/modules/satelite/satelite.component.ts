import { Component, OnInit } from '@angular/core';
import { SateliteService } from 'src/app/services/sateliteService/satelite.service';

@Component({
  selector: 'app-satelite',
  templateUrl: './satelite.component.html',
  styleUrls: ['./satelite.component.scss']
})
export class SateliteComponent implements OnInit {
  constructor(private _sateliteService : SateliteService) {

  }
  ngOnInit(): void {
   // this._sateliteService.getData().subscribe
  }
}
