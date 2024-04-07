import { useQueryCategory } from "@/hooks/useQueryCategory";

import { ICategory } from "@/interfaces/ICategory";

type Props = {
  categoryFn: (data : string) => void;
};

const CategoryList = ({categoryFn}: Props) => {
  const { data: categories } = useQueryCategory();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    console.log("🚀 ~ handleChange ~ selectedValue:", selectedValue);
    categoryFn(selectedValue)
  };

  return (
    <div className="action-bar_inner_right_action">
      <span>Danh mục</span>
      <select className="action-bar_inner_right_select" onChange={handleChange}>
        {categories &&
          categories?.map((category: ICategory) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CategoryList;
