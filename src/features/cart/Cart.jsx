import { AiOutlineDelete } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useCart } from "./useCart";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { useDeleteCart } from "./useCartDelete";
import { useState } from "react";
import { useUpdateCart } from "./useUpdateCart";
// import Location from "../../ui/Location";

function Cart() {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["green", "yellow", "red", "black"];

  const { isLoading, error, data } = useCart();
  const { isDeletingItem, deleteCart } = useDeleteCart();
  const { updateCart, isUpdating } = useUpdateCart();

  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [originalData, setOriginalData] = useState({});

  const subTotal = data?.reduce((total, item) => {
    return total + item.allitems.price * item.quantity;
  }, 0);

  const shippingFee = 150;

  // Open modal and populate fields
  const startEditing = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    setOriginalData({
      quantity: item.quantity,
      color: item.color,
      size: item.size,
    });
    setEditedData({
      quantity: item.quantity,
      color: item.color,
      size: item.size,
      id: item.id,
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdits = () => {
    console.log("Saving edits:", editedData); ///----------
    const ischanged =
      !(originalData.quantity === editedData.quantity) ||
      !(originalData.size === editedData.size) ||
      !(originalData.color === editedData.color);
    if (ischanged) updateCart(editedData);
    setIsEditing(false);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setCurrentItem(null);
  };

  if (isLoading)
    return (
      <div className="mx-auto min-h-[40vh] w-fit p-10">
        <Spinner />;
      </div>
    );
  if (error) {
    return (
      <div className="mx-auto min-h-[40vh] w-fit p-10 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!data || data.length === 0) {
    return (
      <div className="mx-auto min-h-[40vh] w-fit p-10 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Your Cart is Empty</h2>
        <p className="mb-6 text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="inline-block rounded bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="gap-8 pl-4 pr-8 ff:px-8 md:flex md:justify-between">
      <ul className="flex-1">
        {/* <Location /> */}
        <h1 className="border-b-[1px] pb-1 pt-4">Items({data.length})</h1>
        {data.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b-[1px] border-slate-300 py-4"
          >
            <div className="flex gap-4">
              <div className="h-36 w-28">
                <img
                  src={item.allitems.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm sm:w-40">
                <p className="font-semibold">{item.allitems.description}</p>
                <p className="text-slate-600">Size: {item.size}</p>
                <p className="text-slate-600">color: {item.color} </p>
                <p className="text-slate-600">Quantity: {item.quantity}</p>

                <p className="font-semibold">Rs.{item.allitems.price}</p>
              </div>
            </div>
            <div className="ef:mr-20">
              <p className="flex flex-col gap-6 ff:flex-row">
                <MdFavoriteBorder className="cursor-pointer" />
                <AiOutlineDelete
                  onClick={() => deleteCart(item.id)}
                  className="cursor-pointer text-red-500 hover:text-red-700"
                />
                <FaRegEdit
                  onClick={() => startEditing(item)}
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                />
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit Modal */}
      {isEditing && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="w-96 rounded bg-white p-6">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Edit Item
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={editedData.quantity}
                  onChange={handleChange}
                  className="w-full rounded border px-3 py-2 focus:outline-blue-500"
                  min="1"
                />
              </div>

              <div>
                <label className="mb-1 block">Size</label>
                <select
                  name="size"
                  value={editedData.size || ""}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-blue-500"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block">color</label>
                <select
                  name="color"
                  value={editedData.color || ""}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-blue-500"
                >
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={closeEditModal}
                  className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdits}
                  className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ul className="mx-auto pt-10 sm:w-96">
        <div className="border-b-[1px] border-slate-300 pb-4">
          <p className="font-semibold">Location</p>
          <p className="flex items-center pt-2 text-base text-slate-600">
            <CiLocationOn style={{ fontSize: "1.3rem" }} />
            <span className="ml-1">Inaruwa-3,Sunsari</span>
          </p>
        </div>
        <div>
          <h1 className="mx-auto mb-1 mt-4 w-fit font-semibold">
            Order Summary
          </h1>
          <div className="border-[1px] border-slate-300 p-4">
            <p className="flex justify-between pb-1 text-sm text-slate-600">
              <span>Subtotal({data.length} items)</span>
              <span>Rs.{subTotal}</span>
            </p>
            <p className="flex justify-between pb-3 text-sm text-slate-600">
              <span>Shipping Fee</span>
              <span>Rs.150</span>
            </p>
            <p className="flex justify-between border-t-[1px] border-slate-300 pt-3 font-bold">
              <span>Total</span>
              <span>Rs.{subTotal + shippingFee}</span>
            </p>
          </div>
        </div>
        <button className="mb-8 mt-2 w-full bg-green-600 p-3 text-white hover:bg-green-700">
          CHECKOUT
        </button>
      </ul>
    </div>
  );
}

export default Cart;
