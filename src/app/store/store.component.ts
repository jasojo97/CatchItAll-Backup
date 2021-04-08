import {Component} from "@angular/core";
import {Vendor} from "../model/vendor.model";
import {VendorRepository} from "../model/vendor.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = null;


    constructor(private repository: VendorRepository) { }

    get vendors(): Vendor[] {
        return this.repository.getVendors();
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
}