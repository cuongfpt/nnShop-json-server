import intance from "@/configs/axios";
import { ICart } from "@/interfaces/ICart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutationUpdateCartItem = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (cart: ICart) => {
      const data = await intance.get(`carts?userId=${cart.userId}`);
      const cartID = data.data?.[0].id;
      console.log("🚀 ~ mutationFn: ~ cartID:", cartID);
      return await intance.put(`carts/${cartID}`, cart);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });
  return { mutate };
};
