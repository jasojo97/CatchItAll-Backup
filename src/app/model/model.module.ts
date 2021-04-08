import {NgModule} from "@angular/core";
import {VendorRepository} from "./vendor.repository";
import {StaticDataSource} from "./static.datasource";
import {Cart} from "./cart.model";


@NgModule({
    providers: [VendorRepository, StaticDataSource, Cart]
})

export class ModelModule { }