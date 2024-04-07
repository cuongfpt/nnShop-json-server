import intance from "@/configs/axios";
import { IProduct } from "@/interfaces/IProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Action = {
  action: "Add" | "Edit" | "Delete";
};
export const useMutationProduct = ({ action }: Action) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm<IProduct>();
  const { mutate } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "Add":
          return await intance.post("products", product);
        case "Edit":
          return await intance.put(`products/${product.id}`, product);
        case "Delete":
          return confirm("Bạn muốn xóa không") && await intance.delete(`products/${product.id}`);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      navigate("/admin/products");
    },
  });

  return { mutate, form };
};
