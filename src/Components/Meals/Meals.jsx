import { useLoaderData, useParams } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const items = useLoaderData();
    const { meals } = items;
    const name = useParams();

    return (
        <div className="w-[90%] mx-auto my-6">
            <h1 className="text-3xl mb-3">{`${name.strCategory} Items`}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    meals.map((meal, idx)=><Meal meal={meal} key={idx}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;