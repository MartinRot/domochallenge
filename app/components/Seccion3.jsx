/* Icons */
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Seccion3 = () => {
  return (
    <div className="bg-blue-600 md:-mt-24 flex flex-col md:flex-row justify-around">
      <div className="w-full h-full md:w-3/6 text-left flex flex-col justify-center p-10 md:p-16 md:mt-14">
        <h1 className="text-gray-100 text-2xl mb-4">
          We use cutting edge technology
        </h1>
        <p className="text-slate-400/90 tracking-wider leading-7">
          Nullam id dolor id nibh ulticies vehicula ut id elit. Aenean lacinia
          bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla vitae elit
          libero, a pharetra augue. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.
        </p>
      </div>

      <div className="flex justify-center md:grid md:grid-rows-3 md:grid-flow-col gap-3 md:gap-10 w-full h-full md:w-2/6 p-8 md:p-16 md:mt-14">
        <TiHtml5 size={75} />
        <FaSass size={75} />
        <FaAngular size={75} />
        <FaCss3Alt size={75} />
        <TbBrandJavascript size={75} />
        <FaPython size={75} />
      </div>
    </div>
  );
};

export default Seccion3;
