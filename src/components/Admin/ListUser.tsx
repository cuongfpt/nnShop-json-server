import intance from "@/configs/axios";
import { useQueryUser } from "@/hooks/useQueryUser";
import { IAuth } from "@/interfaces/Auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ListUser = () => {
    const queryClient = useQueryClient();
  const { data } = useQueryUser();
  const { mutate } = useMutation({
    mutationFn: async (user: IAuth) => {
      return (
        confirm("Bạn muốn xóa không") &&
        (await intance.delete(`users/${user.id}`))
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });XMLDocument
    },
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user: IAuth, index: number) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => mutate(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUser;
