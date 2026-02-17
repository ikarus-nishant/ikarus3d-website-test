import React, { useRef, useEffect, useState } from "react";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from "../components/SecondaryButton";
import HeroSectionHeading from "../components/text/HeroSectionHeading";
import HeroSectionSubHeading from "../components/text/HeroSectionSubHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import SubSectionText from "../components/text/SubSectionText";
import ContentHeading from "../components/text/ContentHeading";
import Quote from "../components/text/Quote";
import SwipeIt from "../components/SwipeIt";
import { Footer } from "../components/Footer";
import CustomButtonPositionSplide from "../components/CustomButtonPositionSplide";
import getBrowserEnv from "../utils/browserEnv";
import LazyLoad from "react-lazyload";
import {siteMapTags as nextRoute }  from "./jobs";
const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/careers"},
      {name:"priority", content: 0.8},
      {name:"next-route", content: nextRoute()}
  ]
};

const Careers = () => {  
  const _splideElRef = useRef(null);
  const [index, setIndex] = useState(0);

  const therapies = [
    {
      img: `${env.CDN_BASE_URL}/miscellaneous/therapySession1.webp`,
      text: "Learning never stops. So we’re making sure to take inspiration from the stories of one another, and build one another up piece by piece.",
      imgTitle: "Leadership",
      alt:"Leadership"
    },
    {
      img: `${env.CDN_BASE_URL}/miscellaneous/therapySession2.webp`,
      text: "Each member of Team Ikarus deserves a safe space. We’ve set up Individual Psychotherapy sessions and conducted Personality Evaluation for improved mental health and performance enhancement.",
      imgTitle: "Chai Time",
      alt:"Chai Time: A safe space"
    },
  ];

  const reel = [
    {
      title: "Lohri Celebration 2023",
      img: `${env.CDN_BASE_URL}/Events/lohri.webp`,
      alt:"Lohri Celebration 2023",    
    },
    {
      title: "Holi 2024",
      img: `${env.CDN_BASE_URL}/Events/Holi.jpg`,
      alt:"Holi 2023"
    },
    // {
    //   title: "Independence Day 2022",
    //   img: `${env.CDN_BASE_URL}/Events/independenceDay.webp`,
    // },
    {
      title: "Yoga Day 2023",
      img: `${env.CDN_BASE_URL}/Events/Yoga_Day.jpg`,
    },
    {
      title: "Olympian Gala 2022",
      img: `${env.CDN_BASE_URL}/Events/gala.webp`,
    },
    {
      title: "Women's Day 2023",
      img: `${env.CDN_BASE_URL}/Events/Womens_Day.jpg`,
    },
    {
      title: "Diwali 2023",
      img: `${env.CDN_BASE_URL}/Events/Diwali_Party.jpg`,
    },
    {
      title: "Christmas 2023",
      img: `${env.CDN_BASE_URL}/Events/Christmas.jpg`,
    },
    {
      title: "Team Outings",
      img: `${env.CDN_BASE_URL}/Events/outing.webp`,
    },
    {
      title: "Game Day",
      img: `${env.CDN_BASE_URL}/Events/Game_Day.jpg`,
    },
    {
      title: "90s Theme Party 2023",
      img: `${env.CDN_BASE_URL}/Events/90s_Theme.jpg`,
    },
  ];

  useEffect(() => {
    if (_splideElRef) {
      _splideElRef.current.splide.on("moved", (splide, event) => {
        setIndex(splide);
      });
    }
  }, []);

  return (
    <div>
      <div>
        <div className='flex flex-col lap:flex-row justify-between py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] dark:bg-primaryDarkBg bg-secondaryBackground text-primaryBlack'>
          <div className='w-full lap:w-[50%] flex flex-col lap:justify-center'>
            <div className='text-center lap:text-left tracking-wider text-ikarus-black font-semibold'>
              <HeroSectionHeading
                headings={['Do you have a knack for being extraordinary?']}
              />
            </div>
            <div className='text-center lap:text-left mt-[15px] lap:mt-[30px]'>
              <HeroSectionSubHeading subheadings={["That's exactly what we're looking for!"]} />
            </div>
            <div className='block lap:hidden lap:w-[55%] my-[15px] lap:my-4'>
              <video
                className='mr-auto'
                src={`${env.CDN_BASE_URL}/Videos/careers/Updated_Spiral.mp4`}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
                title='Career at Ikarus3D'
              />
            </div>            
            <div className='w-[265px] mt-[24px] mx-auto tab_old:w-auto lap:mx-0 flex flex-col gap-[16px] tab_old:gap-[12px] mob_old:flex-row justify-between tab_old:justify-center lap:justify-start mob_old:min-w-[274px]'>
              <div className='rounded-[5px]'>
                <PrimaryButton content='Explore jobs' link='/jobs' />
              </div>
              <a
                href="#lifeAtIkarus"
                className='h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]'
                style={{ color: '#fff', borderColor: '#fff' }}
              >
                Life at Ikarus
              </a>
            </div>
          </div>
          <div className='hidden lap:block tab_old:w-[50%]'>
            <video
              className='mr-auto'
              src={`${env.CDN_BASE_URL}/Videos/careers/Updated_Spiral.mp4`}
              autoPlay={true}
              muted={true}
              loop={true}
              title='Career at Ikarus3D'
            />
          </div>
        </div>
      </div>
      {/*The code below has been commented as currently we don't have the video that is going to be used in this section. */}
      {/* <div className="flex items-center justify-between py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-tertiaryBackground">
        <div className="flex flex-col text-center lap:text-left gap-8 w-[82%] mx-auto lap:mx-0 lap:w-[45%]">
          <SubSectionHeading text="Life at Ikarus 3D" />
          <div className="lap:hidden mx-auto w-full">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/vb-2jZqoeGo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <SubSectionSubHeading text="We defy limits in innovation, one extraordinary step at a time. We back you up with mentorship and resources so you deliver results while embracing mistakes that help you learn. And with hard work comes celebration of our little victories. Whether it be a friendly match of foosball at the chill room, or observing birthdays, we’re always up for weaving memories together. " />
        </div>
        <div className="hidden lap:block w-[50%]">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/vb-2jZqoeGo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div> */}
      <div className='bg-secondaryBackground dark:bg-primaryDarkBg py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom'>
        <div className='text-center mb-[30px] lap:mb-[4rem] xl_old:mb-[7rem] '>
          <SubSectionHeading element='h3' text='Lights, Smiles, Celebrations' />
        </div>
        <div>
          <SwipeIt type='loop' autoScroll speed={-0.6} autoWidth={true}>
            {reel.map((item, index) => (
              <div
                className='ml-4 xl_old:ml-6 overflow-hidden rounded-[5px]'
                key={index}
              >
                <div className=''>
                  <img
                    src={item.img}
                    className='h-[150px] tab_old:h-[234px] xl_old:h-[450px] object-cover'
                    alt={item.title}
                  />
                </div>
                <div className='text-start bg-white dark:bg-cardBackgroundColor text-primaryBlack dark:text-darkSubHeading p-2'>
                  <ContentHeading text={item.title} />
                </div>
              </div>
            ))}
          </SwipeIt>
        </div>
      </div>
      <div
        id='lifeAtIkarus'
        className='flex flex-col lap:flex-row justify-center lap:justify-between py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom desk:py-20 px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] dark:bg-primaryDarkBg bg-secondaryBackground text-primaryBlack'
      >
        <div className='w-[82%] mx-auto lap:mx-0 tab_old:w-[50%] lap:w-[27%] relative'>
          <img
            src={`${env.CDN_BASE_URL}/Core+Team/pragya.webp`}
            className='rounded-[5px]'
            alt='Pragya Jain, Senior HR Manager'
          />
        </div>
        <div className='w-[82%] tab_old:w-[65%] lap:w-[60%] flex items-center text-base lap:text-xl xl_old:text-2xl mt-[15px] tab_old:mt-[30px] mx-auto lap:mx-0'>
          <div>
            <div className='text-center lap:text-start ml-auto'>
              <Quote
                element='h3'
                text=' People from diverse backgrounds can connect the pieces better,
              perhaps better than the effective way known. We welcome different
              perspectives, varied experiences and unconventional ideas .'
              />
            </div>
            <p className='text-sm tab_old:text-lg xl_old:text-[36px] text-center lap:text-start text-[#0091C2] mt-[15px]'>
              <strong>Pragya Jain</strong>, Senior HR Manager
            </p>
          </div>
        </div>
      </div>
      <div className='py-smCustomHead  tab_old:py-mdCustomHead xl_old:py-xlCustom px-4 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-secondaryBackground dark:bg-primaryDarkBg dark:text-secondaryBackground text-primaryBlack'>
        <div className='text-center'>
          <SubSectionHeading element='h3' text='Belonging in Diversity' />
        </div>
        <div className='grid grid-cols-2 gap-[15px] tab_old:gap-0 mx-auto w-[90%] mob_old:min-w-[330px] mob_old:w-[64%] tab_old:flex tab_old:h-[225px] lap:h-[275px] desk:h-[355px] xl_old:h-[560px] xxl_old:h-[770px] justify-center tab_old:mb-16 lap:mb-0 mt-[30px] lap:mt-12 xl_old:mt-[7rem] xl_old:w-full'>
          <img
            src={`${env.CDN_BASE_URL}/Diversity/diversity1.webp`}
            className='h-full w-full object-cover lap:w-auto lap:h-auto lap:object-contain tab_old:mt-16 lap:mt-0'
            alt='Team - Belonging in Diversity'
          />
          <img
            src={`${env.CDN_BASE_URL}/Diversity/diversity2.webp`}
            className='h-full w-full object-cover lap:w-auto lap:h-auto lap:object-contain'
            alt='Team - Belonging in Diversity'
          />
          <img
            src={`${env.CDN_BASE_URL}/Diversity/diversity3.webp`}
            className='h-full w-full object-cover lap:w-auto lap:h-auto lap:object-contain tab_old:mt-16 lap:mt-0'
            alt='Team - Belonging in Diversity'
          />
          <img
            src={`${env.CDN_BASE_URL}/Diversity/diversity4.webp`}
            className='h-full w-full object-cover lap:w-auto lap:h-auto lap:object-contain'
            alt='Team - Belonging in Diversity'
          />
        </div>
      </div>

      {/* <div className="text-secondaryBackground bg-[url('https://d3cv7syas17klq.cloudfront.net/miscellaneous/blue_bg.webp')] lap:bg-[url('https://d3cv7syas17klq.cloudfront.net/miscellaneous/blueJobs.webp')] bg-left-bottom bg-no-repeat bg-cover">
        <div className='w-full lap:w-[80%] ml-auto text-center py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw]'>
          <div className='flex flex-col items-center gap-[30px]'>
            <h2 className='text-3xl tab_old:text-5xl lap:text-7xl xl_old:text-9xl font-[500] dark:text-darkHeading'>
              Fly High{' '}
            </h2>
            <HeroSectionHeading
              element='h3'
              headings={['Ikarus 3D well being program']}
            />
          </div>
          <div className='mt-[15px] lap:mt-7'>
            <div className='w-[90%] lap:w-[65%] mx-auto text-center text-[14px] tab_old:text-sm lap:text-base xl_old:text-xl'>
              <ContentHeading
                text="It’s challenging to work in a startup where every individual’s
              performance makes a direct contribution to the organization's
              growth. The desire to continuously upgrade and prove oneself is at
              its maximum, which at times could be overwhelming. We at Ikarus 3D
              understand this very well."
              />
            </div>
          </div>
          <div className='flex flex-row lap:flex-col justify-around lap:items-center mx-auto gap-[10px] lap:gap-[0px] mt-[30px] lap:mt-8 tab_old:mt-16 w-[90%] mob_old:w-[305px] tab_old:w-[55%] text-xs tab_old:text-sm lap:text-base'>
            <div className='border-2 border-white lap:border-0 rounded-[5px] pb-1 w-1/2'>
              <LazyLoad>
                <img
                  src={`${env.CDN_BASE_URL}/miscellaneous/groupworkshops.png`}
                  className='mx-auto w-[88px] h-[88px] xl_old:w-[135px] xl_old:h-[135px]'
                  alt='Group Workshops And Trainings'
                />
              </LazyLoad>
              <div className='px-1 tab_old:px-2'>
                <SubSectionText text='Group Workshops And Trainings' />
              </div>
            </div>
            <div className=' border-2 border-white lap:border-0 rounded-[5px] pb-1 w-1/2'>
              <LazyLoad>
                <img
                  src={`${env.CDN_BASE_URL}/miscellaneous/chaitime.png`}
                  className='mx-auto w-[88px] h-[88px] xl_old:w-[135px] xl_old:h-[135px]'
                  alt='Chai Time: A safe space'
                />
              </LazyLoad>
              <div className='px-1 tab_old:px-2'>
                <SubSectionText text='Chai Time: A safe space' />
              </div>
            </div>
          </div>
          <div className='flex flex-row lap:flex-col justify-around lap:items-center mx-auto gap-[10px] lap:gap-[0px] mt-[10px] lap:mt-0 w-[90%] mob_old:w-[305px] tab_old:w-[55%] text-xs tab_old:text-sm lap:text-base'>
            <div className='border-2 border-white lap:border-0 rounded-[5px] pb-1 w-1/2'>
              <LazyLoad>
                <img
                  src={`${env.CDN_BASE_URL}/miscellaneous/personalitydevelopment.png`}
                  className='mx-auto w-[88px] h-[88px] xl_old:w-[135px] xl_old:h-[135px]'
                  alt='Personality Development'
                />
              </LazyLoad>
              <div className='px-1 tab_old:px-2'>
                <SubSectionText text='Personality Development' />
              </div>
            </div>
            <div className='border-2 border-white lap:border-0 rounded-[5px] pb-1 w-1/2'>
              <LazyLoad>
                <img
                  src={`${env.CDN_BASE_URL}/miscellaneous/mentalhealth.png`}
                  className='mx-auto w-[88px] h-[88px] xl_old:w-[135px] xl_old:h-[135px]'
                  alt='Mental Health Advocacy'
                />
              </LazyLoad>
              <div className='px-1 tab_old:px-2'>
                <SubSectionText text='Mental Health Advocacy' />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='py-[40px] tab_old:py-mdCustomHead lap:py-custom xl_old:py-xlCustom dark:bg-primaryDarkBg bg-secondaryBackground w-full'>
        <CustomButtonPositionSplide
          splideElRef={_splideElRef}
          // index={index}
          // length={therapies.length + 1}
          // perPage={1}
          // autoWidth={true}
          // arrows
          // type='slide'
          // autoScroll={false}
          // perMove={1}
          // gap='0rem'
          // padding='10%'
          // paddingLessThan1080='0%'
          // paddingLessThan720='9%'
          // pagination={false}
        >
          {/* <div className='w-[200px] mob_old:w-[250px] tab_old:w-[700px] lap:w-[1100px] xl_old:w-[2100px] xxl_old:w-[3500px] flex flex-col tab_old:flex-row tab_old:items-center lap:gap-4 xl_old:gap-8 tab_old:max-h-60 lap:max-h-80 xl_old:max-h-125 xxl_old:max-h-150 bg-tertiaryBackground'>
            <img
              src={`${env.CDN_BASE_URL}/miscellaneous/avleen4.webp`}
              className='w-full tab_old:w-auto tab_old:h-full object-contain'
              alt='Aavleen Bakshi'
            />
            <div className='py-6 mx-8'>
              <div className='flex text-sm tab_old:text-base lap:text-2xl xl_old:text-[3rem] xl_old:leading-[1.35] w-[95%] dark:text-darkHeading'>
                At Ikarus 3D, we strongly believe that employee wellness is not
                a distant privilege or a corporate formality. Instead,
                psychological safety is a basic right which has to be widely
                accessible to all.
              </div>
            </div>
          </div> */}
          {/* {therapies.map((item) => (
            <div className='w-[200px] mob_old:w-[250px] tab_old:w-[700px] lap:w-[1100px] xl_old:w-[2100px] xxl_old:w-[3500px] flex flex-col tab_old:flex-row tab_old:items-center lap:gap-4 xl_old:gap-8 tab_old:max-h-60 lap:max-h-80 xl_old:max-h-125 xxl_old:max-h-150 bg-tertiaryBackground'>
              <img
                src={item.img}
                className='w-full tab_old:w-auto tab_old:h-full object-contain'
                alt={item.alt}
              />
              <div className='py-6 mx-8'>
                <div className='flex text-sm tab_old:text-base lap:text-2xl xl_old:text-[3rem] xl_old:leading-[1.35] w-[95%] dark:text-darkHeading'>
                  {item.text}
                </div>
              </div>
            </div>
          ))} */}
        </CustomButtonPositionSplide>
      </div>

      <Footer />
    </div>
  );
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/careers` }
  ]
}

export function meta() {
  return [
    {title: "Want to Join Us? | Explore Careers at Ikarus 3D"},
    {name:"description", content:"We focus on recruiting a skilled professional who adds value to our team, possesses the right attitude & is willing to learn & grow. Choose Ikarus 3D"},
    {property:"og:title", content: "Want to Join Us? | Explore Careers at Ikarus 3D"},
    {property:"og:url", content: `${env.SITE_URL}/careers`},
    {property:"og:description", content:"We focus on recruiting a skilled professional who adds value to our team, possesses the right attitude & is willing to learn & grow. Choose Ikarus 3D"},
    {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:"twitter:title", content: "Want to Join Us? | Explore Careers at Ikarus 3D"},
    {property:"twitter:description", content:"We focus on recruiting a skilled professional who adds value to our team, possesses the right attitude & is willing to learn & grow. Choose Ikarus 3D"},
  ];
}

export default Careers;
