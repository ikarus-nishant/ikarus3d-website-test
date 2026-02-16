import React from "react";
import { Footer } from "../components/Footer";
import getBrowserEnv from "~/utils/browserEnv";

const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/privacy-policy"},
      {name:"priority", content: 1},
  ]
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/privacy-policy` }
  ]
}

export const meta = () => [
  {title: "Privacy Policy | Ikarus 3D"},
  {name:"description", content:"Read the Privacy Policy to understand how we handle your personal information. Learn about data collection, cookies, and more."},
  {property:"og:title", content: "Privacy Policy | Ikarus 3D"},
  {property:"og:url", content: `${env.SITE_URL}/privacy-policy/`},
  {property:"og:description", content:"Read the Privacy Policy to understand how we handle your personal information. Learn about data collection, cookies, and more."},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"og:type", content: "website"},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},  
  {property:"twitter:title", content: "Privacy Policy | Ikarus 3D"},
  {property:"twitter:description", content:"Read the Privacy Policy to understand how we handle your personal information. Learn about data collection, cookies, and more."},
];

const PrivacyPolicy = () => {  

  return (
    <>
      <div className="px-10 mob_old:px-16 tab_old:px-24 lap:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] py-custom xl_old:py-xlCustom dark:bg-primaryDarkBg bg-secondaryBackground dark:text-darkSubHeading text-primaryBlack font-sans">
        <h1 className="mb-4 text-center text-2xl font-semibold dark:text-darkHeading">
          INTRODUCTION
        </h1>
        <p className="mb-4 text-lg">
          <span>
            The Privacy Policy covers the practices for handling and securing
            your Personal Information by IKarus Unkindled (Ikarus 3D) and its
            website
            <a
              className="ml-1 text-ikarus-blue hover:underline"
              href={env.SITE_URL}
            >
              (www.ikarus3D.com)
            </a>
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            This Privacy Policy is applicable to users/persons that use any
            product or services from www.ikarus3d.com, mobile site, mobile app &
            offline channels including call centers and other offices.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            As a user/persons or customer of www.ikarus3d.com, the person agrees
            with this Privacy Policy and the terms and conditions mentioned
            herein.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            This privacy statement does not apply to the websites, mobile sites
            and mobile apps of our other third parties, even if their websites
            are linked to www.ikarus3d.com. We recommend you review the privacy
            statements of the other parties with whom you interact.
          </span>
        </p>
        <p className="mb-4 text-xl">
          <span className="font-semibold dark:text-darkHeading">
            WHAT PERSONAL INFORMATION WE COLLECT FROM YOU AND HOW WE USE IT?
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            ‘Personal Information’ means and includes all information that can
            be linked to a specific individual or to identify any individual,
            such as name, address, mailing address, telephone number, email
            address, and any and all details that may be necessary from the
            user.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            When you visit www.ikarus3d.com website or its sub domain’s, we may
            collect information regarding the domain and host from which you
            access the internet, the internet protocol address of the computer
            or internet service provider you are using, and anonymous
            statistical data. The website and mobile site uses cookie and
            tracking technology depending on the features offered. Personal
            Information will not be collected via cookies and other tracking
            technology; however, if you previously provided personally
            identifiable information, cookies may be tied to such information.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            When browsing our Website, you are not required to provide any
            Personal Information unless and until you choose to make a sign up
            or contact us
          </span>
        </p>
        <p className="mb-4">
          <span className="text-xl font-semibold dark:text-darkHeading">
            {" "}
            SURVEYS
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            www.ikarus3d.com values opinions and comments from members, so we
            frequently conduct surveys, both online and offline. Participation
            in these surveys is entirely optional. Typically, the information is
            aggregated, and used to make improvements to website, mobile site
            and mobile app and its services and to develop appealing content,
            features and promotions for members. Survey participants are
            anonymous unless otherwise stated in the survey.
          </span>
        </p>
        <p className="mb-4 ">
          <span className="text-xl font-semibold dark:text-darkHeading">
            {" "}
            COOKIES
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            Cookies are small pieces of information that are stored by your
            browser on your device’s hard drive. Cookies are only read by the
            server that placed them, and are unable to do such things as run
            programs on your computer, plant viruses, or harvest your Personal
            Information. The use of cookies is very common on the Internet.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            www.ikarus3d.com use of cookies is similar to that of any other
            reputable online company. No personally identifiable information
            (PII) about you (e.g., name, address, etc.) is gathered or stored in
            the cookies placed by a website or mobile site and, as a result,
            none can be passed on to any third parties. Cookies allow us to
            serve you better and more efficiently, and to personalize your
            experience at our website and mobile site. www.ikarus3d.com uses
            cookies to personalize your experience on the website and mobile
            site, and with respect to advertisements.
          </span>
        </p>
        <p className="mb-4 ">
          <span className="text-xl font-semibold dark:text-darkHeading">
            OTHERS
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            From time to time we may add or enhance services available on the
            Website. To the extent these services are provided and used by you,
            we will use the information you provide to facilitate the service
            requested. For example, if you email us with a question, we will use
            your email address, name, nature of the question, etc. to respond to
            your question. We may also store such information to assist us in
            making the Website better and easier to use.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span>
            We review our Privacy Policy from time to time, and we may make
            periodic changes to the policy in connection with that review.
            Therefore, you may wish to bookmark this page and/or periodically
            review this page to make sure you have the latest version.
          </span>
        </p>
        <p className="mb-4 text-lg">
          <span className="mr-1 text-lg">
            You may always submit concerns regarding this Privacy Policy via
            email to
          </span>
          <a
            className="text-ikarus-blue hover:underline"
            href="mailto:info@ikarus3d.com"
          >
            info@ikarus3d.com
          </a>

          <span className="ml-1 text-lg">
            and we will respond to all reasonable concerns or inquiries.
          </span>
        </p>
        <p className="text-lg">
          <span>Thank you for using the Website!</span>
        </p>
        <h2 className="text-center text-2xl dark:text-darkHeading">
          <b>© IKARUS 3D www.ikarus3d.com. All Rights Reserved.</b>
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
