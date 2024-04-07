// useMutationUpdateCartItem.ts
import intance from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";


type UpdateCartItemParams = {
    userId: string;
  productId: string;
  quantity: number;
};

export const useMutationUpdateCartItem = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async ({userId, productId, quantity }: UpdateCartItemParams) => {
      const response = await intance.put(`carts?userId=${userId}&productId=${productId}`, {
        quantity,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });

  return { mutate };
};
