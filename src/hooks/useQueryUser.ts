import { useQuery } from "@tanstack/react-query";
import instance from "@/configs/axios";

export const useQueryUser = () => {
 const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const {data} = await instance.get("users");
      console.log("🚀 ~ queryFn: ~ data:", data);
      return data;
    },
 });

 return { data };
};
