/* Next */
import Image from "next/image";

/* Images */
import smartphones from "@/app/assets/smartphones2.png";
import Link from "next/link";

const Seccion5 = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-center mt-8 md:-mt-28">

      <div className="bg-blue-600 w-full md:w-5/12 lg:w-3/8 xl:w-4/12 md:mr-4 p-10 md:p-6 text-left">
        <h3 className="text-2xl mb-2 font-medium text-gray-100">
          Get in touch with us
        </h3>
        <p className="text-gray-200 text-sm md:w-2/3">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <div className="flex justify-center items-center md:justify-start mt-6">
          <button className="bg-transparent transition duration-150 ease-in-out font-semibold lg:font-bold rounded hover:text-blue-950 border border-gray-200 text-gray-200 px-4 py-2 text-xs">
            <Link href="https://www.linkedin.com/in/martin-rotelli/" className="hover:underline">
              Hire us
            </Link>
          </button>

        </div>
      </div>
      
      <div className="md:flex bg-blue-600 w-full md:w-5/12 lg:w-3/8 xl:w-4/12 mt-10 p-10 md:p-0 md:mt-0 text-left">
        
        <div className="md:p-6">
          <h3 className="text-2xl mb-2 font-medium text-gray-100">
            Our Projects
          </h3>
          <p className="text-gray-200 text-sm md:w-2/3">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          <div className="flex justify-center items-center md:justify-start mt-6">
            <button className="bg-transparent transition duration-150 ease-in-out font-semibold lg:font-bold rounded hover:text-blue-950 border border-gray-200 text-gray-200 px-4 py-2 text-xs">
              <Link href="https://github.com/MartinRot" className="hover:underline">
                See Projects
              </Link>
            </button>
          </div>
        </div>

        <div className="hidden md:flex md:pt-4 md:pr-4 ">
            <Image src={smartphones} 
              width={350} 
              height={300} 
              alt="Smartphones"
            />
        </div>
      </div>
    </div>
  );
};

export default Seccion5;
