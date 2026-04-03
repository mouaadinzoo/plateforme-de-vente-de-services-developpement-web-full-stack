import { TbRectangleVerticalFilled } from "react-icons/tb";
import { LuRectangleVertical } from "react-icons/lu";

const Reserve = () => {
  return (
    <>
      <div className="">
        <div className="flex mx-20 my-10 ">
          <div className="mr-5 mt-2 ">
            <TbRectangleVerticalFilled  />
          </div>
          <div>
            <h2 className=" text-xl font-boldtext-col font-poppins ">
              Your Reservation Form
            </h2>
          </div>
        </div>

        <div className="bg-[#B3BBBC] mx-20 rounded-lg p-8">
          <div className="flex justify-between mb-[120px]">
            <div className="w-1/2 mr-4 text-left">
              <label
                htmlFor="firstName"
                className="input-name block mb-2 text-col font-bold font-montserrat "
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="eg.Alaa"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="lastName"
                className="input-name block mb-2 text-col font-bold font-montserrat"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="eg.Mohamed"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
          </div>
          <div className="flex justify-between mb-[120px]">
            <div className="w-1/2 mr-4 text-left">
              <label
                htmlFor="wilaya"
                className="input-name block mb-2 text-col  font-bold font-montserrat"
              >
                Wilaya
              </label>
              <input
                id="wilaya"
                type="text"
                placeholder="eg.Bejaia"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="commune"
                className="input-name block mb-2 text-col font-bold   font-montserrat"
              >
                Commune
              </label>
              <input
                id="commune"
                type="text"
                placeholder="eg.Amizour"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
          </div>
          <div className="flex justify-between mb-[60px]">
            <div className="w-1/2 mr-4  text-left">
              <label
                htmlFor="productNumber"
                className="input-name block mb-2 text-col  font-bold font-montserrat"
              >
                N° of product
              </label>
              <input
                id="productNumber"
                type="number"
                placeholder="eg.2"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-montserrat placeholder-[#B3BBBC] text-base italic"
              />
            </div>
            <div className="w-1/2 ml-4 text-left">
              <label
                htmlFor="phoneNumber"
                className="input-name block mb-2 text-col font-bold font-montserrat"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="input-field w-full bg-white rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500 bg-no-repeat bg-left pl-8"
                style={{
                  backgroundImage: "url(Phone.jpg)",
                  backgroundPosition: "10px center",
                }}
              />
            </div>
          </div>

          <div className="flex items-center">

          <div className="flex mx-4 my-10 ">
          <div className="mr-5 mt-2 ">
            <TbRectangleVerticalFilled  />
          </div>
          <div>
            <h2 className=" text-xl font-boldtext-col font-poppins ">
            The owner will contact you as soon as possible
            </h2>
          </div>
        </div>

          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#DFB4A3] text-col font-bold font-poppins px-10 py-2 border border-col rounded shadow-md w-1/5"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Reserve;
