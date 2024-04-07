import intance from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
type Action = {
  action: "category" | "product" | "productDetail";
  id?: string;
  categoryId?: string;
};
export const useQueryProduct = ({ action, id, categoryId}: Action) => {
  const { data } = useQuery({
    queryKey: ["products", id, categoryId],
    queryFn: async () => {
      switch (action) {
        case "category":
          return await intance.get(`/products?categoryId=${categoryId}`);
        case "productDetail":
          return await intance.get(`products/${id}`);
        case "product":
          return await intance.get("products");
        default:
          break;
      }
    },
  });
  return { data };
};
