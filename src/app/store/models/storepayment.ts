export class StorePayment{
    constructor(
        public  readonly payId:number,
        public  readonly vendorTxnId:string,
        public readonly amount: number,
        public readonly  status:string
    ){}

}