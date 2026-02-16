import Body from "~/components/Body";
import type { MetaFunction } from "@remix-run/node";
import getBrowserEnv from "../utils/browserEnv";
import {siteMapTags as nextRoute } from "./about-us";
const env = getBrowserEnv();

export function links() {
    return [
      { rel:"canonical", href:`${env.SITE_URL}` }
    ]
}

export const siteMapTags = () => {
    return [
        {name:"route", content: "/"},
        {name:"priority", content: 1},
        {name:"next-route", content: nextRoute()}
    ]
};

export const meta: MetaFunction = () => {
  return [
    {"title": "3D Modeling Services for Realistic Product Visualizations"},
    {name:"description", content:"Step up your brand visibility to the next level with Ikarus 3D modeling services. Engage customers and unlock new possibilities for your e-commerce platform."},
    {property:"og:title", content: "3D Modeling Services for Realistic Product Visualizations"},
    {property:"og:description", content:"Step up your brand visibility to the next level with Ikarus 3D modeling services. Engage customers and unlock new possibilities for your e-commerce platform."},
    {property:"og:url", content: env.SITE_URL},
    {property:"og:image", content:"/images/Header_Logo_D.png"},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"twitter:title", content: "3D Modeling Services for Realistic Product Visualizations"},
    {property:"twitter:description", content:"Step up your brand visibility to the next level with Ikarus 3D modeling services. Engage customers and unlock new possibilities for your e-commerce platform."},
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph":[
            {
                "@type": "Organization",
                "name": "Ikarus 3D: 3D Modeling Services for Realistic Product Visualizations",
                "description": "Your trusted source for high-quality 3D modeling services.",
                "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd floor, H & H Business Arcade, Plot D-141",
                "addressLocality": "Mohali",
                "addressRegion": "Punjab",
                "postalCode": "160055",
                "addressCountry": "India"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/ikarus3d/",
                    "https://www.instagram.com/ikarus_3d/",
                    "https://www.facebook.com/ikarus3d",
                    "https://twitter.com/ikarus_3d",
                    "https://www.youtube.com/@ikarus3d636",
                    "https://www.behance.net/ikarus_3d",
                    "https://sketchfab.com/ikarus3d",
                    "https://www.artstation.com/ikarus3d",
                    "https://discord.gg/mDFrhzzBS3"
                ]            
            },        
            {
                "@type": "WebPage",
                "url": env.SITE_URL,
                "name": "Ikarus 3D Homepage",
                "description": "Your trusted source for high-quality 3D modeling services.",
                "mainEntity": [
                    {
                        "@type": "Blog",
                        "headline": "Highlights from our blog",
                        "description": "Explore the latest insights and trends in 360 virtual tours, augmented reality, 3D metaverse, and virtual reality experience with our blog highlights.",
                        "blogPost": [
                            {
                                "@type": "BlogPosting",
                                "headline": "A Glance at 360 Virtual Tour and How it Transforms Future Possibilities",
                                "description": "Explore the transformative potential of 360 virtual tours. Discover how custom 3D modeling services are redefining the future of immersive experiences.",
                                "articleSection": "360 Virtual Tours",
                                "wordCount": "Estimated word count if available",
                                "datePublished": "Publication date if available",
                                "author": {
                                    "@type": "Person",
                                    "name": "Samrat"
                                },
                                "image": "https://s3-ap-south-1.amazonaws.com/ikarus3d-blog-prod/2023/10/1--13-.jpg"
                            },
                            {
                                "@type": "BlogPosting",
                                "headline": "The Ultimate Guide to How Augmented Reality Works",
                                "description": "Augmented reality is a trending technology. Learn the workings of AR applications and how they're changing the world. Dive into how augmented reality works.",
                                "articleSection": "Augmented Reality",
                                "wordCount": "Estimated word count if available",
                                "datePublished": "Publication date if available",
                                "author": {
                                    "@type": "Person",
                                    "name": "Samrat"
                                },
                                "image": "https://s3-ap-south-1.amazonaws.com/ikarus3d-blog-prod/2023/09/1--12-.jpg"
                            },
                            {
                                "@type": "BlogPosting",
                                "headline": "Transform Your Metaverse Presence with Cutting-Edge Animation & Rigging Services",
                                "description": "Boost your presence with excellent 3D avatar creators. We create immersive experiences that engage audiences on the digital frontier.",
                                "articleSection": "3D Metaverse",
                                "wordCount": "Estimated word count if available",
                                "datePublished": "Publication date if available",
                                "author": {
                                    "@type": "Person",
                                    "name": "Samrat"
                                },
                                "image": "https://s3-ap-south-1.amazonaws.com/ikarus3d-blog-prod/2023/09/1--11-.jpg"
                            },
                            {
                                "@type": "BlogPosting",
                                "headline": "Dive into the Future of Gaming with an Immersive Virtual Reality Experience",
                                "description": "Experience the gaming revolution with immersive VR 3D modeling. Dive into the future of gaming and explore new dimensions of entertainment.",
                                "articleSection": "Virtual Reality Experience",
                                "wordCount": "Estimated word count if available",
                                "datePublished": "Publication date if available",
                                "author": {
                                    "@type": "Person",
                                    "name": "Samrat"
                                },
                                "image": "https://s3-ap-south-1.amazonaws.com/ikarus3d-blog-prod/2023/09/1--10-.jpg"
                            }
                        ]
                    }                    
                ]
            },     
            {
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Product",
                    "name": "3D Modeling Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",                    
                        "ratingCount": 4,
                        "reviewCount": 4,
                        "ratingValue": 4.5
                    }                     
                },
                "author": {
                    "@type": "Person",
                    "name": "Erin Sudeck",
                    "jobTitle": "Head of 3D",
                    "affiliation": {
                        "@type": "Organization",
                        "name": "VNTANA"
                    }
                },                        
                "reviewBody": "The team is super responsive offering a genuinely fast turnaround. Our clients typically provide us eComm links to work with, and that's all the team needs to deliver the assets.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                }
            },
            {
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Product",
                    "name": "3D Modeling Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",                    
                        "ratingCount": 4,
                        "reviewCount": 4,
                        "ratingValue": 4.5
                    }                     
                },
                "author": {
                    "@type": "Person",
                    "name": "Gabriele Kraujelyte",
                    "jobTitle": "Project Manager",
                    "affiliation": {
                        "@type": "Organization",
                        "name": "SAYDUCK"
                    }
                },                                                                                                                        
                "reviewBody": "I really appreciate the team's willingness to improve, its attention to detail, and its professional approach to business. We're continuously in talks on how to upgrade our partnership.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                }
            },
            {
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Product",
                    "name": "3D Modeling Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",                    
                        "ratingCount": 4,
                        "reviewCount": 4,
                        "ratingValue": 4.5
                    }                     
                },
                "author": {
                    "@type": "Person",
                    "name": "Breno Glennon",
                    "jobTitle": "Project and Client Success Manager",
                    "affiliation": {
                        "@type": "Organization",
                        "name": "PLATTAR"
                    }
                },                        
                "reviewBody": "I like how you focus on communicating more to keep us and the team in the loop. I commend the quality of work and ability to deliver output on time.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.9",
                    "bestRating": "5"
                }
            },
            {
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Product",
                    "name": "3D Modeling Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",                    
                        "ratingCount": 4,
                        "reviewCount": 4,
                        "ratingValue": 4.5
                    }                     
                },
                "author": {
                    "@type": "Person",
                    "name": "Eros",
                    "jobTitle": "Digital Project Manager",
                    "affiliation": {
                        "@type": "Organization",
                        "name": "Future Fashion Solutions"
                    }
                },                        
                "reviewBody": "I like the speed with which you realize the models. I'd suggest improvement in how the models are scaled.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                }

            },
            {
                "@type": "Service",
                "serviceType": "AR 3D Modeling Services",
                "description": "Our AR 3D modeling services enable you to bring digital objects into the real world through augmented reality. We create highly detailed 3D models that seamlessly integrate with AR applications and enhance user experiences.",
                "url": `${env.SITE_URL}/augmented-reality-3d-modeling-services`
            },
            {
                "@type": "Service",
                "serviceType": "VR Modeling Services",
                "description": "With our VR modeling services, we craft immersive virtual reality experiences. Our 3D models are optimized for VR environments, ensuring realistic and engaging simulations, from gaming to architectural visualization.",
                "url": `${env.SITE_URL}/virtual-reality-3d-modeling-services`
            },
            {
                "@type": "Service",
                "serviceType": "Metaverse 3D Services",
                "description": "Dive into the metaverse with our Metaverse 3D services. We specialize in creating customizable 3D avatars and environments that empower you to express your digital identity and explore virtual realms.",
                "url": `${env.SITE_URL}/metaverse-3d-avatars`
            },
            {
                "@type": "Service",
                "serviceType": "3D Scan Cleanup",
                "description": "3D Scan Cleanup: Our 3D scan cleanup services transform raw 3D scans into flawless and precise 3D models. We meticulously refine mesh structures and textures, ensuring that your 3D models meet the highest standards of accuracy and quality.",
                "url": `${env.SITE_URL}/3d-scan-cleanup-services`
            },
            {
                "@type": "Service",
                "serviceType": "VTO",
                "description": " Experience the future of online shopping with our VTO services. We offer virtual try-on solutions that allow customers to visualize products like apparel, accessories, and more in a virtual space before making a purchase.",
                "url": `${env.SITE_URL}/virtual-try-on-solutions`
            },
            {
                "@type": "Service",
                "serviceType": "Virtual Space",
                "description": "Step into the dynamic world of virtual spaces, where reality meets digital innovation. Our virtual space services enable immersive experiences, whether it's for training, remote collaboration, real estate visualization, or other engaging purposes.",
                "url": `${env.SITE_URL}/3d-virtual-spaces`
            }              
        ]    
    }                   
    }
  ]

};

export default function Index() {
  return (
    <div>
      <Body />
    </div>
  );
}
