import {NgModule} from "@angular/core";
import {VendorRepository} from "./vendor.repository";
import {StaticDataSource} from "./static.datasource";


@NgModule({
    providers: [VendorRepository, StaticDataSource]
})

export class ModelModule { }