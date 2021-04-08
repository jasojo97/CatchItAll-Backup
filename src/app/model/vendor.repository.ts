import {Injectable} from "@angular/core";
import {Vendor} from "./vendor.model";
import {StaticDataSource} from "./static.datasource";


@Injectable()

export class VendorRepository {
    private vendors: Vendor[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getVendors().subscribe(data => {
            this.vendors = data;
            this.categories = data.map(p => p.vendorCategory).filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getVendors(category: string = null): Vendor[] {
        return this.vendors.filter(p => category == null || category == p.vendorCategory);

    }

    getVendor (id: number): Vendor {
        return this.vendors.find(p => p.vendorId == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}