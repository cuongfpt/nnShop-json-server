import { useMutationProduct } from "@/hooks/useMutationProduct";
import { useQueryProduct } from "@/hooks/useQueryProduct";
import { IProduct } from "@/interfaces/IProduct";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const EditProduct = () => {
  const { mutate, form } = useMutationProduct({ action: "Edit" });
  const { id } = useParams();
  const { data } = useQueryProduct({ action: "productDetail", id: id });
  console.log("🚀 ~ EditProduct ~ data:", data);
  useEffect(() => {
    form.reset(data?.data);
  }, [id, form, data]);
  const onSubmit = (product: IProduct) => {
    product.additionalImages = [
      { image1: form.getValues("additionalImages.0.image1") as string },
      { image2: form.getValues("additionalImages.1.image2") as string },
      { image3: form.getValues("additionalImages.2.image3") as string },
      { image4: form.getValues("additionalImages.3.image4") as string },
    ];
    console.log(product);
    mutate(product);
  };
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            className="form-control"
            {...form.register("name", { required: "Không được để trống" })}
          />
          {form.formState.errors.name && (
            <p className="text-danger">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input
            type="number"
            className="form-control"
            {...form.register("price", { required: "Không được để trống" })}
          />
          {form.formState.errors.price && (
            <p className="text-danger">{form.formState.errors.price.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Images Chính</label>
          <input
            type="text"
            className="form-control"
            {...form.register("mainImage", { required: "Không được để trống" })}
          />
          {form.formState.errors.mainImage && (
            <p className="text-danger">
              {form.formState.errors.mainImage.message}
            </p>
          )}
        </div>
        <input
          {...form.register("additionalImages.0.image1")}
          placeholder="Additional Image 1 URL"
        />
        <input
          {...form.register("additionalImages.1.image2")}
          placeholder="Additional Image 2 URL"
        />
        <input
          {...form.register("additionalImages.2.image3")}
          placeholder="Additional Image 3 URL"
        />
        <input
          {...form.register("additionalImages.3.image4")}
          placeholder="Additional Image 4 URL"
        />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            {...form.register("description", {
              required: "Không được để trống",
            })}
          />
          {form.formState.errors.description && (
            <p className="text-danger">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Discount</label>
          <input
            type="number"
            className="form-control"
            {...form.register("discount", { required: "Không được để trống" })}
          />
          {form.formState.errors.discount && (
            <p className="text-danger">
              {form.formState.errors.discount.message}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Quantity</label>
          <input
            type="number"
            className="form-control"
            {...form.register("quantity", { required: "Không được để trống" })}
          />
          {form.formState.errors.quantity && (
            <p className="text-danger">
              {form.formState.errors.quantity.message}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditProduct;
