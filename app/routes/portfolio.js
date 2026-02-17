import React, { useState, useEffect, useRef } from "react";
import PortfolioComponent from "../components/Portfolio";
import SideMenu from "../components/SideMenu";
import {
  shoeModels,
  chairModels,
  sofaModels,
  cabinetModels,
  bedModels,
  tableModels,
  electronicModels,
  accesoryModels,
  eyewearModels,
  avatarModels,
  spaceModels,
} from "../../public/data/modelsData";
import { debounce } from "../utils/debounce";
import getBrowserEnv from "../utils/browserEnv";
import {siteMapTags as nextRoute } from "./careers";
import useViewportWidth from "../hooks/useViewportWidth";
const env = getBrowserEnv();

const luxeGlasses = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/5.webp`;
const fabricIconicChair = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/FabricIconicChair.webp`;
const skates = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/cover.webp`;
const LVbag = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/LVbag.webp`;
const gamingHeadphones = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/headphone.webp`;
const brownBlack = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/brownBlack.webp`;
const whiteBed = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Beds/whiteBed.webp`;
const havenView = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Sofas/HavenviewWillough.webp`;
const woodBrown = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/woodBrown.webp`;
const boy = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Avatars/ekko.webp`;
const bedroom = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Spaces/bedroom.webp`;

export const siteMapTags = () => {
  return [
      {name:"route", content: "/portfolio"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/portfolio` }
  ]
}


export const meta = () => [
  {title: "Explore our portfolio | 3D Models |  Ikarus 3D"},
  {name:"description", content:"Dive into our diverse world of 3D models, virtual spaces, AR & VR experiences, VTO assets, & lifelike avatars. Embrace virtual potential with Ikarus3D"},
  {property:"og:title", content: "Explore our portfolio | 3D Models |  Ikarus 3D"},
  {property:"og:url", content: `${env.SITE_URL}/portfolio/`},
  {property:"og:description", content:"Dive into our diverse world of 3D models, virtual spaces, AR & VR experiences, VTO assets, & lifelike avatars. Embrace virtual potential with Ikarus3D"},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"og:type", content: "website"},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},  
  {property:"twitter:title", content: "Explore our portfolio | 3D Models |  Ikarus 3D"},
  {property:"twitter:description", content:"Dive into our diverse world of 3D models, virtual spaces, AR & VR experiences, VTO assets, & lifelike avatars. Embrace virtual potential with Ikarus3D"},
];

const NewPortfolio = () => {
  const initialRender = useRef(true);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSubCategory, setCurrentSubCategory] = useState("");  
  const [ viewportWidth ] = useViewportWidth();
  const [showSideMenu, setShowSideMenu] = useState(true);

  const desc =
    "Tell us the specifications you want for your avatar design and we’ll do all the work for you.";  

  const furnitureModels = {
    chairs: chairModels,
    tables: tableModels,
    beds: bedModels,
    sofas: sofaModels,
    cabinets: cabinetModels,
  };

  const sideMenuContent = [
    {
      name: "Furniture",
      dimension: "h-full",
      padding: "p-1",
      displayPic: fabricIconicChair,
      subMenu: [
        {
          name: "chairs",
          dimension: "h-full",
          padding: "p-1",
          displayPic: fabricIconicChair,
        },
        {
          name: "tables",
          dimension: "h-full",
          padding: "p-1",
          displayPic: brownBlack,
        },
        {
          name: "beds",
          dimension: "h-full",
          padding: "p-1",
          displayPic: whiteBed,
        },
        {
          name: "sofas",
          dimension: "h-full",
          padding: "p-1",
          displayPic: havenView,
        },
        {
          name: "cabinets",
          dimension: "h-full",
          padding: "p-1",
          displayPic: woodBrown,
        },
      ],
    },
    {
      name: "Shoes",
      dimension: "h-full",
      padding: "p-1",
      displayPic: skates,
      subMenu: [],
    },
    {
      name: "Accessories",
      dimension: "w-full",
      padding: "p-1",
      displayPic: LVbag,
      subMenu: [],
    },
    {
      name: "Eyewear",
      dimension: "w-full",
      padding: "p-1",
      displayPic: luxeGlasses,
      subMenu: [],
    },
    {
      name: "3D Avatars",
      dimension: "h-full",
      padding: "p-1",
      displayPic: boy,
      subMenu: [],
    },
    {
      name: "3D Spaces",
      dimension: "w-full",
      padding: "p-1",
      displayPic: bedroom,
      subMenu: [],
    },
    {
      name: "Electronics",
      dimension: "h-full",
      padding: "p-1",
      displayPic: gamingHeadphones,
      subMenu: [],
    },
  ];
  const showPortfolioComponent = (currentModels) => {
    return (
      <PortfolioComponent
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        content={sideMenuContent}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        currentSubCategory={currentSubCategory}
        setCurrentSubCategory={setCurrentSubCategory}
        models={currentModels}
      />
    );
  };

  useEffect(() => {        

    setShowSideMenu(true);

    if (
      localStorage.getItem("current_category") === null ||
      typeof localStorage.getItem("current_category") === "undefined"
    ) {
      setCurrentCategory("Furniture");
      localStorage.setItem("current_category", "Furniture");
    } else {
      setCurrentCategory(localStorage.getItem("current_category"));
    }
    if (
      localStorage.getItem("current_sub_category") === null ||
      typeof localStorage.getItem("current_sub_category") === "undefined"
    ) {
      setCurrentSubCategory("chairs");
      localStorage.setItem("current_sub_category", "chairs");
    } else {
      setCurrentSubCategory(localStorage.getItem("current_sub_category"));
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      // this prevents the useEffect with non-empty dependency array from running on the first render.
      initialRender.current = false;
    } else {
      if (
        currentCategory !== "" &&
        currentCategory !== localStorage.getItem("current_category")
      ) {
        localStorage.setItem("current_category", currentCategory);
      }
      if (currentSubCategory !== "")
        localStorage.setItem("current_sub_category", currentSubCategory);
    }
  }, [currentCategory, currentSubCategory]);

  return (
    <div className="text-center text-gray-800 dark:bg-primaryDarkBg bg-[#F8F9FC] relative h-auto no-scrollbar">
      <div className="tab_old:hidden">
        <SideMenu
          showSideMenu={showSideMenu}
          setShowSideMenu={setShowSideMenu}
          content={sideMenuContent}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          currentSubCategory={setCurrentSubCategory}
          setCurrentSubCategory={setCurrentSubCategory}
        />
      </div>
      {currentCategory === "Shoes"
        ? showPortfolioComponent(shoeModels)
        : currentCategory === "Electronics"
        ? showPortfolioComponent(electronicModels)
        : currentCategory === "Eyewear"
        ? showPortfolioComponent(eyewearModels)
        : currentCategory === "Furniture"
        ? showPortfolioComponent(furnitureModels)
        : currentCategory === "Accessories"
        ? showPortfolioComponent(accesoryModels)
        : currentCategory === "3D Avatars"
        ? showPortfolioComponent(avatarModels)
        : currentCategory === "3D Spaces"
        ? showPortfolioComponent(spaceModels)
        : ""}
    </div>
  );
};

export default NewPortfolio;
