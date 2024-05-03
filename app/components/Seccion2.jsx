import { RiPencilRulerLine } from "react-icons/ri";

const Seccion2 = () => {
  return (
    <div
      className="pt-14 pb-8 md:pt-16 md:pb-0 flex justify-center md:mt-16 ml-4 mr-4"
    >
      <div className="w-4/5 sm:w-5/6 md:w-full xl:w-5/6">
        <header className="text-center mx-auto mb-16 mt-10 sm:mb-6 lg:px-20 w-4/5 sm:w-3/5">
          <h2 className="text-2xl leading-normal font-semibold text-slate-200">
            Our Services
          </h2>
          <p className="text-gray-400 leading-relaxed font-semibold text-xs xs:text-base mx-auto pb-2">
            We feel very strong about our skills when it comes to planning,
            designing and coding applications. Here is what we love to do!
          </p>
        </header>

        <div className="flex flex-wrap justify-center items-center flex-col md:flex-row text-center">
          <div className="flex-shrink px-3 sm:w-2/3 md:w-1/3 xl:w-3/12 wow fadeInUp">
            <div className="flex flex-col items-center justify-center h-96 py-4 px-4 mb-12 bg-white border-b transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block mb-3 bg-blue-600 rotate-180 rounded-full p-3">
                <RiPencilRulerLine color="white" size={30} />
              </div>
              <h3 className="text-base mb-3 font-semibold text-black">
                Business & Product Concept
              </h3>
              <p className="text-gray-500">
                Analyse business and product concept at Start-up Workshops or
                Ongoing Projects&apos; Audits and prepare a viable and sensible
                product roadmap for achieving a perfect market fit.
              </p>
              <div className="flex justify-center items-center mt-6">
                <button className="bg-transparent transition duration-150 ease-in-out font-semibold lg:font-bold rounded hover:text-blue-700 border border-gray-500 text-gray-500 px-4 py-2 text-xs">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink px-3 sm:w-2/3 md:w-1/3 xl:w-3/12 wow fadeInUp">
            <div className="flex flex-col items-center justify-center h-96 py-4 px-4 mb-12 bg-white border-b transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block mb-3 bg-blue-600 rotate-180 rounded-full p-3">
                <RiPencilRulerLine color="white" size={30} />
              </div>
              <h3 className="text-base mb-2 font-semibold text-black">
                Web & Mobile Development
              </h3>
              <p className="text-gray-500">
                Plan, develop and test high-quality web-applications using
                AngularJS, NoseJS, JavaScript, Typescript, HTML5 and SASS/CSS3
                framework and native mobile languages.
              </p>
              <div className="flex justify-center items-center mt-6">
                <button className="bg-transparent transition duration-150 ease-in-out font-semibold lg:font-bold rounded hover:text-blue-700 border border-gray-500 text-gray-500 px-4 py-2 text-xs">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink px-3 sm:w-2/3 md:w-1/3 xl:w-3/12 wow fadeInUp">
            <div className="flex flex-col items-center justify-center h-96 py-4 px-4 mb-12 bg-white border-b transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block mb-3 bg-blue-600 rotate-180 rounded-full p-3">
                <RiPencilRulerLine color="white" size={30} />
              </div>
              <h3 className="text-base mb-3 font-semibold text-black">
                UX & UI Design
              </h3>
              <p className="text-gray-500">
                Sketch information architecture and simple mock-ups, convert
                them into clickable prototypes and finish with usable interface
                designs to deliver a good and reliable user experience.
              </p>
              <div className="flex justify-center items-center mt-6">
                <button className="bg-transparent transition duration-150 ease-in-out font-semibold lg:font-bold rounded hover:text-blue-700 border border-gray-500 text-gray-500 px-4 py-2 text-xs">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion2;
