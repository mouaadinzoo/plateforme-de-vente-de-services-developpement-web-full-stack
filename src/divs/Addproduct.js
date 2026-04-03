import { TiTick } from "react-icons/ti";
const Addproduct = () => {
  return (
    <div className="bg-pink my-20 mx-10 px-8 justify-between ">
      <div className="flex justify-between ">
        <div className="flex items-center  ">
          <div>
            <TiTick />
          </div>

          <div>
            <h2 className="text-lg font-bold font-poppins text-col">
              Add New Product
            </h2>
          </div>
        </div>

        <div className="flex justify-end space-x-8">
          <div className="">
            <button
              type="submit"
              className="bg-white text-col font-bold font-montserrat px-10 py-2 border border-col rounded shadow-md"
            >
              Cancel
            </button>
          </div>

          <div className=" mx-20">
            <button
              type="submit"
              className="bg-[#DFB4A3] text-col font-bold font-montserrat px-10 py-2 border border-col rounded shadow-md flex"
            >
              <div className=" flex">
              <div className="mr-4">
                <TiTick className=" text-2xl" />
              </div>

              <div><h2 className="text-lg font-bold font-poppins text-col">
                Add New Product
              </h2>
              </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex  justify-between w-full">
        <div className="bg-[#B3BBBC] mx-36 rounded-lg  my-20 justify-between w-4/5  ">
          <div className="font-bold font-montserrat text-blue  ">
            <h3>General Informations</h3>
          </div>
          <div className="p-4 ">
            <label
              htmlFor="productName"
              className=" block mb-2 text-col font-bold font-montserrat"
            >
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Havic HV G-92 Gamepad"
              name="productName"
              className="px-14 py-6 border placeholder-poppins placeholder-[#B3BBBC] text-base italic w-2/3"
            />
          </div>
          <div className="">
            <label
              htmlFor="productDescription"
              className="block mb-12 text-col font-bold font-montserrat"
            >
              Product Description:
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              placeholder="PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
              className="p-14 pb-36 pt-6 placeholder-poppins placeholder-[#B3BBBC] text-base italic mb-16 mx-20 w-2/3"
            ></textarea>
          </div>
        </div>

        <div className="bg-[#B3BBBC] mx-20 rounded-lg p-8 my-20 w-1/3">
          <div className="mt-4">
            <label htmlFor="productImage" className="block mb-1 font-bold">
              Product Image:
            </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              accept="image/*"
              className="border rounded-md py-2 px-3 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
