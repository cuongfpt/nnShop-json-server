import { useQuery } from "@tanstack/react-query";
import instance from "@/configs/axios";

export const useQueryCategory = () => {
 const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const {data} = await instance.get("categories");
      console.log("🚀 ~ queryFn: ~ data:", data);
      return data;
    },
 });

 return { data };
};
