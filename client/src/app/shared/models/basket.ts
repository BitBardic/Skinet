import { v4 as uuidv4 } from 'uuid';
export interface IBasket {
  id: string;
  items: IBasketItem[];
  clientSecret?: string;
  paymentIntentId?: string;
  deliveryMethodId?: number;
  shippingPrice?: number;
  // getBasketQuantity: () => number;
}

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export class Basket implements IBasket {
  id = uuidv4();
  items: IBasketItem[] = [];
//   getBasketQuantity() {
//     let quantity = 0;
//     for (const item of this.items) {
//       quantity += item.quantity;
//     }
//     return quantity;
//   }
}

export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
