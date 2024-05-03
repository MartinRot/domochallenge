"use client";

/* React */
import { useState } from "react";

/* Next */
import Image from "next/image";
import Link from "next/link";

/* Icons */
import { FiMenu } from "react-icons/fi";
import { BiFootball } from "react-icons/bi";
import { FaRegIdCard } from "react-icons/fa6";
import Logo from "../assets/logo.png";

const backgroundImageURL =
  "https://domofrontendchallenge.netlify.app/img/asset-background.jpg";

const containerStyle = {
  backgroundImage: `url(${backgroundImageURL})`,
  backgroundSize: "40%",
  backgroundPositionX: "right",
  backgroundRepeat: "no-repeat",
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50" style={containerStyle}>
      <div className="flex items-center justify-between mr-8 ml-4">
        <div className="p-4 md:p-1 lg:p-4 md:w-auto w-full flex justify-between z-50">
          <Link href="/" className="md:p-4">
            <Image
              src={Logo}
              alt="Logo Domo Challenge"
              width={100}
              height={10}
              priority
            />
          </Link>

          <div
            className="text-4xl md:hidden justify-end h-10"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <BiFootball className="text-slate-100" />
            ) : (
              <FiMenu className="text-slate-100" />
            )}
          </div>
        </div>

        <div className="md:flex hidden items-center gap-2 lg:gap-8">
          <Link href="/" className="md:p-2 text-sm text-white">
            Home
          </Link>
          <Link href="/services" className="md:p-2 text-sm text-gray-400">
            Services
          </Link>
          <Link href="/technology" className="md:p-2 text-sm text-gray-400">
            Technology
          </Link>
          <Link href="/case-studies" className="md:p-2 text-sm text-gray-400">
            Case Studies
          </Link>
          <Link href="/aboute" className="md:p-2 text-sm text-gray-400">
            About
          </Link>

          <Link
            href="/hire"
            className="md:p-2 text-sm flex items-center gap-3 text-white"
          >
            <FaRegIdCard />
            Hire us
          </Link>
        </div>

        {/* Mobile nav */}
        <div
          className={`
            md:hidden bg-slate-800 fixed w-8/12 shadow-xl top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"} z-40
            `}
        >
          <div className="flex flex-col">
            <Link
              href="/"
              className="py-7 px-3 inline-block text-orange-600 font-sans font-bold text-lg"
            >
              Domo Challenge
            </Link>
            <Link
              href="/"
              className="py-2 px-3 inline-block text-gray-400 font-sans font-bold text-lg"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="py-2 px-3 inline-block text-gray-400 font-sans font-bold text-lg"
            >
              Services
            </Link>
            <Link
              href="/technology"
              className="py-2 px-3 inline-block text-gray-400 font-sans font-bold text-lg"
            >
              Technology
            </Link>
            <Link
              href="/case-studies"
              className="py-2 px-3 inline-block text-gray-400 font-sans font-bold text-lg"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="py-2 px-3 inline-block text-gray-400 font-sans font-bold text-lg"
            >
              About
            </Link>
            <Link
              href="/hire"
              className="flex gap-3 items-center py-2 px-3 text-gray-400 font-sans font-bold text-lg"
            >
              <FaRegIdCard />
              Hire us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
