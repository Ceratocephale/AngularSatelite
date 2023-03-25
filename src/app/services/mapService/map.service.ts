import { Component, Injectable, OnInit } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getMap() : Map{

  const center = fromLonLat([5.5697, 50.6330]);

  const iconFeature = new Feature({
    geometry : new Point(fromLonLat([5.5697, 50.6330]))
  })
  const secondIconFeature = new Feature({
    geometry : new Point(fromLonLat([-41.067090598054335, -42.50224312839546]))
  })
  const thirdIconFeature = new Feature({
    geometry : new Point(fromLonLat([]))
  })

  const secondMarkerLayer = new LayerVector({
    source : new SourceVector({
      features : [secondIconFeature, iconFeature]
    }),
    style : new Style({
      image : new Icon({
        anchor : [0.5, 0.5],
        src :  '../assets/imageedit_32_3634889969-removebg-preview.png',
        scale : 0.1
      })
    })
  })

  return new Map({
    view : new View({
      center : center,
      zoom : 0
    }),
    layers : [
       new MapboxVector({
         styleUrl : 'mapbox://styles/absoluman/clfi7gji7000z01mll7d784p0',
         accessToken : 'pk.eyJ1IjoiYWJzb2x1bWFuIiwiYSI6ImNsZmk3YmJtYjEwcHQzcW5wYWxydmozamwifQ.PdA425qC_E-6MMd21Z06vw'
      
       }),
       secondMarkerLayer
    //   new TileLayer({
    //  source : new OSM()
    //   })
    ],
    target :  "map"
  })

}


}
