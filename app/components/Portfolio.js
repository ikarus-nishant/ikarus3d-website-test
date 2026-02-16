import React, { useState, useEffect, useRef } from 'react';
import Model from './Model';
import SwipeIt from './SwipeIt';
import QRCode from 'qrcode';
import SideMenu from './SideMenu';
import SubSectionText from './text/SubSectionText';
import SubSectionSubHeading from './text/SubSectionSubHeading';
import warning from '../scripts/warning.json';
import Lottie from 'react-lottie-player';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import getBrowserEnv from '../utils/browserEnv';
import { debounce } from '../utils/debounce';
import Spaces from './Spaces';
import { current } from '@reduxjs/toolkit';
import useViewportWidth from "../hooks/useViewportWidth";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";


const env = getBrowserEnv();

const Portfolio = (props) => {
  const [currentModel, setCurrentModel] = useState(
    props.currentCategory !== 'Furniture'
      ? props.models[0]
      : props.models[props.currentSubCategory][0]
  );
  const [showStats, setShowStats] = useState(false);
  const [ viewportWidth ] = useViewportWidth(); 
  const [modelUrl, setModelUrl] = useState();
  const [loadModel, setLoadModel] = useState(false);
  const [polyCount, setPolyCount] = useState('');
  const [modelSize, setModelSize] = useState('');
  const [loadTime, setLoadTime] = useState('');
  const [QRCodeUrl, setQRCodeUrl] = useState('');
  const [checkARSupport, setCheckARSupport] = useState(false);
  const initialRender = useRef(true);
  const [cacheError, setCacheError] = useState(false);
  const _splideElRef = useRef(null);
  const headerHeight = useSelector((state) => state.header.currentHeight);  

  const [darkMode,setDarkMode] = useState(true);

  const generateQR = async (text) => {
    try {
      setQRCodeUrl(
        await QRCode.toDataURL(
          env.SITE_URL + '/ar-view/' + currentModel.src.replaceAll('/', '%5C'), //TODO: Change aR-View folder name to ar-view
          { errorCorrectionLevel: 'H' }
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const SetDarkMode = () => {
    setDarkMode((prevDarkMode)=>!prevDarkMode);
  }

  const getRenderCards = () => {
    const models =
      props.currentCategory === 'Furniture'
        ? props.models[props.currentSubCategory]
        : props.models;

    return models.map((elem, index) => {
      return (
        <div
          key={elem.src}
          onClick={() => setCurrentModel(elem)}
          className={`bg-primarysecondBackground ${
            currentModel.src === elem.src
              ? 'bg-gradient-to-r from-[#dac3e3d1] to-[#00AFD6]'
              : ''
          } p-[2px] lap:p-[2px] mb-8 tab:my-0 rounded-[5px] w-[40vw] mob:w-[37vw] tab:w-full mx-auto h-min`}
        >
          <div className='flex flex-col sakshi overflow-hidden border-1 h-full w-full cursor-pointer rounded-[5px]'>
            <div
              className={`${
                props.currentCategory === '3D Spaces'
                  ? ''
                  : 'py-2 lap:py-4 px-3 lap:px-6'
              } h-full tab:h-${
                props.showSideMenu ? '[12.875vw]' : '[16.875vw]'
              } tab:h-${
                props.showSideMenu ? '[12.875vw]' : '[14.57vwvw]'
              } xl:h-[]`}
              style={{
                backgroundColor:
                  currentModel.src === elem.src ? '#eae8ff' : '#11141A',
                height:
                  viewportWidth < 720
                    ? '15vh'
                    : viewportWidth < 1080
                    ? props.showSideMenu
                      ? '12.875vw'
                      : '16.875vw'
                    : props.showSideMenu
                    ? '12.875vw'
                    : '14.57vw',
              }}
            >
              <img
                className={` ${
                  props.currentCategory === '3D Spaces'
                    ? 'object-cover w-full'
                    : 'object-contain'
                } h-full mx-auto`}
                src={elem.pic}
                alt={elem.alt}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  const validator = require('gltf-validator');

  const showQRCode = () => {
    generateQR();
  };

  const ARModeAction = (isSupported, modelViewer) => {    
    if (isSupported) modelViewer.activateAR();
    else showQRCode();

    setCheckARSupport(false);
  };

  useEffect(() => {
    if (
      localStorage.getItem('current_model') === null ||
      typeof localStorage.getItem('current_model') === 'undefined'
    ) {
      if (props.currentCategory === 'Furniture') {
        localStorage.setItem(
          'current_model',
          JSON.stringify(props.models[props.currentSubCategory][0])
        );
      } else {
        localStorage.setItem('current_model', JSON.stringify(props.models[0]));
      }
    } else {
      if (
        JSON.parse(localStorage.getItem('current_model')).name !==
        currentModel.name
      ) {
        setCurrentModel(JSON.parse(localStorage.getItem('current_model')));
      }
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      // this prevents the useEffect with non-empty dependency array from running on the first render.
      initialRender.current = false;
    } else if (props.currentCategory === 'Furniture') {
      setCurrentModel(props.models[props.currentSubCategory][0]);
      localStorage.setItem(
        'current_model',
        JSON.stringify(props.models[props.currentSubCategory][0])
      );
    } else if (props.currentCategory !== '') {
      if (currentModel.name !== props.models[0].name) {
        setCurrentModel(props.models[0]);
      }
      localStorage.setItem('current_model', JSON.stringify(props.models[0]));
    }
  }, [props.currentCategory, props.currentSubCategory]);

  useEffect(() => {
    if (
      props.currentCategory === 'Furniture' &&
      currentModel.name !== props.models[props.currentSubCategory][0].name
    ) {
      localStorage.setItem('current_model', JSON.stringify(currentModel));
    } else if (
      currentModel.name !==
      (props.currentCategory !== 'Furniture'
        ? props.models[0].name
        : props.models[props.currentSubCategory][0].name)
    ) {
      localStorage.setItem('current_model', JSON.stringify(currentModel));
    }

    setShowStats(false);
    const startTime = performance.now();

    fetch(viewportWidth > 600 ? currentModel.src : ( currentModel.mobSrc ? currentModel.mobSrc : currentModel.src ), { cache: 'no-store' })
      .then((response) => {      
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        setLoadTime(
          Math.round((loadTime + Number.EPSILON) * 100) / 100
        ); /* TODO verify loadTime */
        const responseClone = response.clone();
        return Promise.all([responseClone.blob(), response.arrayBuffer()]); //TODO: Convert blob to ArrayBuffer
      })
      .then(([_blob, asset]) => {        
        const blob = new Blob([asset], { type: 'application/octet-stream' }); //TODO: See if we can remove the use of clone and save memory here
        setModelUrl(URL.createObjectURL(_blob));
        return validator.validateBytes(new Uint8Array(asset));
      })
      .then((report) => {        
        setLoadModel(true);
        setShowStats(true);
        setPolyCount(report.info.totalTriangleCount);
        setModelSize((report.info.resources[0].byteLength * 0.000001).toFixed(2));
      })
      .catch((error) => {
        console.log('Error while fetching model ', error, currentModel.src);
        setCacheError(true);
      }); // display the cache error banner.
  }, [currentModel]);
  return (
    <div
      className='relative h-full no-scrollbar tab:h-auto tab:pr-6 xl:pr-[2.5vw] pb-0 dark:bg-primaryDarkBg flex flex-col tab:flex-row tab:justify-around border-red-400'
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
      id={`#${currentModel.src}`}
    >
      {/* 1st div */}
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 ${
          QRCodeUrl === '' ? 'hidden' : ''
        }`}
      >
        <div className='fixed w-full top-0 bottom-0 h-full backdrop-brightness-50 z-30'></div>
        <div className='fixed top-1/4 left-0 right-0 mx-auto z-40 bg-secondaryDarkBackground rounded-[5px] flex flex-col justify-center min-w-[250px] w-[23vw] pb-smCustomHead xl:pb-mdCustomHead'>
          <div
            className='cursor-pointer text-darkHeading w-full text-end h-[30px] xl:h-[60px] text-xl flex items-end justify-end pt-[4px]'
            onClick={() => {
              setQRCodeUrl('');
              setCheckARSupport(false);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='mr-1 w-[25px] h-[25px] stroke-[1.5px] hover:stroke-[2px] transition-all duration-300 ease-out'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <SubSectionSubHeading text='Augumented Reality' />
          <img
            src={QRCodeUrl}
            className='w-full object-contain mt-[15px] xl:mt-[30px] px-10'
            alt="QR Code to be scanned by a device which supports AR"
          />
          <div className='mt-[15px] xl:mt-[30px] px-10'>
            <SubSectionText text='Point your camera at the QR code. Tap the banner that appears on your screen.' />
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 ${
          cacheError ? '' : 'hidden'
        }`}
      >
        <div className='fixed w-screen top-0 bottom-0 h-full backdrop-brightness-50 z-30'></div>
        <div className='fixed top-0 bottom-0 my-auto h-fit left-0 right-0 mx-auto z-40 bg-cardBackgroundColor rounded-[5px] flex flex-col justify-center min-w-[250px] w-[23vw] pb-mdCustomHead'>
          <div
            className='cursor-pointer text-darkHeading w-full text-end h-[30px] xl:h-[60px] text-xl flex items-end justify-end pt-[4px]'
            onClick={() => setCacheError(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='mr-1 w-[25px] h-[25px] stroke-[1.5px] hover:stroke-[2px] transition-all duration-300 ease-out'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <div className='mt-[10px] xl:mt-[30px] px-10 flex flex-col gap-[20px]'>
            <Lottie
              loop
              animationData={warning}
              play
              style={{ width: 100, height: 100 }}
              className='mx-auto'
            />
            <SubSectionText text="Clear you browser's cache to enable the model to load." />
          </div>
        </div>
      </div>
      <div
        id='sidemenu'
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          width:
            viewportWidth < 720
              ? 'auto'
              : viewportWidth < 1080
              ? props.showSideMenu
                ? '50%'
                : ''
              : props.showSideMenu
              ? '30%'
              : '0%',
        }}
        className={`hidden tab:block relative tab:w-${
          props.showSideMenu ? '[50%]' : ''
        } lap:w-[20%] transition-all ease-out duration-500 overflow-y-scroll no-scrollbar max-w-[300px] shadow-[0_0px_18px_0px_rgba(0,0,0,0.5)] bg-secondaryDarkBackground`}
      >
        {props.showSideMenu ? (
          <SideMenu
            showSideMenu={props.showSideMenu}
            setShowSideMenu={props.setShowSideMenu}
            content={props.content}
            currentCategory={props.currentCategory}
            setCurrentCategory={props.setCurrentCategory}
            currentSubCategory={props.currentSubCategory}
            setCurrentSubCategory={props.setCurrentSubCategory}
          />
        ) : (
          ''
        )}
      </div>
      <div
        className={`w-full tab:${
          props.showSideMenu ? '' : 'w-[73%]'
        } tab:mx-auto flex flex-col bg-primaryDarkBg`}
        style={{
          height:
            viewportWidth < 720
              ? `calc(70vh - ${headerHeight / 2}px)`
              : `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className='w-full mx-auto'>
          <div className='w-full flex shadow-primarysecondBackground justify-between text-left items-center gap-2 tab:gap-5 lap_gen:gap-10 dark:text-darkHeading xl:rounded-[45%] text-base xl:text-2xl mx-auto'>
            <div
              onClick={() =>
                !props.showSideMenu ? props.setShowSideMenu(true) : ''
              }
              className={`flex items-center cursor-pointer py-1 lap:py-2 gap-[10px] transition-all duration-500 ease-out border ${
                props.showSideMenu
                  ? 'hidden'
                  : ''
              } rounded-r-3xl animated-gradient px-2 xl:py-2 xl:px-3`}
            >
              <Bars3Icon className='h-6 w-6 xl:h-8 xl:w-8' aria-hidden='true' />
              <p className='w-full lap_gen:inline-block mob:hidden'>Categories</p>
            </div>
            <div className='flex w-full justify-between items-center'>
              <div className='text-white lap_gen:text-3xl mob:text-xl xl:text-4xl mob:min-w-auto flex py-4 xl:pt-8'>
                <h1 className={`text-left h-fit my-auto ${props.showSideMenu ? ' pl-4 xl:pl-8': ''}`}>Explore our Extensive 3D modeling Portfolio</h1>
              </div>
            <div
              onClick={() =>{                
                props.currentCategory !== '3D Spaces'
                  ? setCheckARSupport(true)
                  : ''
                }
              }
              className={`group relative flex items-center justify-start transition-all duration-1000 ease-out rounded-[50px] p-[.35rem] lap:px-2 lap:py-2 mob:py-2 mob:px-2 xl:p-4 ${
                props.currentCategory !== '3D Spaces'
                  ? 'bg-white cursor-pointer text-primaryBlack mob:aspect-square tab:aspect-auto'
                  : 'bg-transparent text-white border-[1.5px] border-white cursor-not-allowed opacity-50'
              } h-fit xl:w-auto mr-2`}
              style={{ marginRight: "26px" }}
            >
              <img
                className='h-6 mob:aspect-square tab:aspect-auto xl:h-8 relative'
                src={`${env.CDN_BASE_URL}/miscellaneous/ARMode.svg`}
                alt='View in AR'
              />
              <h4 className='ml-2 font-[400] text-xs tab:text-base xl:text-2xl leading-[21px] tab:inline-block mob:hidden'>
                View in AR
              </h4>
            </div>
            </div>
          </div>
          <div className='mx-4 mob:mx-10 tab:mx-auto border-b-[2px] border-secondaryDarkBackground text-white text-lg mob:text-xl xl:text-3xl mob:min-w-[266px] tab:w-[95%] flex justify-between py-4 xl:pt-8'>
            <p className='text-left h-fit my-auto'>
              {currentModel.name}
              {/* Explore our Extensive Portfolio */}
            </p>
            <div className='flex'>
              
              <div onClick={SetDarkMode} className={`gh-dark-mode-toggle-btn ${darkMode ? 'dark-mode' : ''}`}>
                <div className='flexContainer'>
                  <div className="icon-container ic1">
                    <BsFillSunFill style={{ fontSize: '18px', marginLeft: '4px' }} />
                  </div>
                  <div className="icon-container ic2">
                    <BsFillMoonFill style={{ fontSize: '16px', marginRight: '6px' }} />
                  </div>
                  <div className="slider"></div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 mob:px-9 tab:px-0 text-darkHeading mob:min-w-[266px] tab:w-[95%] mx-auto flex flex-wrap justify-start gap-1 mob:gap-2 lap:gap-3 xl:gap-6 text-[10px] mob:text-[12px] mt-4 xl:mt-6'>
          {/* <div
              className={`rounded-2xl xl:rounded-[36px] px-3 py-2 tab:px-4 tab:py-2 xl:px-8 xl:py-4 bg-tertiaryBackground flex items-center justify-center xl:text-2xl ${
                showStats
                  ? ''
                  : 'animated-skeleton bg-secondaryDarkBackground text-transparent'
              }`}
            >
              <p className={`rounded-[20px]`}>Name - {currentModel.name}</p>
            </div> */}
            <div
              className={`rounded-2xl xl:rounded-[36px] px-3 py-2 tab:px-4 tab:py-2 xl:px-8 xl:py-4 bg-tertiaryBackground flex items-center justify-center xl:text-2xl ${
                showStats
                  ? ''
                  : 'animated-skeleton bg-secondaryDarkBackground text-transparent'
              }`}
            >
              <p className={`rounded-[20px]`}>Polycount - {polyCount} Tris</p>
            </div>
            <div
              className={`rounded-2xl xl:rounded-[36px] px-3 py-2 tab:px-4 tab:py-2 xl:px-8 xl:py-4 bg-tertiaryBackground flex items-center justify-center xl:text-2xl ${
                showStats
                  ? ''
                  : 'animated-skeleton bg-secondaryDarkBackground text-transparent'
              }`}
            >
              <p className={`rounded-[20px]`}>File size - {modelSize} MB</p>
            </div>
            <div
              className={`rounded-2xl xl:rounded-[36px] px-3 py-2 tab:px-4 tab:py-2 xl:px-8 xl:py-4 bg-tertiaryBackground flex items-center justify-center xl:text-2xl ${
                showStats
                  ? ''
                  : 'animated-skeleton bg-secondaryDarkBackground text-transparent'
              }`}
            >
              <p className={`rounded-[20px]`}>Loading time - {loadTime} ms </p>
            </div>
          </div>
        </div>
        <div
          className={`grow w-full tab:w-[80%] mx-auto lap:w-full ${
            props.currentCategory === '3D Spaces' ? 'pt-4 xl:pt-6' : ''
          } ${darkMode ? '':'bg-white'}`}
        >
          {typeof modelUrl !== 'undefined' && loadModel ? (
            props.currentCategory === '3D Spaces' ? (              
              <Spaces
                src={viewportWidth > 600 ? currentModel.src : ( currentModel.mobSrc ? currentModel.mobSrc : currentModel.src )} //replace modelUrl with currentModel.src if you do not want to use the blob url. The blob and it's URL will still get generated, just not used.
                poster={currentModel.pic}
                modelKey={currentModel.name}
              />
            ) : (
              <Model
                alt={currentModel.alt}
                cameraControls
                src={viewportWidth > 600 ? currentModel.src : ( currentModel.mobSrc ? currentModel.mobSrc : currentModel.src )}
                checkARSupport={checkARSupport}
                ARModeAction={ARModeAction}
                environment='/mod/Neutral.hdr'
                rotation={currentModel.rotation}
                poster={currentModel.pic}
                disableZoom={false}
                disablePan={true}
              />
            )
          ) : (
            ''
          )}
        </div>
      </div>
      <div
        className={`tab:${
          props.showSideMenu ? 'w-[20%]' : 'w-[27%]'
        } border-cyan-400 overflow-y-hidden ${
          viewportWidth < 720 ? 'no-scrollbar' : ''
        } custom-scrollbar lap:max-w-[250px] xl:max-w-[800px] bg-primaryDarkBg`}
        style={{
          height:
            viewportWidth < 720
              ? `calc(30vh - ${headerHeight / 2}px)`
              : `calc(100vh - ${headerHeight}px)`,
          width:
            viewportWidth < 720
              ? ''
              : viewportWidth < 1080
              ? props.showSideMenu
                ? '25%'
                : '27%'
              : props.showSideMenu
              ? '17.5%'
              : '20%',
        }}
      >
        {viewportWidth < 720 ? (
          <SwipeIt
            type='slide'
            direction='ltr'
            splideElRef={_splideElRef}
            autoWidth={true}
            arrows={false}
            autoScroll={false}
            padding='0%'
            paddingLessThan1080='2.5%'
            paddingLessThan720='0%'
            pagination={false}
            perMove={1}
            gap={'0.5rem'}
          >
            {getRenderCards()}
          </SwipeIt>
        ) : (
          <div
            className='h-full overflow-y-scroll flex flex-col gap-6 lap:gap-8 xl:gap-12 pl-4 custom-scrollbar pb-4 lap:pb-5 xl:pb-7'
            style={{ direction: 'rtl' }}
          >
            {getRenderCards()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
