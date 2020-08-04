import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  transform(value, ...args): any {
    const rides = [];
    const vehicleType = args[0];
    const propertyName = args[1];
    if (value && vehicleType === '') {
      return value;
    }

    for (const ride of value) {
      if (ride[propertyName] === vehicleType) {
        rides.push(ride);
      }
    }
    return rides;
  }
}
