import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-convertisseur-fils',
  templateUrl: './convertisseur-fils.component.html',
  styleUrls: ['./convertisseur-fils.component.scss']
})
export class ConvertisseurFilsComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Input() valuetraitement: number;
  resultattraitement = 0;
  resultattrigger = 0;
  @Output() calculer = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    
    this.resultattraitement = this.valuetraitement * 3;
    this.calculer.emit(this.resultattraitement);
  }

  public trigger() {
    this.resultattrigger = this.valuetraitement * 5;
    this.calculer.emit(this.resultattrigger);
  }

}
