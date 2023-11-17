 
 

import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  // Check if 'item' exists before accessing its properties
  if (!item) {
    return null; // or handle the case when 'item' is undefined
  }

  return (
    <div className="flex space-x-6 items-start mb-4 border-b-2 border-gray-400 pb-4">
      <div className="mb-4">
        {/* Optional chaining to handle 'item.image' being undefined */}
        <img src={item?.image} alt={item.title} className="w-32 h-30 object-cover mb-2" />
        <div onClick={removeFromCart} className="cursor-pointer text-red-500">
        
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
        <p className="text-sm text-gray-500 mb-2 ">{item.description .split(" ").slice(0,10).join(" ") + "..."}</p>
        <div className="flex justify-between  items-center">
        <p className="text-lg font-bold text-green-600">${item.price}</p>
        <div
            onClick={removeFromCart} className="text-3xl">
              <FcDeleteDatabase/>
            </div>

        </div>
       
      </div>
    </div>
  );
};

export default CartItem;

 