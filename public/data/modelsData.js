// import roswellGlasses from "../../public/images/Eyewear/1.webp";
// import aislinGlasses from "../../public/images/Eyewear/2.webp";
// import gradientGlasses from "../../public/images/Eyewear/3.webp";
// import ellieGlasses from "../../public/images/Eyewear/4.webp";
// import luxeGlasses from "../../public/images/Eyewear/5.webp";
// import dieselGlasses from "../../public/images/Eyewear/7.webp";
// import safetyGlasses from "../../public/images/Eyewear/8.webp";
// import fullRimGlasses from "../../public/images/Eyewear/9.webp";
// import brownBed from "../../public/images/Furniture/Beds/brownBed.webp"
// import whiteBedsheetBed from "../../public/images/Furniture/Beds/whiteBedsheetBed.webp"
// import lightBrownBed from "../../public/images/Furniture/Beds/lightBrownBed.webp"
// import blueAndBrownBed from "../../public/images/Furniture/Beds/blueAndBrownBed.webp"
// import whiteBed from "../../public/images/Furniture/Beds/whiteBed.webp"
// import havenView from "../../public/images/Furniture/Sofas/HavenviewWillough.webp";
// import futon from "../../public/images/Furniture/Sofas/JoviSingleFuton.webp";
// import chester from "../../public/images/Furniture/Sofas/chester.webp";
// import greenChester from "../../public/images/Furniture/Sofas/greenChester.webp";
// import redLoungeChair from "../../public/images/Furniture/Chairs/redChair.webp";
// import fabricIconicChair from "../../public/images/Furniture/Chairs/FabricIconicChair.webp";
// import blackOfficeChair from "../../public/images/Furniture/Chairs/blackOfficeChair.webp";
// import blackChair from "../../public/images/Furniture/Chairs/blackChair.webp";
// import brownChair from "../../public/images/Furniture/Chairs/brownChair.webp";
// import kruzLounge from "../../public/images/Furniture/Chairs/kruzLounge.webp";
// import colorfulCabinet from "../../public/images/Furniture/Cabinets/colorfulCabinet.webp";
// import blackCabinet from "../../public/images/Furniture/Cabinets/blackCabinet.webp";
// import brownVerticalCabinet from "../../public/images/Furniture/Cabinets/brownVerticalCabinet.webp";
// import darkBrownCabinet from "../../public/images/Furniture/Cabinets/darkBrownCabinet.webp";
// import grayCabinet from "../../public/images/Furniture/Cabinets/grayCabinet.webp";
// import longCabinet from "../../public/images/Furniture/Cabinets/longCabinet.webp";
// import woodBrown from "../../public/images/Furniture/Cabinets/woodBrown.webp";
// import abstractCoffee from "../../public/images/Furniture/Tables/abstractCoffee.webp";
// import lightBrownTable from "../../public/images/Furniture/Tables/lightBrownTable.webp";
// import lightBrown from "../../public/images/Furniture/Tables/lightBrown.webp";
// import greenTable from "../../public/images/Furniture/Tables/greenTable.webp";
// import goldBlackTable from "../../public/images/Furniture/Tables/goldBlackTable.webp";
// import brownTable from "../../public/images/Furniture/Tables/brownTable.webp";
// import brownBlack from "../../public/images/Furniture/Tables/brownBlack.webp";
// import blackTable from "../../public/images/Furniture/Tables/blackTable.webp";
// import blackLongTable from "../../public/images/Furniture/Tables/blackLongTable.webp";
// import skates from "../../public/images/Shoe/cover.webp";
// import casualShoes from "../../public/images/Shoe/shoes1.webp";
// import urbanShoes from "../../public/images/Shoe/shoes2.webp";
// import partyShoes from "../../public/images/Shoe/shoes3.webp";
// import blackSandal from "../../public/images/Shoe/shoes4.webp";
// import airJordans from "../../public/images/Shoe/shoes5.webp";
// import glitteryFlats from "../../public/images/Shoe/shoes6.webp";
// import heels from "../../public/images/Shoe/shoes7.webp";
// import ekko from "../../public/images/Avatars/ekko.webp";
// import nativeAmerican from "../../public/images/Avatars/nativeAmerican.webp";
// import LVbag from "../../public/images/Accessories/LVbag.webp";
// import fendiBag from "../../public/images/Accessories/bag2.webp";
// import trianonHandbag from "../../public/images/Accessories/bag3.webp";
// import baguetteBag from "../../public/images/Accessories/bag4.webp";
// import heartRing from "../../public/images/Accessories/heartRing.webp";
// import earrings from "../../public/images/Accessories/earrings.webp";
// import diamondRing from "../../public/images/Accessories/ring.webp";
// import watch from "../../public/images/Accessories/watch.webp";
// import kodakCamera from "../../public/images/Electronics/CAMERAMAINIMG.webp";
// import earbuds from "../../public/images/Electronics/earbuds.webp";
// import washingMachine from "../../public/images/Electronics/washingmachine.webp";
// import iMac from "../../public/images/Electronics/desktop.webp";
// import gamingHeadphones from "../../public/images/Electronics/headphone.webp";
// import Laptop from "../../public/images/Electronics/laptop.webp";
// import iPhone from "../../public/images/Electronics/mobile.webp";
// import gamingMouse from "../../public/images/Electronics/mouse.webp";
// import bedroom from '../../public/images/Spaces/bedroom.png'
// import modernInterior from '../../public/images/Spaces/modernInterior.png'
import getBrowserEnv from "../../app/utils/browserEnv";

