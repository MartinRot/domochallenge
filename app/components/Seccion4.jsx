/* Next */
import Image from "next/image";

/* Logos */
import logotnw from "@/app/assets/logotnw.png";
import logogoogle from "@/app/assets/logogoogle.png";
import logonike from "@/app/assets/logonike.png";
import logoairbnb from "@/app/assets/logoairbnb.png";
import logoitnewsafrica from "@/app/assets/logoitnewsafrica.png";

const Seccion4 = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center ">
          <div className="p-8 md:p-6">
            <Image src={logotnw} width={150} height={150} alt="Logo TNW" />
          </div>

          <div className="p-8 md:p-6">
            <Image
              src={logogoogle}
              width={150}
              height={150}
              alt="Logo Google"
            />
          </div>

          <div className="p-8 md:p-6">
            <Image src={logonike} width={150} height={150} alt="Logo Nike" />
          </div>

          <div className="p-8 md:p-6">
            <Image
              src={logoairbnb}
              width={150}
              height={150}
              alt="Logo Airbnb"
            />
          </div>

          <div className="p-8 md:p-6">
            <Image
              src={logoitnewsafrica}
              width={150}
              height={150}
              alt="Logo IT News Africa"
            />
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Seccion4;
