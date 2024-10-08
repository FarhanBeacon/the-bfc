import PropTypes from "prop-types";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;

  const [haveCoupon, setHaveCoupon] = useState(false);

  const notify = () => setHaveCoupon(!haveCoupon);
  toast.success("You Coupon Is Ready!", {
    duration: 2500,
    style: {
      boxShadow: "none",
      border: "2px solid green",
    },
  });
  console.log(meal);
  return (
    <div className="flex flex-col p-3 border rounded drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)">
      <div className="flex justify-center border rounded p-4">
        <img src={strMealThumb} alt={`${strMeal} image`} />
      </div>
      <div className="flex-grow space-y-2 my-2">
        {/* <h3 className="text-xl font-semibold">Id-Meal: {idMeal}</h3> */}
        <h2 className="text-2xl font-semibold">{strMeal}</h2>
      </div>
      <div>
        {haveCoupon ? (
          <button
            className="btn w-full my-4 border border-green-400"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Show Coupon
          </button>
        ) : (
          <button onClick={notify} className="btn w-full my-4">
            Confirm Order
          </button>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={true} />

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Meal-Id: {idMeal}</h3>
          <p className="text-xl py-4">{strMeal}</p>
          <p className="text-green-400 font-semibold">{`[Note: Show this coupon at the time of redemption...]`}</p>
          <div className="modal-action">
            <form method="dialog" className="flex flex-col justify-center">
              <h4 className="text-xl text-center mt-4">Thank You</h4>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object,
};

export default Meal;
