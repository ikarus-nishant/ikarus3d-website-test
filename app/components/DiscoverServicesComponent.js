import ThreeDGrid from "../components/metaverse-ready/ThreeDGrid";
import ResponsiveImages from "./ResponsiveImages";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import { useNavigate } from "@remix-run/react";

export default function DiscoverServices(props) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-col-1 grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] tab_old:grid-cols-2 tab_old:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:gap-[64px] text-ikarus-white md:mx-[86px] lg:mx-[112px] xl:mx-[138px] mb-12 tab:my-12 lg:my-[80px]">
      <div className="p-6 place-self-end tab_old:place-self-auto">
        <ServicesHeadingAndSubheading
          element="h5"
          heading={[`Discover Our Other Services`]}
          subheading="We develop 3D models for all your diverse needs, from 3D visualizations on your website to AR and VR experiences for your customers"
        />
      </div>
      {props.discoverServicesData.map((svc, idx) => {
        return (
          <div
            key={idx}
            className="relative p-5 place-self-center group hover:cursor-pointer"
          >
            <ThreeDGrid />
            <div
              onClick={() => {
                navigate(svc.navigation);
              }}
              className="absolute top-10 left-6 flex flex-col gap-[12px]"
            >
              <ResponsiveImages
                className="w-28 h-28 object-contain group-hover:scale-110 transform transition-all duration-500 group-hover:translate-x-12"
                src={svc.imageSrc}
                sources={svc.sources}
                alt={svc.alt}
                loading={"lazy"}
              />
              {/* <img
                className="w-28 h-28 object-contain group-hover:scale-110 transform transition-all duration-500 group-hover:translate-x-12"
                src={svc.imageSrc}
              /> */}
              <p className="text-xl ml-4 transform transition-all duration-500 group-hover:translate-x-5">
                {svc.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
