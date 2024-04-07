import intance from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import { getUserId } from "./useAuth";

const useQueryCart = () => {
    const userId = getUserId();
    const { data } = useQuery({
        queryKey: ["carts"],
        queryFn: async () => {
            const { data } = await intance.get(`carts?userId=${userId}`);
            return data;
        },
    });

    return { data };
};

export default useQueryCart;
