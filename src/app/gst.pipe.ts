import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gst',
  standalone: true
})
export class GstPipe implements PipeTransform {

  transform(value: any, gst:any): any {

    var gstAmount=value*gst/100;

    return value+gstAmount;
  }

}
