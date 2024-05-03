import { FaArrowRightLong } from "react-icons/fa6";

const Seccion1 = () => {
  return (
    <div className="w-full sm:w-3/5 xl:w-3/5 p-15 mt-32 md:mt-40 xl:p-16 sm:ml-10 md:ml-20 xl:mt-16">
      <div className="flex flex-col">
        <div className="w-11/12 md:w-9/12 xl:w-6/12 items-center flex-col mb-2 sm:mb-5 text-center sm:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold">
            We build beautiful and reliable web solutions
          </h1>
          <p className="sm:mt-1 text-gray-400 font-medium text-sm sm:text-xs">
            We strongly believe that communication, trust and transparency are
            the essential elements of successful business relationship.
          </p>
          <p className="text-gray-400 font-medium text-sm sm:text-xs">
            Ready for the journey?
          </p>
        </div>

        <div className="flex justify-center sm:justify-start items-center">
          <button className="bg-transparent transition duration-150 ease-in-out font-semibold lg:font-bold rounded hover:text-blue-700 border border-gray-500 text-gray-500 px-4 sm:px-10 py-2 text-sm">
            Learn more
          </button>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out font-semibold lg:font-bold rounded text-gray-100 px-1 sm:px-4 border border-gray-700 py-2 text-sm ml-2 sm:ml-4">
            Our Projects <FaArrowRightLong className="ml-4" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seccion1;
