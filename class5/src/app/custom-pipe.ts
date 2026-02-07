import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    console.log(args) // searchList
    // search key 
    return `Value: ${value} Args: ${args}`;

    // Array.filter()
    // array.forEach(element => {
    //     element.include()
    // });
  }


  //  {{value  |  pipeName:Args}}
}


// ng generate pipe pipeName
// ng g p pipeName