const env = getBrowserEnv();

export const spaceModels = [
  {
    name: "Bedroom",
    color: "#9D9D9D",
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Spaces/bedroom.webp`,
    alt:"Bedroom Virtual 3D Spaces",
    src: `${env.CDN_BASE_URL}/3D+Models/3D+Spaces/bedroom.glb`,    
    mobSrc: `${env.CDN_BASE_URL}/3D+Models/3D+Spaces/bedroom-mob.glb`,
  },
  {
    name: "Modern Interior",
    color: "#9D9D9D",
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Spaces/modernInterior.png`,
    alt:"Restaurant Virtual 3D Spaces",
    src: `${env.CDN_BASE_URL}/3D+Models/3D+Spaces/modernInterior.glb`,        
    mobSrc: `${env.CDN_BASE_URL}/3D+Models/3D+Spaces/modernInterior-mob.glb`,        
  }
]

export const chairModels = [
  {
    name: 'Fabric Iconic Chair',
    color: 'bg-[#9D9D9D]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/FabricIconicChair.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/FabricIconicChair.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/FabricIconicChair.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Fabulaxe Mid-Century Modern Chair 3D Model',
  },
  {
    name: 'Red Lounge Chair',
    color: 'bg-[#C7A68B]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/redChair.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/redChair.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/redChair.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'vidaXL Velvet Dining Chairs 3D Model',
  },
  {
    name: 'Black Office Chair',
    color: 'bg-[#E3B885]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/blackOfficeChair.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/blackOfficeChair.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/blackOfficeChair.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: '4D Armrests & Black Leather 3D Model',
  },
  {
    name: 'Faux Leather Desk Chair',
    color: 'bg-[#E3B885]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/blackChair.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/blackChair.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/blackChair.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Acme Furniture Camila Computer Task Chair 3D Model',
  },
  {
    name: 'Brown Armchair',
    color: 'bg-[#E3B885]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/brownChair.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/brownChair.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/brownChair.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Cognac Pike Chair 3D Model',
  },
  {
    name: 'Kruz Lounge',
    color: 'bg-[#E3B885]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Chairs/kruzLounge.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/kruzLounge.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Chairs/kruzLounge.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Boss Design Kruze lounge Chair 3D Model',
  },
];

export const sofaModels = [
  {
    name: 'Havenview Willough',
    color: 'bg-bgavatar',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Sofas/HavenviewWillough.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/HavenviewWillough.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/HavenviewWillough.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Havenview Willoughby modern sofa 3d model',
  },
  {
    name: 'Jovi Single Futon',
    color: 'bg-[#737C4F]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Sofas/JoviSingleFuton.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/JoviSingleFuton.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/JoviSingleFuton.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Double futon sofa 3d model',
  },
  {
    name: 'Green Chester Field',
    color: 'bg-[#99A3C6]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/greenChester.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/greenChesterField.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/greenChesterField.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Chesterfield sofa 3d model',
  },
  {
    name: 'Leather Chester Field',
    color: 'bg-[#99A3C6]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Sofas/chester.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/chesterfield-comp.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Sofas/chesterfield-comp.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Vintage Chesterfield Sofa 3D Model',
  },
];

