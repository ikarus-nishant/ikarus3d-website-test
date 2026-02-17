import { Fragment, useState, useEffect, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { debounce } from "../utils/debounce";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "~/redux/themeSlice";
import { updateHeight } from "~/redux/headerSlice";
import getBrowserEnv from "../utils/browserEnv";
import { useLoaderData } from "@remix-run/react";
import PrimaryButton from "./primaryButton";
import { motion } from "framer-motion";
import RetainerSectionModal from "./RetainerSectionModal";

const env = getBrowserEnv();

const vricon = `${env.CDN_BASE_URL}/WhiteNavbaricons/vr.png`;
const vtoicon = `${env.CDN_BASE_URL}/WhiteNavbaricons/vto.png`;
const avataricon = `${env.CDN_BASE_URL}/WhiteNavbaricons/3d+avatar.png`;
const scanicon = `${env.CDN_BASE_URL}/WhiteNavbaricons/3d+scan.png`;
const vr = `${env.CDN_BASE_URL}/DarkNavbaricons/vr.png`;
const vto = `${env.CDN_BASE_URL}/DarkNavbaricons/vto.png`;
const avatar = `${env.CDN_BASE_URL}/DarkNavbaricons/3d+avatar.png`;
const scan = `${env.CDN_BASE_URL}/DarkNavbaricons/3d+scan.png`;

const solutions = [
  {
    name: "AR 3D Modeling Services",
    description: "Get your low-poly 3D assets created for XR space",
    href: "/augmented-reality-3d-modeling-services",
    lmicon: vricon,
    dmicon: vr,
  },
  {
    name: "VR 3D Modeling Services",
    description: "Get your low-poly 3D assets created for XR space",
    href: "/virtual-reality-3d-modeling-services",
    lmicon: vricon,
    dmicon: vr,
  },
  {
    name: "3D Scan Cleanups",
    description: "Create beautiful, clean and professional looking 3D models",
    href: "/3d-scan-cleanup-services",
    lmicon: scanicon,
    dmicon: scan,
  },
  {
    name: "Metaverse 3D Avatars",
    description:
      "Foray into metaverse with your 3D models and establish your 3D footprint",
    href: "/metaverse-3d-avatars",
    lmicon: avataricon,
    dmicon: avatar,
  },
  {
    name: "Virtual Try On Solutions",
    description: "Get your Virtual Try On Solutions",
    href: "/virtual-try-on-solutions",
    lmicon: vtoicon,
    dmicon: vto,
  },
  {
    name: "3D Virtual Spaces",
    description: "3D 3D Virtual Spaces for Immersive Visualization",
    href: "/3d-virtual-spaces",
    lmicon: vricon,
    dmicon: vr,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const heightRef = useRef(null);
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  const dispatch = useDispatch();
  const [closeOffer, setCloseOffer] = useState(false);
  const [offerDelay, setOfferDelay] = useState(false);
  // const [showHireUs, setShowHireUs] = useState(true);
  const [showModal, setShowModal] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener(
      "resize",
      debounce(function (e) {
        if (heightRef.current !== undefined && heightRef.current !== null) {
          dispatch(updateHeight(heightRef.current.clientHeight));
        }
      })
    );
  }

  useEffect(() => {
    if (localStorage.getItem("theme") == null) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add(localStorage.getItem("theme"));
    }

    dispatch(updateTheme(localStorage.getItem("theme")));
    dispatch(updateHeight(heightRef.current.clientHeight));
  }, []);

  useEffect(() => {
    if (closeOffer) {
      setTimeout(() => setOfferDelay(true), 700);
    }
  }, [closeOffer]);

  // const handleScroll = () => {
  //   if (window.scrollY >= 500) {
  //     setShowHireUs(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <motion.div
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col z-[1100] bg-transparent sticky top-0 shadow-sm w-full"
    >
      {showModal && <RetainerSectionModal setShowModal={setShowModal} />}
      <div onClick={() => setShowModal(true)} className="cursor-pointer text-center w-full text-[14px] p-[5px] text-white bg-gradient-to-r from-[#015EF1] to-[#489BE1] z-20">
        Give your brand unlimited creativity with our custom 3D models.{" "}
        <span className="cursor-pointer underline whitespace-nowrap">
          Get 10% off
        </span>
      </div>
      <Popover>
        <div ref={heightRef} className="mx-auto w-full relative">
          <div className="top-0 bottom-0 left-0 right-0 absolute z-10 backdrop-blur-sm backdrop bg-[#0A0C10]/75"></div>
          <div
            id="head"
            className="flex items-center justify-between py-4 tab:py-6 mx-6 tab:mx-12 lg:mx-[112px] xl:mx-[138px] z-20 relative max-w-[1920px] xxl:mx-auto"
          >
            <Link to="/" className="justify-start">
              <img
                src={`${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.webp`}
                alt="Ikarus3D Logo"
                className="h-[28px] tab:h-[32px] md:h-[36px]"
              />
            </Link>

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-[5px] p-2 text-primaryWhite focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ikarus-blue">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex justify-end gap-8 items-center">
              <Popover.Group
                as="nav"
                className="relative space-x-6 lap:space-x-8 xl:space-x-10 flex"
              >
                <Link
                  to="/about-us"
                  className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] flex items-center ${
                    currentPage === "about-us"
                      ? "dark:text-ikarus-blue"
                      : "text-primaryWhite"
                  } relative overflow-y-hidden`}
                >
                  <span className="">About us</span>
                  <div
                    className={`w-full h-[2px] absolute ${
                      currentPage === "about-us" ? "bottom-0" : "-bottom-1"
                    } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                  ></div>
                </Link>
                <Popover className="">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-primaryWhite" : "text-primaryWhite",
                          "relative group inline-flex overflow-y-hidden items-center text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] text-primaryWhite focus:outline-none"
                        )}
                      >
                        <span className="">Services</span>
                        <span
                          className={`w-full h-[2.5px] absolute ${
                            currentPage === "services"
                              ? "bottom-0"
                              : "-bottom-1"
                          } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                        ></span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-primaryWhite" : "text-primaryWhite",
                            "mt-[1px] h-5 w-5"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 mt-3 px-2 sm:px-0">
                          {({ close }) => (
                            <div className="overflow-hidden rounded-[5px] shadow-lg ring-1 ring-black ring-opacity-5">
                              <div
                                className="relative grid gap-2 bg-primaryDarkBg text-primaryWhite pl-5 py-6 sm:gap-2 sm:px-4"
                                //  onClick={handleDropdown}
                              >
                                {solutions.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className=" w-full flex justify-start rounded-[5px] py-3 px-2 hover:bg-[#EEF0F3] group"
                                    onClick={async () => {
                                      close();
                                    }}
                                  >
                                    <div className="mx-4 ">
                                      <h2
                                        className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] w-full ${
                                          currentPage === item.href.substring(1)
                                            ? "text-ikarus-blue"
                                            : "text-primaryWhite group-hover:text-[#16181C]"
                                        }`}
                                      >
                                        {item.name}
                                      </h2>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link
                  to="/why-us"
                  className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] flex items-center ${
                    currentPage === "why-us"
                      ? "text-ikarus-blue"
                      : "text-primaryWhite"
                  }  relative overflow-y-hidden`}
                >
                  <span className="">Why us</span>
                  <div
                    className={`w-full h-[2px] absolute ${
                      currentPage === "why-us" ? "bottom-0" : "-bottom-1"
                    } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                  ></div>
                </Link>
                <Link
                  to="/portfolio"
                  className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] flex items-center ${
                    currentPage === "portfolio"
                      ? "text-ikarus-blue"
                      : "text-primaryWhite"
                  }  relative overflow-y-hidden`}
                >
                  <span className="">Portfolio</span>
                  <div
                    className={`w-full h-[2px] absolute ${
                      currentPage === "portfolio" ? "bottom-0" : "-bottom-1"
                    } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                  ></div>
                </Link>
                <Link
                  to="/careers"
                  className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] flex items-center ${
                    currentPage === "careers"
                      ? "dark:text-ikarus-blue"
                      : "text-primaryWhite"
                  }  relative overflow-y-hidden`}
                >
                  <span className="">Careers</span>
                  <div
                    className={`w-full h-[2px] absolute ${
                      currentPage === "careers" ? "bottom-0" : "-bottom-1"
                    } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                  ></div>
                </Link>
                <a
                  href={env.BLOG_URL}
                  className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] flex items-center text-primaryWhite relative overflow-y-hidden ${
                    currentPage === "blog"
                      ? "dark:text-ikarus-blue"
                      : "text-primaryWhite"
                  }`}
                >
                  <span className="">Blog</span>
                  <div
                    className={`w-full h-[2px] absolute ${
                      currentPage === "blog" ? "bottom-0" : "-bottom-1"
                    } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                  ></div>
                </a>
                <a
                  href={env.MEDIA_URL}
                  className={`text-[14px] xl:text-[16px] leading-4 xl:leading-6 tracking-[0.07px] font-[500] flex items-center ${
                    currentPage === "media"
                      ? "dark:text-ikarus-blue"
                      : "text-primaryWhite"
                  }  relative overflow-y-hidden`}
                >
                  <span className="">Media</span>
                  <div
                    className={`w-full h-[2px] absolute ${
                      currentPage === "media" ? "bottom-0" : "-bottom-1"
                    } transition-all duration-300 ease-linear rounded-t-[3px] bg-primaryBlue`}
                  ></div>
                </a>
              </Popover.Group>

              <div className="hidden items-center justify-start md:flex">
                {/* <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={HandleChange}
                />
                <label htmlFor="checkbox" className="label">
                  <i className="fas fa-moon"></i>
                  <i className="fas fa-sun"></i>
                  <div className="ball" />
                </label>
              </div> */}
                {/* <DarkModeToggle /> */}
                {/* <div className="min-w-[119px]">
                <a
                  href="/contact-us"
                  className="font-[500] text-[14px] leading-4 px-[18px] py-3 rounded-[5px] bg-primaryBlue text-white shadow-xs"
                >
                  Contact us
                </a>              
              </div> */}
                <PrimaryButton content="Contact us" link="/contact-us" />
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 z-20 top-0 origin-top-right transform pt-2 transition lap:hidden bg-primaryDarkBg text-primaryWhite"
          >
            {({ close: closeOuter }) => (
              <div className="divide-y-2 divide-primaryBlue rounded-[5px] shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-[46px] md:px-[112px] flex items-center justify-end">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-[5px]  p-2 text-primaryWhite focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ikarus-blue">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

                <div className="space-y-6 py-6 px-10 tab:px-16 lap:px-5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link
                      onClick={async () => {
                        closeOuter();
                      }}
                      to="/about-us"
                      className={`text-sm xl:text-2xl ${
                        currentPage === "about-us"
                          ? "dark:text-primaryBlue"
                          : "dark:text-primaryWhite"
                      } hover:text-gray-700`}
                    >
                      About us
                    </Link>
                    <Link
                      onClick={async () => {
                        closeOuter();
                      }}
                      to="/careers"
                      className={`text-sm xl:text-2xl ${
                        currentPage === "careers"
                          ? "dark:text-primaryBlue"
                          : "dark:text-primaryWhite"
                      } hover:text-gray-700`}
                    >
                      Careers
                    </Link>

                    <Popover className="w-full">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={`
                ${open ? "w-full" : "text-opacity-90"}
                relative group rounded-[5px] bg-transparent text-sm xl:text-2xl hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-full text-start flex`}
                          >
                            <span className="">Services</span>
                            <ChevronDownIcon
                              className={`${open ? "" : "text-opacity-70"}
                          mt-[1px] h-5 w-5 text-primaryWhite transition duration-150 ease-in-out`}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 mt-3 px-2 lg:right-0">
                              {({ close: closeInner }) => (
                                <div className="overflow-hidden rounded-[5px] shadow-sm ring-1 ring-black ring-opacity-5 w-[250px]">
                                  <div
                                    className="relative grid gap-2 bg-primaryDarkBg text-primaryWhite px-4 py-6 sm:gap-2"
                                    //  onClick={handleDropdown}
                                  >
                                    {solutions.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.href}
                                        className=" w-full flex justify-start rounded-[5px] py-3 px-1"
                                        onClick={async () => {
                                          closeInner();
                                          closeOuter();
                                        }}
                                      >
                                        <div className="mx-4 ">
                                          <h2
                                            className={`text-sm xl:text-2xl w-full ${
                                              currentPage ===
                                              item.href.substring(1)
                                                ? "dark:text-ikarus-blue"
                                                : "dark:text-primaryWhite"
                                            }`}
                                          >
                                            {item.name}
                                          </h2>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <a
                      onClick={async () => {
                        closeOuter();
                      }}
                      href={env.BLOG_URL}
                      className={`text-sm xl:text-2xl text-primaryWhite mt-[4px] relative overflow-y-hidden`}
                    >
                      <span className="">Blog</span>
                    </a>
                    <Link
                      onClick={async () => {
                        closeOuter();
                      }}
                      to="/why-us"
                      className={`text-sm xl:text-2xl  ${
                        currentPage === "why-us"
                          ? "dark:text-primaryBlue"
                          : "dark:text-primaryWhite"
                      } hover:text-gray-700`}
                    >
                      Why us
                    </Link>

                    <a
                      onClick={async () => {
                        closeOuter();
                      }}
                      href={env.MEDIA_URL}
                      className={`text-sm xl:text-2xl ${
                        currentPage === "media"
                          ? "dark:text-primaryBlue"
                          : "dark:text-primaryWhite"
                      } hover:text-gray-700`}
                    >
                      Media
                    </a>
                    <Link
                      onClick={async () => {
                        closeOuter();
                      }}
                      to="/portfolio"
                      className={`text-sm xl:text-2xl ${
                        currentPage === "portfolio"
                          ? "dark:text-primaryBlue"
                          : "dark:text-primaryWhite"
                      } hover:text-gray-700`}
                    >
                      Portfolio
                    </Link>
                  </div>
                  <div className="w-full mt-4">
                    <a
                      href="/contact-us"
                      className="w-full text-center mx-auto flex items-center tab:text-sm px-4 py-2 h-[45px] rounded-[5px] bg-gradient-to-r from-[#015EF1] to-[#489BE1] text-white shadow-xs"
                    >
                      <span className="mx-auto">Contact us</span>
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </motion.div>
  );
}
