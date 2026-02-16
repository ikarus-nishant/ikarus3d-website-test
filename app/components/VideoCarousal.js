import React, { useEffect, useRef, useState } from 'react'
import ServicesHeading from './ServicesHeading'
import ServiceSectionText from './ServiceSectionText'
import PrimaryButton from './primaryButton'
import getBrowserEnv from "../../app/utils/browserEnv";
const env = getBrowserEnv();
const carouseVideos=[
    {name:"Augmented Reality 3D models",
        src:`${env.CDN_BASE_URL}/Videos/lp/ARreadymodels.mp4`,
        id:"CarousalVideosId4",
        isMuted: true,
        width:"2560px",
        des:"Increase conversion rates with AR-ready 3D models carefully crafted with clean topology and 1:1 precision, ensuring an immersive and accurate augmented reality experience for users.",
    },
    {name:"Virtual Reality 3D models",
        src:`${env.CDN_BASE_URL}/Videos/lp/VR+ready+3D+models.mp4`,
        id:"CarousalVideosId1",
        isMuted: true,
        width:"2560px",
        des:"Lightweight designs to ensure seamless integration across platforms, enhancing interactivity and delivering unparalleled immersion.",
    },
    {name:"3D Scan/Photogrammetry Optimization",
        src:`${env.CDN_BASE_URL}/Videos/lp/3Dscan.mp4`,
        id:"CarousalVideosId3",
        isMuted: true,
        width:"2560px",
        des:"A 3D Scan clean-up service ensures scans are refined to the highest standards through meticulous mesh optimization techniques, delivering precise and true-to-life representations.",
    },
    {name:"VTO 3D Assets",
        src:`${env.CDN_BASE_URL}/Videos/lp/VTO.mp4`,
        id:"CarousalVideosId2",
        isMuted: true,
        width:"2560px",
        des:"Offering a seamless blend of virtual try-on technology and immersive 3D assets, it can offer customers an unparalleled shopping experience, fostering long-term trust and satisfaction.",
    },
]

