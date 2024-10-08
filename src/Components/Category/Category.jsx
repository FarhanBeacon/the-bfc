import PropType from "prop-types";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = category;
  const navigate = useNavigate();
  const btnHandler = ()=>{
    navigate(`/${strCategory}`);
  }

  return (
    <div className="flex flex-col text-center p-3 border rounded drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center border rounded p-4">
        <img src={strCategoryThumb} alt={`${strCategory} image`} />
      </div>
      <div className="flex-grow">
        <h2 className="text-3xl font-semibold my-6">{strCategory}</h2>
        <p className="text-xl">{strCategoryDescription.slice(0, 200)}</p>
      </div>
      <div>
        <button onClick={btnHandler} className="btn btn-outline my-6">Show All Items</button>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropType.object,
};

export default Category;
