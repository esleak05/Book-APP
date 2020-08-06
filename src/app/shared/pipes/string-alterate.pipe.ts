import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringAlterate'
})
export class StringAlteratePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(' ', '_');
  }

}
