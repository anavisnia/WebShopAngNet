import { Shop } from "./Shop";

export interface Product {
    id?: number,
    name: string,
    price: number,
    quantity: number,
    type: string,
    shop?: Shop,
    shopId?: number
}