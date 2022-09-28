export class MeldInputData
{
    bilirubin:number = 0;
    creatinine:number = 0;
    inr:number = 0;

    constructor(bilirubin:number, creatinine:number, inr:number)
    {
        this.bilirubin = bilirubin;
        this.creatinine = creatinine;
        this.inr = inr;
    }
}