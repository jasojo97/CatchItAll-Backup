export class Service {
    constructor(
        public serviceId?: number,
        public serviceName?:string,
        public serviceCategory?: string,
        public serviceDescription?: string,
        public image_url?: string,
        public price?: number,
        public serviceVendorID?: number

    ) { }
}