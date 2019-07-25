import { Pipe, PipeTransform } from '@angular/core';

/** This pipe will receive a string and truncate it whilst adding a trail at the end,
 * both the number of characters and trail can be customized
 */
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, counter: number = 20, trail: string = '...'): string {
    return value.length > counter ? value.substring(0, counter) + trail : value;
  }
}
