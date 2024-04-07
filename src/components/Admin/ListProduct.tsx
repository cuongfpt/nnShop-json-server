import { useMutationProduct } from "@/hooks/useMutationProduct";
import { useQueryProduct } from "@/hooks/useQueryProduct";
import { IProduct } from "@/interfaces/IProduct";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const { data } = useQueryProduct(  { action : "product"  });
  console.log("🚀 ~ ListProduct ~ data:", data);
  const { mutate } = useMutationProduct({ action: "Delete" });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image chính</th>
            <th>Image phụ</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>CategoryId</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((product: IProduct, index: number) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.mainImage} alt="" width={100} />
              </td>
              <td className="d-flex">
                {product.additionalImages.map(
                  (image: { [key: string]: string }) => (
                    <img src={Object.values(image)[0]} alt="" width={100} height={100} />
                  )
                )}
              </td>
              <td>{product.discount}</td>
              <td>{product.quantity}</td>
              <td>{product.categoryId}</td>
              <td>
                <Link
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
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListProduct;
