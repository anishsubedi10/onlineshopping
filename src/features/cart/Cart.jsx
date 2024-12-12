import { AiOutlineDelete } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const data = [
  {
    id: 1,
    image:
      "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-10-28T07%3A52%3A50.473Z",
    description: "Floral Print Maxi Dress ", //description ra photo aarko table bata aaucha
    size: "XS",
    quantity: "3",
    price: 100,
  },
  {
    id: 2,
    image:
      "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-10-28T07%3A52%3A50.473Z",
    description: "Elegant Satin Blouse",
    size: "S",
    quantity: "1",
    price: 1,
  },
  {
    id: 3,
    image:
      "https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-10-28T07%3A52%3A50.473Z",
    description: "Vintage Denim Jacket",
    size: "M",
    quantity: "2",
    price: 100000,
  },
];
function Cart() {
  return (
    <div className="ff:px-8 gap-8 pl-4 pr-8 md:flex md:justify-between">
      <ul className="flex-1">
        <h1 className="border-b-[1px] pb-1 pt-4">Items({data.length})</h1>
        {data.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b-[1px] border-slate-300 py-4"
          >
            {/**gap narakne tyo milaunu paro mathiko*/}
            <div className="flex gap-4">
              <div className="h-36 w-28">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm sm:w-40">
                <p className="font-semibold">{item.description}</p>
                <p className="text-slate-600">Size: {item.size}</p>
                <p className="text-slate-600">color: </p>
                <p className="text-slate-600">Quantity: {item.quantity}</p>
                {/** description ra photo aarko table bata aaucha */}
                <p className="font-semibold">Rs.{item.price}</p>
              </div>
            </div>
            <div className="ef:mr-20">
              <p className="ff:flex-row flex flex-col gap-6">
                <MdFavoriteBorder />
                <AiOutlineDelete />
                <FaRegEdit />
              </p>
            </div>
          </li>
        ))}
      </ul>

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
              <span>Rs.10000</span>
            </p>
            <p className="flex justify-between pb-3 text-sm text-slate-600">
              <span>Shipping Fee</span>
              <span>Rs.150</span>
            </p>
            <p className="flex justify-between border-t-[1px] border-slate-300 pt-3 font-bold">
              <span>Total</span>
              <span>Rs.10150</span>
            </p>
          </div>
        </div>
        <button className="mt-2 w-full bg-green-600 p-3 text-white hover:bg-green-700">
          CHECKOUT
        </button>
      </ul>
    </div>
  );
}

export default Cart;
