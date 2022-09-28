import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MeldInputData } from 'src/app/models/meldInput.model';

@Component({
  selector: 'meld-input',
  templateUrl: './meld-input.component.html',
  styleUrls: ['./meld-input.component.css']
})
export class MeldInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bilirubin:number = 0;
    creatinine:number = 0;
    inr:number = 0;

    @Output()
    inputAvailable = new EventEmitter<MeldInputData>();

    @Output()
    clearAvailable = new EventEmitter<null>();

    onBilirubinEdit(inputBilirubin:string)
    {
        this.bilirubin = parseInt(inputBilirubin);
    }

    onCreatinineEdit(inputCreatinine:string)
    {
        this.creatinine = parseInt(inputCreatinine);
    }

    onInrEdit(inputInr:string)
    {
        this.inr = parseInt(inputInr);
    }

    calculateMELD()
    {
        const data = new MeldInputData(this.bilirubin, this.creatinine, this.inr);
        this.inputAvailable.emit(data);
    }

    clearData()
    {
        this.bilirubin = 0;
        this.creatinine = 0;
        this.inr = 0;
        this.clearAvailable.emit();
    }

}
