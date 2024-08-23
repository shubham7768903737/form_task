import { Component } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrl: './form-a.component.css'
})
export class FormAComponent {
  selectVal : string = '';
  Onclick(param : any){
   this.selectVal = param.target.value
  }
}
