import {Injectable} from "@angular/core";
import {Vendor} from "./vendor.model";

@Injectable()

export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(vendor: Vendor, quantity: number=1) {
        let line = this.lines.find(line => line.vendor.vendorId == vendor.vendorId);
        if(line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(vendor,quantity));
        }
        this.recalculate();
    }

    updateQuantity(vendor: Vendor, quantity: number) {
        let line = this.lines.find(line => line.vendor.vendorId == vendor.vendorId);
        if(line != undefined) {
            line.quantity = Number(quantity);
        }

        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.vendor.vendorId == id);
        this.lines.splice(index,1);
        this.recalculate();
    }

    clear() {
        this.lines=[];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity; 
            this.cartPrice += (l.quantity * l.vendor.price);
        })
    }

}

export class CartLine {
    constructor(public vendor: Vendor, public quantity: number) {}

    get lineTotal() {

        return this.quantity * this.vendor.price;

    }
}