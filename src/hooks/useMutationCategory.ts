import intance from "@/configs/axios";
import { ICategory } from "@/interfaces/ICategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Action = {
  action: "Add" | "Edit" | "Delete";
};

export const useMutationCategory = ({ action }: Action) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm();
  const { mutate } = useMutation({
    mutationFn: async (category : ICategory) => {
      switch (action) {
        case "Add":
          return await intance.post("/categories", category);
        case "Edit":
          return await intance.put(`/categories/${category.id}`, category);
        case "Delete":
          return await intance.delete(`/categories/${category.id}`);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      navigate("/admin/categories");
    },
  });

  return { mutate, form };
};