export const tableModels = [
  {
    name: 'Abstract Coffee Table',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/abstractCoffee.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/abstractCoffeeTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/abstractCoffeeTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Ristretto Side Table 3D Model',
  },
  {
    name: 'Console Jana',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/blackLongTable.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/blackLongTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/blackLongTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Nordal Console Table 3D Model',
  },
  {
    name: 'Glass Side Table',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/blackTable.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/blackTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/blackTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Table Tipton 3D model',
  },
  {
    name: 'Marble Side Table',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/brownBlack.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/brownBlack.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/brownBlack.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Marble Side Table 3d model',
  },
  {
    name: 'Desk with Viennese Weave',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/brownTable.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/brownTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/brownTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Charlie dressing table 3D Model',
  },
  {
    name: 'Side Table with Glass Base',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/goldBlackTable.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/goldBlackTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/goldBlackTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Bliss Coffee Table - 3D Model',
  },
  {
    name: 'Marble Side Table',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/greenTable.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/greenTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/greenTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Gunnar side table dutchbone 3D Model',
  },
  {
    name: 'Oak Side Table',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/lightBrown.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/lightBrown.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/lightBrown.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Bodhi Round Metal Accent Table 3D Model',
  },
  {
    name: 'Serving Trolley',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Tables/lightBrownTable.webp`,
    color: 'bg-[#9FA97A]',
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/lightBrownTable.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Tables/lightBrownTable.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Metal Rolling Bar Cart 3d model',
  },
];

export const cabinetModels = [
  {
    name: 'Colorful Cabinet',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/colorfulCabinet.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/colorfulCabinet.glb`,
    mobSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/colorfulCabinet-mob.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/colorfulCabinet.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Aston Martin Pixel Cabinet 3D Model',
  },
  {
    name: 'Black Glass Showcase',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/blackCabinet.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/blackCabinet.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/blackCabinet.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Brisbane Black cabinet 3D model',
  },
  {
    name: 'Oak Wine Rack ',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/brownVerticalCabinet.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/brownVerticalCabinet.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/brownVerticalCabinet.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Claude Wine Cabinet 3D Model',
  },
  {
    name: 'Highboard Clearbrook',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/darkBrownCabinet.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/darkBrownCabinet.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/darkBrownCabinet.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Rowico Clearbrook cabinet handle 3d model',
  },
  {
    name: 'Brushed Wardrobe Cabinet',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/grayCabinet.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/grayCabinet.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/grayCabinet.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Black Pine Wardrobe Cabined 3D Model',
  },
  {
    name: 'Modern TV Stand',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/longCabinet.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/longCabinet.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/longCabinet.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Temahome Aero TV Stand cabinet 3D model',
  },
  {
    name: 'Oak Veneer Filip',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Cabinets/woodBrown.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/woodBrown.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Cabinets/woodBrown.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'FLOP Highboard with doors cabinet 3D Model',
  },
];

