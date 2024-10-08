import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
  const obj = useLoaderData();
  const { categories } = obj;
  return (
    <div className="w-[90%] mx-auto my-6">
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, idx) => (
          <Category category={category} key={idx}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