export default function VideoCarousal() {

    const carouselRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mutedVideos,setMutedVideos] = useState(new Array(carouseVideos.length).fill(true)) 

    const muteUnmute = () =>{
        const newMutedArray = [...mutedVideos]
        newMutedArray[currentIndex] = !mutedVideos[currentIndex]
        setMutedVideos(newMutedArray)
    };
    const muteAll = () =>{
        setMutedVideos(new Array(carouseVideos.length).fill(true))
    };
    const goToPrevious = () => {
        muteAll()
        const scrollByVal = window.innerWidth/2
        carouselRef.current.scrollLeft -=scrollByVal
        
        currentIndex!=0
        ?setCurrentIndex(currentIndex-1)
        :goToEnd()
    };
    const goToNext = () => {
        muteAll()
        const scrollByVal = window.innerWidth/2
        carouselRef.current.scrollLeft +=scrollByVal
        
        currentIndex!=3
        ?setCurrentIndex(currentIndex+1)
        :goToStart()
    };
    const goToStart = () => {
        carouselRef.current.scrollLeft = 0
        setCurrentIndex(0)
    };
    const goToEnd = () => {
        const scrollByVal = window.innerWidth*3
        carouselRef.current.scrollLeft =scrollByVal
        setCurrentIndex(3)
    };
    useEffect(()=>{
        const allVideos = [...carouselRef.current.querySelectorAll(".VideosForVideoCarousel")]
        allVideos.forEach(e => e.pause())
        allVideos[currentIndex].play()
    },[currentIndex])

  return (
    <div>

        <div className='text-center flex flex-col gap-4 justify-center mb-16'>
            <ServicesHeading
                element="h2"
                headings={["Explore Services"]}   
            />
            < ServiceSectionText
                text={"To turn ideas into reality, offering every service in 3D."}
            />
        </div>

        <div  className='relative'>
            <button onClick={muteUnmute} className='absolute top-2 right-2 aspect-square rounded-full bg-white bg-opacity-70 flex h-10 justify-center items-center z-[11] cursor-pointer p-2'>
                {mutedVideos[currentIndex]
                    ?<img className='h-full w-full' src='/images/mute.svg' alt='mute button icon'/>
                    :<img className='h-full w-full' src='/images/sound.svg' alt='unmute button icon'/>
                }
            </button>

            <div ref={carouselRef} className='relative flex overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth rounded-t-xl overflow-hidden'>
                {carouseVideos.map((e,i) =>(
                    <div id={e.id} key={e.id} className="w-full flex-none snap-center relative">
                        <video
                            className='VideosForVideoCarousel'
                            muted={mutedVideos[i]}
                            playsInline
                            width={e.width}
                            onEnded={goToNext}
                        >
                            <source src={e.src} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>

                        <div style={{background:"linear-gradient(180deg, rgba(10, 12, 16, 0.0) 10%, rgba(10, 12, 16, 1) 100%)"}} className='absolute h-[45%] w-full bottom-0 left-0 z-10 flex md:flex-col gap-4 md:justify-end items-end px-6 md:items-center pb-12'>

                            <div className='w-1/2 hidden md:flex md:text-center flex-col gap-4'>
                                <ServicesHeading
                                    element="h3"
                                    headings={[e.name]}   
                                />
                                <ServiceSectionText 
                                    text={e.des}
                                />
                            </div>
                            <div className='pt-4 hidden md:flex justify-between'>
                                <PrimaryButton 
                                    link={'/contact-us'}
                                    // target={"_blank"}
                                    content="Request a Demo"
                                    rel="noopener noreferrer"
                                    // link={}
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <button className='hidden md:block p-2 border-[2px] rounded-full aspect-square absolute z-10 top-1/2 left-0 translate-y-1/2 -translate-x-1/2 rotate-180' onClick={goToPrevious}>
                <img className='h-16 aspect-square' src='/images/chevron-left.svg' alt='scroll left icon' />
            </button>
            <button className='hidden md:block p-2 border-[2px] rounded-full aspect-square absolute z-10 top-1/2 right-0 translate-y-1/2 translate-x-1/2' onClick={goToNext}>
                <img className='h-16 aspect-square' src='/images/chevron-left.svg' alt='scroll left icon' />
            </button>

            <div className='flex justify-end p-6 tab:hidden'>
                <div className='flex gap-4'>
                    <button className='block border-[1px] rounded-full aspect-square rotate-180' onClick={goToPrevious}>
                        <img className='h-8 aspect-square' src='/images/chevron-left.svg' alt='scroll left icon' />
                    </button>
                    <button className='block border-[1px] rounded-full aspect-square' onClick={goToNext}>
                        <img className='h-8 aspect-square' src='/images/chevron-left.svg' alt='scroll left icon' />
                    </button>
                </div>
            </div>

            {/* Tab View Buttons*/}
            <div className='w-full flex md:hidden mob:flex-col tab:flex-row mob:px-2 items-center justify-between px-12'>
                <div className='flex flex-col gap-4 tab:w-1/2 mob:w-full'>
                    <ServicesHeading
                        element="h2"
                        headings={[carouseVideos[currentIndex].name]}   
                    />
                    <ServiceSectionText 
                        text={carouseVideos[currentIndex].des}
                    />
                </div>
                <div className='block tab:hidden w-full py-4'>
                    <PrimaryButton 
                        // target={"_blank"}
                        content="Get a Demo"
                        rel="noopener noreferrer"
                        link={'/contact-us'}
                    />
                </div>

                <div className='pb-4 hidden flex-col gap-16 tab:flex lap_gen:hidden items-center -translate-y-1/4'>
                    <div className='flex gap-4'>
                        <button className='block border-[2px] rounded-full aspect-square rotate-180' onClick={goToPrevious}>
                            <img className='h-12 aspect-square' src='/images/chevron-left.svg' alt='scroll left icon' />
                        </button>
                        <button className='block border-[2px] rounded-full aspect-square' onClick={goToNext}>
                            <img className='h-12 aspect-square' src='/images/chevron-left.svg' alt='scroll left icon' />
                        </button>
                    </div>
                    <PrimaryButton 
                        // target={"_blank"}
                        content="Get a Demo"
                        rel="noopener noreferrer"
                        link={'/contact-us'}
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

/*
Virtual Reality 3D models
Lightweight designs to ensure seamless integration across platforms, enhancing interactivity and delivering unparalleled immersion.

VTO 3D Assets
Offering a seamless blend of virtual try-on technology and immersive 3D assets, it can offer customers an unparalleled shopping experience, fostering long-term trust and satisfaction.

3D Scan Clean-Up
A 3D Scan clean-up service ensures scans are refined to the highest standards through meticulous mesh optimization techniques, delivering precise and true-to-life representations.

Augmented Reality 3D models
Increase conversion rates with AR-ready 3D models carefully crafted with clean topology and 1:1 precision, ensuring an immersive and accurate augmented reality experience for users.

*/