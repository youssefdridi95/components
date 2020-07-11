import { Component, OnInit, ViewChild } from '@angular/core';
import { ConvertisseurFilsComponent } from '../convertisseur-fils/convertisseur-fils.component';

@Component({
  selector: 'app-convert-parent',
  templateUrl: './convert-parent.component.html',
  styleUrls: ['./convert-parent.component.scss']
})
export class ConvertParentComponent implements OnInit {
  inputmoney = 0;
  @ViewChild(ConvertisseurFilsComponent)
  private childcomp = new ConvertisseurFilsComponent();
  resultresponse :number = 0;
  loc=0;
  constructor() { }
  getresponse(val: number) {
    this.resultresponse = val;
  }

  ngOnInit() {
    // console.log(this.resultresponse)
  }

}
