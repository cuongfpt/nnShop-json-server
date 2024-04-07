/* eslint-disable no-case-declarations */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import intance from "@/configs/axios";
import { useForm } from "react-hook-form";

import { ICart } from "@/interfaces/ICart";

type Action = {
  action: "AddCart" | "DeleteCart";
};

export const useMutationCart = ({ action }: Action) => {
  const queryClient = useQueryClient();
  const form = useForm<ICart>();
  const { mutate } = useMutation({
    mutationFn: async (cart: ICart ) => {
      switch (action) {
        case "AddCart":
          const cartById = await intance.get(`carts?userId=${cart.userId}`);
          const cartItems = cartById.data?.[0].items;
          console.log("🚀 ~ mutationFn: ~ cartById:", cartById);
          const productId = cart?.items?.[0].productId;
          const cartData = cartById.data?.[0];


          for (const item of cartItems) {
            if (item.productId === productId) {
              item.quantity += cart?.items?.[0].quantity;
              return await intance.put(`carts/${cartData.id}`, cartData);
            }
          }

          cartData.items.push(cart?.items?.[0]);
          return await intance.put(`carts/${cartData.id}`, cartData);
          case "DeleteCart":
        
          return await intance.delete(`carts?userId=${cart.userId}`);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });

  return { mutate, form };
};
