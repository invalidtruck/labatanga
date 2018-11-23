import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

@Injectable()
export class UbicacionSVC {
  city: string
  coords: Coordinates
  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {

  }
  iniciar_localizacion() {
    let options = {
      timeout: 5 * (1000*60),
      enableHighAccuracy: true
    }
    let watch = this.geolocation.watchPosition(options);
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      if (data.coords == null) {
      
        return;
      }
      this.coords = data.coords
      this.nativeGeocoder.reverseGeocode(this.coords.latitude, this.coords.longitude)

        .then(
          (result: NativeGeocoderReverseResult) =>
            console.log(JSON.stringify(result))
        )
        .catch((error: any) => console.log("error in ubicacion provider " + error));

    });
  }

}
