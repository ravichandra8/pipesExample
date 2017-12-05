import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CustompipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'custompipe',
})
export class CustompipePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(value: number, exponent: string): number {
      let exp = parseFloat(exponent);
      return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}
