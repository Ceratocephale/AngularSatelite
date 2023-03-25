import { Component, OnInit } from '@angular/core';
import SourceVector from 'ol/source/Vector';
import LayerVector from 'ol/layer/Vector'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { style } from '@angular/animations';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import MapboxVector from 'ol/layer/MapboxVector'
import { MapService } from 'src/app/services/mapService/map.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  constructor(private _mapService : MapService) {}
  
  map! : Map;
  marker! :any;
  

  
  ngOnInit(): void {
   
    this.map = this._mapService.getMap();
  

  }

}
