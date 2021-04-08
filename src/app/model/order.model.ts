export class Order {
    constructor(
        public id?: number,
        public name?:string,
        public category?: string,
        public description?: string,
        public image_url?: string,
        public price?: number

    ) { }
}