import React from "react";
import LogoVPN from "../../public/assets/logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="bg-gray-200 pt-44 pb-24"
      style={{ backgroundColor: "#ecf3f3" }}
    >
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src={LogoVPN} className="h-8 w-auto mb-6" alt="" />
          <p className="mb-4">
            <strong className="font-medium">MyHome</strong> is a private
            networked service provider that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Image src={Facebook} className="h-6 w-6" alt="" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Image src={Twitter} className="h-6 w-6" alt="" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Image src={Instagram} className="h-6 w-6" alt="" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - MyHome</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Service</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              MyHome ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become a Provider{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
