export interface ICart {
  id?: string;
  userId: string;
  items: [{ productId: string; quantity: number; name: string , mainImage : string; price: number}];
}
