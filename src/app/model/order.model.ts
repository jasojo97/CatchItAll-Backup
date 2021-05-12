import {Injectable} from "@angular/core";
import {Cart}  from "./cart.model";

@Injectable()
export class Order {
    public order_id: number;
    public customer_id: number;
    public orderDate: Date;
    public status: string;
    public shimpmentDate: Date;
    public address: string;


    constructor(public cart: Cart) { }

    clear() {
        this.order_id=this.customer_id=null;

        this.orderDate=this.shimpmentDate=null;

        this.status=null;
        
        this.address=null;



    }
}