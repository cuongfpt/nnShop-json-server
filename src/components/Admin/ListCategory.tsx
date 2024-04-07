import { useQueryCategory } from "@/hooks/useQueryCategory";
import { ICategory } from "@/interfaces/ICategory";

const ListCategory = () => {
  const { data } = useQueryCategory();
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((category: ICategory, index: number) => (
            <tr key={category.id}>
              <th scope="row">{index + 1}</th>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                {/* <Link
                  to={`/admin/products/${product.id}/edit`}
                  
                  className="btn btn-success me-2"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => mutate(product)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListCategory;
