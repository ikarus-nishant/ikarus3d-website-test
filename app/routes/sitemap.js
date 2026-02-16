import React, { useEffect, useState } from "react";
import layout from "~/components/ContactBannerHOC";
import { parseString } from 'xml2js';
import HeroSectionHeading from "../components/text/HeroSectionHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import SubSectionText from "../components/text/SubSectionText";
import { Footer } from "~/components/Footer";

const Sitemap = () => {
  
  const [parsedXML, setParsedXML] = useState();
  const [parsedPages, setParsedPages] = useState();
  
  useEffect(() => {        
    const getXML = async () =>{    
      const response = await fetch('/ikarus3d_sitemap.xml');
      const res = await response.text();      
      parseString(res, (error, result) => {
        if (error) {
          console.error(error);
        } else {

          setParsedXML(result);
          var parsed_pages = []; 
          var number_of_urls = result.urlset.url.length;

          for(var i = 0; i < number_of_urls; i++){            
                      
            var currUrl = result.urlset.url[i].loc[0];            
            var temp = currUrl.split('/');
            var page = temp[temp.length-1];
            page = page.split('-');
            var temp3 = []
            for(var j=0; j<page.length;j++){
              var upperWord = page[j].charAt(0).toUpperCase() +page[j].slice(1);
              temp3.push(upperWord);
            }
            var parsed_page = temp3.join(' ');
            parsed_pages.push(parsed_page);            
            setParsedPages(parsed_pages)
          }          
        }
      });
    }

    getXML();
  }, [])
  


  return (    
    <>
    <div className="flex flex-col lap:gap-6 justify-center lap:justify-start py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-24 lap:px-32 xl:px-[10vw] xxl:px-[18vw] bg-[#F8F9FC] dark:bg-primarysecondBackground">
      <div className="text-center lap:text-left">
        <SubSectionHeading text="Pages" />
      </div>      
      <div className="flex flex-col gap-[15px] mob:w-[240px] text-center lap:text-left mx-auto lap:mx-0 mt-[30px]">
        {typeof parsedPages !== 'undefined' && parsedPages !== null && typeof parsedXML !== 'undefined' && parsedXML !== null ? 
        
          parsedXML.urlset.url.map((page,index)=>(
            <a href={page.loc}>
              <h4 className="text-primaryBlack dark:text-darkSubHeading dark:hover:text-primaryBlue font-[400] text-xs tab:text-base xl:text-2xl leading-[21px]">      
                {parsedPages[index]}
              </h4>              
            </a>            
          ))

        :""}
      </div>      
    </div>
    <Footer />
    </>
    
    );
};

export var sMap = {};
export default Sitemap;
