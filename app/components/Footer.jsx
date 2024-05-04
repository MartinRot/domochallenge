/* Next */
import Link from "next/link";
import Image from "next/image";

/* Images */
import Logo from "../assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="pt-8 pb-6 w-10/12">
        <div className="md:flex md:justify-around mt-6 mb-6 ml-6">
          <div className="grid grid-cols-2 gap-8 md:flex text-gray-200">
            {/* Complete labs */}
            <div className="md:w-6/12">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo Domo Challenge"
                  width={150}
                  height={10}
                  priority
                />
              </Link>

              <p className="text-slate-400/90 tracking-wider leading-7 mt-4">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Donec
                ullamcorper nulla.
              </p>

              <div className="flex gap-5 mt-6">

                <Link href="https://twitter.com/home" target="_blank">
                  <FaTwitter />
                </Link>

                <Link href="https://dribbble.com/" target="_blank">
                  <FaDribbble />
                </Link>

                <Link href="https://facebook.com/" target="_blank">
                  <FaFacebookSquare />
                </Link>

                <Link href="https://instagram.com/" target="_blank">
                  <FaInstagram />
                </Link>

              </div>
            </div>

            {/* Sitemap */}
            <div className="md:w-2/12">
              <h1 className="mb-6 text-sm font-semibold uppercase">Sitemap</h1>

              <ul>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link href="/technology" className="hover:underline">
                    Technology
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Case studies */}
            <div className="md:w-2/12">
              <h1 className="mb-6 text-sm font-semibold uppercase">
                Case Studies
              </h1>

              <ul>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link
                    href="https://www.swiss.com/ar/es/homepage"
                    target="_blank"
                    className="hover:underline"
                  >
                    Swiss Airlines
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link
                    href="https://www.google.com.ar/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Google
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link
                    href="https://www.apple.com/la/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Apple
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link
                    href="https://www.nike.com.ar/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Nike
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:w-2/12">
              <h1 className="mb-6 text-sm font-semibold uppercase">Contact</h1>

              <ul>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link
                    href="https://github.com/MartinRot"
                    target="_blank"
                    className="hover:underline"
                  >
                    Jobs
                  </Link>
                </li>
                <li className="mb-2 text-gray-400 hover:text-blue-700">
                  <Link
                    href="mailto:martin_rot@hotmail.com"
                    target="_blank"
                    className="hover:underline"
                  >
                    Hire us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