export const bedModels = [
  {
    name: 'Washed Wood Bed',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Beds/brownBed.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed1.glb`,
    mobSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed1-mob.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed1.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Wooden Double bed 3d model',
  },
  {
    name: 'Stained Wood Bed',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Beds/whiteBedsheetBed.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed2.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed2.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Transitional Double Bed 3D Model',
  },
  {
    name: 'Modern Bed',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Beds/lightBrownBed.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed3.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed3.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Modern Duplex Bed 3D Model',
  },
  {
    name: 'Dark Oak Wood Bed',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Beds/blueAndBrownBed.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed4.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/Bed4.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Single bed 3D Model',
  },
  {
    name: 'Contemporary Bed in Ivory',
    color: 'bg-[#B5B5B5]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Furniture/Beds/whiteBed.webp`,
    src: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/pillowBed.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Furniture/Beds/pillowBed.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Beds boconcept 3d model',
  },
];

  export const shoeModels = [
    {
      name: "Casual Shoes",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes1.webp`,
      alt:"Ultraboost 5.0 Dna CBLACK Shoes - 3D Model",
      color: "#8698B4",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/casualShoes.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/casualShoes.usdz`,
      rotation:"145deg 75deg 100%"
    },
    {
      name: "Air Jordans",
      color: "#5D797B",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes5.webp`,
      alt:"Nike Air Jordan Shoes - 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/airJordans.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/airJordans.usdz`,
      rotation:"145deg 75deg 100%"
    },    
    {
      name: "Urban Shoes",
      color: "#3E415F",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes2.webp`,
      alt:"Dolce & Gabbana Shoe - 3D model",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/urbanShoes.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/urbanShoes.usdz`,
      rotation:"145deg 75deg 100%"
    },
    {
      name: "Black Sandal",
      color: "#9D9D9D",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes4.webp`,
      alt:"Milano Women Heels - 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/blackSandal.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/blackSandal.usdz`,
      rotation:"145deg 75deg 100%"
    },
    {
      name: "Party Shoes",
      color: "#BB9F6E",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes3.webp`,
      alt:"Dolce & Gabbana Shoe - 3D model",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/partyShoes.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/partyShoes.usdz`,
      rotation:"145deg 75deg 100%"
    },    
    {
      name: "Glittery Flats",
      color: "#B5B5B5",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes6.webp`,
      alt:"Milano Women Heels - 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/glitteryFlats.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/glitteryFlats-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/glitteryFlats.usdz`,
      rotation:"35deg 75deg 100%"
    },
    {
      name: "Skating Shoes",
      color: "#585858",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/cover.webp`,
      alt:"Women Roller Skates - 3D Model ",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/rollerSkates.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/rollerSkates.usdz`,
      rotation:"145deg 75deg 100%"
    },
    {
      name: "Women heels",
      color: "#A2C9D1",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Shoes/shoes7.webp`,
      alt:"Emporio Armani Women's Heels - 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Shoes/womenHeels.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/womenHeels-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Shoes/womenHeels.usdz`,
      rotation:"145deg 75deg 100%"
    },
  ];

  export const eyewearModels = [
    {
      name: "Gradient Round Glasses",
      color: "#9A6474",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/3.webp`,
      alt:'Vega Gradient Sunglasses 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/gradientRoundGlasses.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Eyewear/gradientRoundGlasses-mob.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Luxe Glasses",
      color: "#A8A884",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/5.webp`,
      alt:"Women's Barton Perreira Vanity Sunglasses 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/luxeGlasses.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Diesel Green Glasses",
      color: "#BB9F6E",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/7.webp`,
      alt:'Carolina Herrera Round Sunglasses 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/DieselGlasses.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Aislin Round Sunglasses",
      color: "#6BB1B6",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/2.webp`,
      alt:'Luxury Echelon Round Sunglasses 3D Models',
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/AislinGlasses.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Rosewell Glasses",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/1.webp`,
      alt:'Barton Perreira Vega Sunglasses 3D Model',
      color:"#BC939D",
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/roswellGlasses.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Safety Glasses",
      color: "#5D797B",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/8.webp`,
      alt:'JSP Dustfree Safety Specs 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/safetyGlasses.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Eyewear/safetyGlasses-mob.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Ellie Glasses",
      color: "#B5B5B5",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/4.webp`,
      alt:'Barton Perreira Emelie Glasses 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/ellieGlasses.glb`,
      rotation:"-35deg 75deg 100%"
    },

    {
      name: "Full Rim Glasses",
      color: "#BC939D",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Eyewear/9.webp`,
      alt:'Happster Sunglasses 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Eyewear/fullRimGlasses.glb`,
      rotation:"-35deg 75deg 100%"
    },
  ];

  export const avatarModels = [
    {
      name: "Ekko-Remix",
      color: "#93A5A1",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Avatars/ekko.webp`,
      alt:"VALORANT Jett figure 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Avatars/ekko.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Avatars/ekko-mob.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Humaniod Avatar",
      color: "#998E7C",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Avatars/nativeAmerican.webp`,
      alt:"Native-american 3D model",
      src: `${env.CDN_BASE_URL}/3D+Models/Avatars/nativeAmerican.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Avatars/nativeAmerican-mob.glb`,
      rotation:"-35deg 75deg 100%"
    },    
  ];

  export const othersModels = [
    {
      name: "Pool Table",
      pic: '',
      color: "#985767",
      src: `${env.CDN_BASE_URL}/3D+Models/Others/PoolTable.glb`,
      iosSrc:`${env.CDN_BASE_URL}/3D+Models/Others/PoolTable.glb`,
      rotation:'auto auto auto'
    }
  ]

  export const accesoryModels = [
    {
      name: "LV Bella Bag",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/LVbag.webp`,
      alt:'louis vuitton bella bag 3D Model',
      color: "#985767",
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag1.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag1-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag1.usdz`,    
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Diamond Heart Ring",
      color: "#3E415F",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/heartRing.webp`,
      alt:'Diamond Heart Ring 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Ring_1.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Ring_1.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Fendi Kan Bag",
      color: "#BB9F6E",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/bag2.webp`,
      alt:'Fendi Kan Bag 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag2.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag2-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag2.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Earrings",
      color: "#9FA97A",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/earrings.webp`,
      alt:'Native American Sun Earring 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/earrings.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/earrings.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Luxury Automatic Watch",
      color: "#9D9D9D",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/watch.webp`,
      alt:'Blancpain Fifty Fathoms Watch 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Watch.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Watch.usdz`,
      rotation:"0deg 90deg 100%"
    },
    {
      name: "Soft Diamond Ring",
      color: "#2F3361",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/ring.webp`,
      alt:'Le Gemelle Diamond Ring 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Ring_2.glb`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Trianon Handbags",
      color: "#B5B5B5",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/bag3.webp`,
      alt:'louis vuitton bella bag 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag3.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag3-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag3.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Givenchy Baguette Bag",
      color: "#A5BAC9",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Accessories/bag4.webp`,
      alt:'Fendi baguette large black bag 3D Model',
      src: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag4.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag4-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Accessories/Handbag4.usdz`,
      rotation:"-35deg 75deg 100%"
    },
  ];

  export const electronicModels = [
    {
      name: "Logitech Gaming Mouse",
      color: "#9FA97A",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/mouse.webp`,
      alt:"Logitech G G502 HERO Mouse 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/Mouse.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Mouse.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Earbuds",
      color: "#5D797B",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/earbuds.webp`,
      alt:"Headphones 3D models",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/earbuds.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/earbuds.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "iPhone",
      color: "#BB9F6E",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/mobile.webp`,
      alt:"Mobile 3D Models",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/iphone+11+pro.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/iphone11pro-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/iphone+11+pro.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Washing Machine",
      color: "#3E415F",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/washingmachine.webp`,
      alt:"Bosch WAJ28067FR Washing Machine 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/Washing+Machine.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/WashingMachine-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Washing+Machine.usdz`,
      rotation:"-35deg 75deg 100%"
    },

    {
      name: "Kodak Camera",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/CAMERAMAINIMG.webp`,
      alt:"KODAK PIXPRO AZ528 Digital Camera 3D Model",
      color: "#B5B5B5",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/Digital+Camera.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/DigitalCamera-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Digital+Camera.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "iMac",
      color: "#5D797B",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/desktop.webp`,
      alt:"Wooden Monitor 3D Scan 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/Mac.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Mac-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Mac.usdz`,
      rotation:"-35deg 75deg 100%"
    },

    {
      name: "Erazer Laptop",
      color: "#B5B5B5",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/laptop.webp`,
      alt:"Laptop 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/Laptop.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Laptop-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/Laptop.usdz`,
      rotation:"-35deg 75deg 100%"
    },
    {
      name: "Gaming Headphones",
      color: "#9D9D9D",
      pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/headphone.webp`,
      alt:"Gaming Headphones 3D Model",
      src: `${env.CDN_BASE_URL}/3D+Models/Electronics/gamingHeadphones.glb`,
      mobSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/gamingHeadphones-mob.glb`,
      iosSrc: `${env.CDN_BASE_URL}/3D+Models/Electronics/gamingHeadphones.usdz`,
      rotation:"-35deg 75deg 100%"
    },
  ];

export const apparelModels = [
  {
    name: 'Fabric Iconic Chair',
    color: 'bg-[#9D9D9D]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Apparels/jacket.png`,
    src: `${env.CDN_BASE_URL}/3D+Models/Apparels/AdidasPufferJacket.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Apparels/Adidas+Puffer+Jacket.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Fabulaxe Mid-Century Modern Chair 3D Model',
  },
  {
    name: 'Fabric Iconic Chair',
    color: 'bg-[#9D9D9D]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Apparels/joggers.png`,
    src: `${env.CDN_BASE_URL}/3D+Models/Apparels/CargoJoggers_baked.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Apparels/CargoJoggers_baked.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Fabulaxe Mid-Century Modern Chair 3D Model',
  },
  {
    name: 'Fabric Iconic Chair',
    color: 'bg-[#9D9D9D]',
    pic: `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Apparels/shirt.png`,
    src: `${env.CDN_BASE_URL}/3D+Models/Apparels/PartyShirt.glb`,
    iosSrc: `${env.CDN_BASE_URL}/3D+Models/Apparels/PartyShirt.usdz`,
    rotation: '-35deg 75deg 100%',
    alt: 'Fabulaxe Mid-Century Modern Chair 3D Model',
  },
]