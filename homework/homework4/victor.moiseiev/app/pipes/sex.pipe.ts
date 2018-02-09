import { Pipe, PipeTransform } from "@angular/core";
import { Sex } from "../models/sex.enum";

@Pipe({
  name: "sex"
})
export class SexPipe implements PipeTransform {

  public transform(value: any): string {
    if (value === 0 || value === 1) {
      return Sex[value];
    }

    throw new Error("The pipe Sex supports only 1 or 0 values.");
  }

}
