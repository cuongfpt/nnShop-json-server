export interface IProduct {
  id?: number | string;
  name: string;
  description: string;
  price: number;
  mainImage: string;
  additionalImages: [
    {
      image1: string;
    },
    {
      image2: string;
    },
    {
      image3: string;
    },
    {
      image4: string;
    }
  ];
  discount: number;
  quantity: number;
  categoryId: string;
}
