import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SubSectionHeading from './text/SubSectionHeading';
import LargerStackedCarousel from './largerStackedCarousel';
import PrimaryButton from './primaryButton';
import { debounce } from '~/utils/debounce';
import useViewportWidth from "../hooks/useViewportWidth";

const ServicesWeOffer = () => {

    const [ viewportWidth ] = useViewportWidth();     

    const services = [        
        {
          name: "Virtual Reality 3D models",
          desc: "Our lightweight models guarantee seamless integration with any platform, improving upon interactivity and immersiveness.",
          chips: [
            {
              name: "Virtual Showrooms",
              href: "/virtual-reality-3d-modeling-services?slide=0",
            },
            {
              name: "Real Estate and Property Tours",
              href: "/virtual-reality-3d-modeling-services?slide=1",
            },
            {
              name: "Interactive Training and Education",
              href: "/virtual-reality-3d-modeling-services?slide=2",
            },
            {
              name: "Gaming and Entertainment",
              href: "/virtual-reality-3d-modeling-services?slide=3",
            },
          ],
          href: "/virtual-reality-3d-modeling-services",
        },         
        {
          name: "VTO 3D Assets",
          desc: "With virtual try-on 3D assets, give your customers a seamless shopping experience and build trust that lasts long-term.",
          chips: [
            {
              name: "Fashion and Apparel",
              href: "/virtual-try-on-solutions?slide=0",
            },
            { name: "Eyewear", href: "/virtual-try-on-solutions?slide=1" },
            {
              name: "Cosmetics and Beauty",
              href: "/virtual-try-on-solutions?slide=2",
            },
            {
              name: "Furniture and Home Decor",
              href: "/virtual-try-on-solutions?slide=3",
            },
          ],
          href: "/virtual-try-on-solutions",
        },  

        {
          name: "Metaverse 3D Avatars",
          desc: "We are the leading 3D character design creators that build high definition, compatible custom avatars for various purposes.",
          chips: [
            {
              name: "Power of Immersiveness",
              href: "/metaverse-3d-avatars?slide=0",
            },
            {
              name: "Personalized Digital Identities",
              href: "/metaverse-3d-avatars?slide=1",
            },
            {
              name: "Enhanced Virtual Experiences",
              href: "/metaverse-3d-avatars?slide=2",
            },
            {
              name: "Brand Representation",
              href: "/metaverse-3d-avatars?slide=3",
            },
          ],
          href: "/metaverse-3d-avatars",
        },  
        {
          name: "3D Scan Clean-Up",
          desc: " We use a variety of techniques for mesh optimization, making your 3D scans an accurate representation.",
          chips: [
            {
              name: "Product Visualization",
              href: "/3d-scan-cleanup-services?slide=0",
            },
            {
              name: "Architectural Visualization",
              href: "/3d-scan-cleanup-services?slide=1",
            },
            {
              name: "Gaming and Virtual Reality",
              href: "/3d-scan-cleanup-services?slide=2",
            },
            {
              name: "Cultural Heritage Preservation",
              href: "/3d-scan-cleanup-services?slide=3",
            },
          ],
          href: "/3d-scan-cleanup-services",
        },                      
        {
          name: "Augmented Reality 3D models",
          desc: "Increase conversions with AR ready 3D models, as we ensure a clean topology along with 1:1 precision.",
          chips: [
            {
              name: "Immersive Gaming Experiences",
              href: "/augmented-reality-3d-modeling-services?slide=0",
            },
            {
              name: "Interactive Learning",
              href: "/augmented-reality-3d-modeling-services?slide=1",
            },
            {
              name: "Surgical Visualization",
              href: "/augmented-reality-3d-modeling-services?slide=2",
            },
            {
              name: "Assembly and Maintenance",
              href: "/augmented-reality-3d-modeling-services?slide=3",
            },
          ],
          href: "/augmented-reality-3d-modeling-services",
        },             
        {
          name: "3D Virtual Spaces",
          desc: "From conferences to 3D environments, our skilled artists and tech can design spaces that are tailored to you.",
          chips: [
            {
              name: "Training and Remote Collaboration",
              href: "/3d-virtual-spaces?slide=0",
            },
            { name: "Travel and Leisure", href: "/3d-virtual-spaces?slide=1" },
            {
              name: "Real Estate Visualisation",
              href: "/3d-virtual-spaces?slide=2",
            },
            { name: "Healthcare Practice", href: "/3d-virtual-spaces?slide=3" },
          ],
          href: "/3d-virtual-spaces",
        },
      ];

    const dragging = useRef(false);
    const intervalId = useRef();  
    const [ rotateClasses, setRotateClasses ] = useState(0);    
    const [initialX, setInitialX] = useState(null);
    const [ activeService, setActiveService ] = useState(0); 
    const [ cardIndex, setCardIndex ] = useState(0);   

    const setCarouselInterval = () => {
      intervalId.current = setInterval(() => {   
        setActiveService((prevVal)=>prevVal +1 === services.length ? 0 : prevVal + 1)
        setCardIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));        
      }, 5000);
    };

    const moveServiceCard = (direction) =>{      
      if(direction === 1){
        setActiveService((prevVal)=>prevVal + 1 === services.length ? 0 : prevVal + 1)   
        setCardIndex((prevIndex) =>
          prevIndex + 1 === services.length ? 0 : prevIndex + 1
        );
        clearInterval(intervalId.current)              
        setRotateClasses(1)
      }
      else{
        setActiveService((prevVal)=>prevVal - 1 === -1 ? services.length - 1 : prevVal - 1)            
        setCardIndex((prevIndex) =>
          prevIndex - 1 === -1 ? services.length - 1 : prevIndex - 1
        );
        clearInterval(intervalId.current)      
        setRotateClasses(-1)
      }
    }

    const handleTouchMove = (e) => {      
        if (dragging.current) {          
          const currentX = e.touches[0].clientX;
          const deltaX = currentX - initialX;
    
          if (
            (viewportWidth < 600 && deltaX > 50) ||
            (viewportWidth < 960 && viewportWidth > 600 && deltaX > 50)
          ) {                
            clearInterval(intervalId.current)

            dragging.current = false;
            moveServiceCard(1);
          }
          else if (
            (viewportWidth < 600 && deltaX < -50) ||
            (viewportWidth < 960 && viewportWidth > 600 && deltaX < -50)
          ) {               
            clearInterval(intervalId.current)

            dragging.current = false;
    
            moveServiceCard(-1)
          }
        }
      };
    
      const handleMouseMove = (e) => {
        if (dragging.current) {
          const currentX = e.clientX;
          const deltaX = currentX - initialX;          
          // Check if the mouse has been dragged to the right beyond a certain threshold
          if (deltaX > 50) {                                      
            clearInterval(intervalId.current);
            
            dragging.current = false;            
            
            moveServiceCard(1)
          }
          else if( deltaX < -50 ){            

            clearInterval(intervalId.current);

            dragging.current = false;            

            moveServiceCard(-1)
          }
        }
      };

      const handleMouseUp = () => {             
    
        dragging.current = false;
        setInitialX(null);        
      };    

      useEffect(()=>{
        setCarouselInterval();
        return ()=> clearInterval(intervalId.current)
      },[])

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, delay: 0.5, amount: 0.25 }}
      className='bg-primaryDarkBg flex flex-col gap-[80px] tab:gap-0 md:gap-[43px] lg:gap-[80px] justify-center'
    >
      {
        viewportWidth < 960 ?
          <div className='flex flex-col gap-5 md:gap-4 '>
            <SubSectionHeading element='h3' text='Services We Offer' />
          </div>
        :
          <></>
      }
      <div
        className='flex flex-row md:hidden w-full relative px-[20%] tab:px-0 h-[254px] tab:mt-[9rem] tab:mb-[7rem] md:mt-20 overflow-x-clip'
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onMouseUp={handleMouseUp}
        style={{ perspective: '420px' }}
      >        
        {viewportWidth !== 0 && viewportWidth < 960 ? (
          <LargerStackedCarousel
            services={services}
            handleMouseUp={handleMouseUp}                                    
            initialX={initialX}
            setInitialX={setInitialX}                  
            rotateClasses={rotateClasses}
            setRotateClasses={setRotateClasses}
            intervalId={intervalId}                  
            dragging={dragging}
            moveServiceCard={moveServiceCard}
            cardIndex={cardIndex}
          />
        ) : (
          <></>
        )}
      </div>
      <div className='w-full mt-4 tab:mt-14 md:mt-0 flex flex-col md:flex-row self-start gap-[88px] tab:gap-0 xl:gap-[72px]'>
        {viewportWidth > 960 ? (
          <div
            className='select-none w-1/2 mt-12 lg:mt-16 xl:mt-20 flex flex-col items-center relative'
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onMouseUp={handleMouseUp}
            style={{ perspective: '420px' }}
          >
            <LargerStackedCarousel
              services={services}
              handleMouseUp={handleMouseUp}
              rotateClasses={rotateClasses}
              setRotateClasses={setRotateClasses}
              initialX={initialX}
              setInitialX={setInitialX}                                        
              intervalId={intervalId}                    
              dragging={dragging}
              moveServiceCard={moveServiceCard}
              cardIndex={cardIndex}
            />
          </div>
        ) : (
          <></>
        )}
        <div className='w-full md:w-[51%] relative '>
          { viewportWidth > 960 ?              
              <SubSectionHeading element='h3' text='Services We Offer' />              
            :
            <></>
           }          
          {services.map((service, index) => (
            <div className='absolute w-full h-fit' key={index}>              
              <p
                className={`text-white text-[18px] md:mt-5 leading-7 -tracking-[0.16px] md:text-[20px] xl:text-[21px] xl:leading-[32px] xl:font-[600] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-300 ${
                  activeService !== 1 && activeService === index
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {service.name}
              </p>
              <p
                className={`mt-3 tab:mt-5 md:mt-5 text-[#B4B4B4] text-[16px] leading-[24px] xl:text-[18px] lg:font-light transition-all duration-[1000ms] text-white/80 ${
                  activeService !== 1 && activeService === index
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}
          <div className="flex md:hidden absolute z-50 justify-center items-center tab:justify-between gap-4 md:gap-0 left-0 tab:w-[240px] right-0 w-full tab:mx-auto tab:left-0 tab:right-0 -top-20 tab:-top-16">        
            <button          
              className="w-9 h-9 flex justify-center items-center rounded-full bg-gradient-to-r from-[#015EF1] to-[#489BE1]"
              onClick={()=>moveServiceCard(-1)}      
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ transform: "rotateZ(180deg)" }}
              >
                <path
                  d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="flex justify-center w-20 gap-2 tab:gap-[10px]">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#35383D] transition-all duration-500 h-[6px] w-[6px] min-w-[6px] min-h-[6px] max-h-[6px] max-w-[6px] rounded-full overflow-hidden"
                  // style={{
                  //   width:
                  //     index === cardIndex
                  //       ? viewportWidth < 600
                  //         ? "28.8px"
                  //         : viewportWidth < 1600
                  //         ? "32px"
                  //         : "35.2px"
                  //       : viewportWidth < 600
                  //       ? "14.4px"
                  //       : viewportWidth < 1600
                  //       ? "17.6px"
                  //       : "20.8px",
                  // }}
                >
                  <div
                    className={`absolute z-30 h-full bg-[#1F73BC] top-0 left-0 transition-all ease-linear aspect-square rounded-full ${
                      index === cardIndex ? "duration-[5000ms]" : ""
                    }`}
                    style={{
                      width:
                        index === cardIndex
                          ? viewportWidth < 600
                            ? "6px"
                            : "6px"
                          : "0px",
                    }}
                  ></div>
                </div>
              ))}
            </div>        
            <button          
              className="w-9 h-9 flex justify-center items-center rounded-full bg-gradient-to-r from-[#489BE1] to-[#015EF1]"
              onClick={()=>moveServiceCard(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
                  fill="white"
                />
              </svg>                  
            </button>
          </div> 
          <p
            className={`text-white text-[18px] mt-4 leading-7 -tracking-[0.16px] md:text-[20px] xl:text-[21px] xl:leading-[32px] xl:font-[600] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-300 ${
              activeService === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {services[1].name}
          </p>
          <p
            className={`mt-3 tab:mt-5 md:mt-4 text-[#B4B4B4] text-[16px] leading-[24px] xl:text-[18px] lg:font-light text-white/80 transition-all duration-300 ${
              activeService === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {services[1].desc}
          </p>
          <svg
            className='h-[1px] w-full mt-6 tab:my-5'//tab:mt-[38px] md:mt-12 xl:my-10 mb-9 tab:mb-8 md:mb-10'
            viewBox='0 0 841 1'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='841'
              y1='0.5'
              y2='0.5'
              stroke='url(#paint0_linear_1949_41)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1949_41'
                x1='6.50003'
                y1='0'
                x2='841'
                y2='9.27524e-09'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#252729' stopOpacity='0' />
                <stop offset='0.494792' stopColor='#252729' />
                <stop offset='1' stopColor='#252729' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
          <div className='flex flex-wrap lg:flex-nowrap tab:flex-row gap-3 text-secondaryWhite'>  
            <span className='flex items-center text-white text-[13px] leading-[22px] xl:text-[16px] xl:font-[400] text-button-sm tab:text-button-lg'>
              Areas we cover:
            </span>         
            <a
              href={services[activeService].chips[0].href}
              className='whitespace-nowrap px-4 text-[13px] leading-[22px] tab:px-[18px] md:px-[25px] xl:px-6 py-2 tab:py-[5px] md:py-2 xl:py-[10px] xl:text-[16px] xl:font-[400] bg-white/5 hover:bg-white/20 text-button-sm tab:text-button-lg rounded-[5px]'
            >
              {services[activeService].chips[0].name}
            </a>
            <a
              href={services[activeService].chips[1].href}
              className='whitespace-nowrap px-4 text-[13px] leading-[22px] tab:px-[18px] md:px-[25px] xl:px-6 py-2 tab:py-[5px] md:py-2 xl:py-[10px] xl:text-[16px] xl:font-[400] bg-white/5 hover:bg-white/20 text-button-sm tab:text-button-lg rounded-[5px]'
            >
              {services[activeService].chips[1].name}
            </a>
          </div>
          <div className='flex flex-wrap lg:flex-nowrap tab:flex-row gap-3 text-secondaryWhite mt-3'>
            <a
              href={services[activeService].chips[2].href}
              className='whitespace-nowrap px-4 text-[13px] leading-[22px] tab:px-[18px] md:px-[25px] xl:px-6 py-2 tab:py-[5px] md:py-2 xl:py-[10px] xl:text-[16px] xl:font-[400] bg-white/5 hover:bg-white/20 text-button-sm tab:text-button-lg rounded-[5px]'
            >
              {services[activeService].chips[2].name}
            </a>
            <a
              href={services[activeService].chips[3].href}
              className='whitespace-nowrap px-4 text-[13px] leading-[22px] tab:px-[18px] md:px-[25px] xl:px-6 py-2 tab:py-[5px] md:py-2 xl:py-[10px] xl:text-[16px] xl:font-[400] bg-white/5 hover:bg-white/20 text-button-sm tab:text-button-lg rounded-[5px]'
            >
              {services[activeService].chips[3].name}
            </a>
          </div>
          <div className='w-full tab:w-fit mt-6 tab:mt-10 md:mt-[60px] xl:mt-12'>
            <PrimaryButton
              content='Know more'
              link={services[activeService].href}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ServicesWeOffer