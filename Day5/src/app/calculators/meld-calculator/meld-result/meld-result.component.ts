import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'meld-result',
  templateUrl: './meld-result.component.html',
  styleUrls: ['./meld-result.component.css']
})
export class MeldResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
    meld:number = 0;


}
