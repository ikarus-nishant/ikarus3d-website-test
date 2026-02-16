import {
  MetaFunction,
  V2_MetaFunction,
  LinksFunction,
  json,
} from "@remix-run/node";
import { gtm } from "./scripts/googleTagManager.js";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import app from "./styles/app.css";
import extra from "./styles/extra.css";

import Cookies from "js-cookie";

import Header from "~/components/Header";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useLoaderData } from "@remix-run/react";
import { getBrowserEnvironment } from "./env.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: app },
    { rel: "stylesheet", href: extra },
    { rel: "preconnect", href: "https://cdn.jsdelivr.net" },
    { rel: "stylesheet", href: extra },   
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Zen+Tokyo+Zoo&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;600;700&family=Gantari:wght@400;500;600;700;800&display=swap",
    },
    // { rel:"alternate", href:"https://ikarus3d.com/", hreflang:"x-default" },
    // { rel:"alternate", href:"https://ikarus3d.com/in/", hreflang:"en-in" },
    // { rel:"alternate", href:"https://ikarus3d.com/us/", hreflang:"en-us" },
    // { rel:"alternate", href:"https://ikarus3d.com/gb/", hreflang:"en-gb" },
    // { rel:"alternate", href:"https://ikarus3d.com/au/", hreflang:"en-au" },
    // { rel:"alternate", href:"https://ikarus3d.com/ie/", hreflang:"en-ie" },
    // { rel:"alternate", href:"https://ikarus3d.com/nl/", hreflang:"en-nl" },
    // { rel:"alternate", href:"https://ikarus3d.com/de/", hreflang:"en-de" },
    // { rel:"alternate", href:"https://ikarus3d.com/fi/", hreflang:"en-fi" },
    // { rel:"alternate", href:"https://ikarus3d.com/fr/", hreflang:"en-fr" },    
    { rel:"icon", type:"image/png", sizes:"16x16", href:`https://ikarus3d.com/favicon_16_16.png` },
    { rel:"icon", type:"image/png", sizes:"32x32", href:`https://ikarus3d.com/favicon_32_32.png` },             
    { rel:"icon", type:"image/x-icon", sizes:"180x180", href:`https://ikarus3d.com/favicon_180_180.png` }, 
    { rel:"apple-touch-icon", sizes:"16x16", href:"https://ikarus3d.com/favicon_16_16.png" },
    { rel:"apple-touch-icon", sizes:"32x32", href:"https://ikarus3d.com/favicon_32_32.png" },
    { rel:"apple-touch-icon", sizes:"180x180", href:"https://ikarus3d.com/favicon_180_180.png" },    
    { rel:"mask-icon", href:"https://ikarus3d.com/favicon.ico", color:"#000000" },
    { rel:"shortcut icon", href:"https://ikarus3d.com/favicon.ico"}
  ];
};

// export const meta: MetaFunction = () =>{
//   return [
//     {"charset": "utf-8"},
//     {name:"viewport", content: "width=device-width,initial-scale=1"},
//     {"robots": "max-image-preview:large"},
//     {"og:site_name": "Ikarus 3D"},
//     {"og:locale": "en_US"},
//   ]
// };

export async function loader() {
  return json({
    ENV: getBrowserEnvironment(),
  });
}
export function App() {
  const data = useLoaderData();



  const [URLSearchParams, SetURLSearchParams] = useSearchParams()
  const utm_source = URLSearchParams.get("utm_source") || "not found"
  const utm_medium = URLSearchParams.get("utm_medium") || "not found"
  const utm_campaign = URLSearchParams.get("utm_campaign") || "not found"
  // const queryUtmUrl = utm_url_source && utm_url_medium && utm_url_campaign? `?utm_source=${utm_url_source}&utm_medium=${utm_url_medium}&utm_campaign=${utm_url_campaign}`:""
  const queryUtmParams = {utm_source,utm_medium,utm_campaign}

  console.log(queryUtmParams || "No parameters found")

  
  useEffect(()=>{
    // if(!localStorage.getItem("utm")){
    //   localStorage.setItem("utm",JSON.stringify(queryUtmParams))
    // }
    if(utm_source && utm_medium && utm_campaign){
      console.log("SETTING COOKIE------------------------------------")
      Cookies.set("utm",queryUtmParams,{expires:1})
      console.log()
    }
  },[])
  
  // const cData = Cookies.get("utm")
  // console.log("Cookie Data",cData && JSON.parse(cData))

  useEffect(() => {
    gtm(window, document, "script", "dataLayer", data.ENV.GTM_TAG);
    var gtmScript = document.createElement('script');
    gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-10905166632";
    gtmScript.async = true;
    document.head.appendChild(gtmScript);
    var gtmScriptContent = document.createElement('script');
    gtmScriptContent.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'AW-10905166632');
    `
    document.head.appendChild(gtmScriptContent);

    console.log("nodeenv ", data.ENV.NODE_ENV);    

    setTimeout(() => {
      var leafletCss = document.createElement("link");
      leafletCss.rel = "stylesheet";
      leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      leafletCss.integrity =
        "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";    
      leafletCss.crossOrigin = "";
      document.body.appendChild(leafletCss);

      var leafletScript = document.createElement("script");
      leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      leafletScript.integrity =
        "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      leafletScript.crossOrigin = "";
      leafletScript.defer = true;
      leafletScript.async=true;
      document.body.appendChild(leafletScript);

      var osanoGTMScript = document.createElement("script");
      osanoGTMScript.textContent = 
      `window.dataLayer = window.dataLayer ||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent','default',{
        'ad_storage':'denied',
        'analytics_storage':'denied',
        'ad_user_data':'denied',
        'ad_personalization':'denied',
        'personalization_storage':'denied',
        'functionality_storage':'granted',
        'security_storage':'granted',
        'wait_for_update': 500
      });
      gtag("set", "ads_data_redaction", true);
    `

    document.body.appendChild(osanoGTMScript);
      var osanoScript = document.createElement("script");
      osanoScript.src =
      "https://cmp.osano.com/AzZmTeTVREoLm56P/c689861b-55b2-4f82-a081-04936fc0cf13/osano.js";
      osanoScript.defer = true;
      osanoScript.async=true;
      document.body.appendChild(osanoScript);
    }, 100);

    var splideScript = document.createElement("link");
    splideScript.rel = "stylesheet";
    splideScript.href =
      "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
    document.body.appendChild(splideScript);
  }, []);

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />        
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta property="og:site_name" content="Ikarus 3D: 3D Modeling Services for Realistic Product Visualizations"></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:determiner" content="a" />                
        <meta name="robots" content={data.ENV.SITE_URL === "https://beta.ikarus3d.com" ? "noindex" : "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
        <meta name="msapplication-TileImage" content={`${data.ENV.SITE_URL}/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="p:domain_verify" content="5e837122654af0f95dfe42cd08a56446"/>   
        <Meta />
        <Links />
      </head>


      {/* Load dark theme by default */}
      <body className={`font-gantari dark mx-auto self-center`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${data.ENV.GTM_TAG}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="max-w-[1920px] mx-auto">{children}</div>
    </>
  );
}

export default function AppWrapper() {
  


  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
