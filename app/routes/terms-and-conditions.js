import React from "react";
import { Footer } from "../components/Footer";
import getBrowserEnv from "~/utils/browserEnv";
import {siteMapTags as nextRoute } from "./privacy-policy";
const env = getBrowserEnv();

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/terms-and-conditions` }
  ]
}

export const siteMapTags = () => {
  return [
      {name:"route", content: "/terms-and-conditions"},
      {name:"priority", content: 1},
      {name:"next-route", content: nextRoute()}
  ]
};

export const meta = () => [
  {title: "Terms of Service | Ikarus 3D"},
  {name:"description", content:"Read our terms of service to understand policies, user agreements, ownership of rights, refund policy, privacy policies, & more. Read before using our services."},
  {property:"og:title", content: "Terms of Service | Ikraus 3D"},
  {property:"og:url", content: `${env.SITE_URL}/terms-and-conditions/`},
  {property:"og:description", content:"Read our terms of service to understand policies, user agreements, ownership of rights, refund policy, privacy policies, & more. Read before using our services."},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"og:type", content: "website"},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},  
  {property:"twitter:title", content: "Terms of Service | Ikraus 3D"},
  {property:"twitter:description", content:"Read our terms of service to understand policies, user agreements, ownership of rights, refund policy, privacy policies, & more. Read before using our services."},
];

const TermsAndConditions = () => {
  return (
    <>
      <div className="px-10 mob_old:px-16 tab_old:px-24 lap:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] py-custom xl_old:py-xlCustom dark:bg-primaryDarkBg bg-secondaryBackground dark:text-secondaryBackground text-primaryBlack font-sans">
        <h1 className="text-center text-2xl">TERMS AND CONDITIONS OF USE</h1>
        <h1 className="mb-4 text-center text-2xl">“USER AGREEMENT”</h1>
        <p className="mb-4 text-2xl font-semibold">Introduction:</p>

        <p className="mb-4 text-lg">
          Ikarus 3D and{" "}
          <a
            className="text-ikarus-blue hover:underline"
            href={env.SITE_URL}
          >
            www.ikarus3D.com
          </a>
          (‘Website’) is a service owned, operated, and managed by Ikarus 3D and
          Partners (‘Ikarus 3D’ or ‘we’ or ‘us’). In using/accessing the
          website, you are deemed to have accepted the terms and conditions of
          the agreement listed below or as may be revised from time to time
          (‘User Agreement’), which is, for an indefinite period and you
          understand and agree that you are bound by such terms till the time
          you access this Website. If you have any queries about the terms and
          conditions of this User Agreement or have any comments or complaints
          on or about the Website, please email us at info@ikarus3d.com. We
          reserve the right to change the terms and conditions of this User
          Agreement from time to time without any obligation to inform you and
          it is your responsibility to look through them as often as possible.
        </p>
        <p className="mb-4 text-2xl font-semibold">
          Ownership of rights and services:
        </p>
        <p className="mb-4 text-lg">
          Any use of this Website or its contents, including copying or storing
          it or them in whole or part, other than for your own personal,
          non-commercial use is prohibited without the explicit permission of
          Ikarus 3D. All information displayed, transmitted, or carried on the
          Website is protected by copyright and other intellectual property
          laws. Copyrights and other intellectual property in respect of some of
          the content on the Website may be owned by third parties. This site is
          designed, updated, and maintained by Ikarus 3D or its licensors. You
          shall not modify, publish, transmit, transfer, sell, reproduce, create
          derivative work from, distribute, repost, perform, display, or in any
          way commercially exploit any of the content available on the Website,
          following are the services offered by Ikarus 3D and forms the part and
          parcel of the website or its content :
        </p>
        <ul className="mb-4 pl-8 text-lg">
          <li>AV 3D Modeling Services</li>
          <li>VR 3D Modeling Services</li>
          <li>3D File optimization</li>
          <li>3D scan clean-ups</li>
          <li>VTO-ready 3D assets</li>
          <li>Metaverse-ready 3D avatars</li>
          <li>3D NFT art</li>
        </ul>
        <p className="mb-4 text-2xl font-semibold">
          Accuracy of content and invitation to offer:
        </p>
        <p className="mb-4 text-lg">
          We have taken all care and precaution to try and provide accurate data
          and information. In the preparation of the content of this Website, in
          particular, to ensure that all products have been fairly described.
          Services may vary from that as shown. The services given are
          approximate only. We have made every effort to display it as
          accurately as possible on the Website. However, as the actual services
          you see will depend on your monitor, we cannot guarantee that your
          monitor’s display is of any color. All products/services and
          information displayed on the Website constitute an invitation to
          offer. Your order for purchase constitutes your offer which shall be
          subject to the terms and conditions of this User Agreement. We reserve
          the right to accept or reject your offer in part or in full. Our
          acceptance of your order will take place upon separate communication
          done with you. No act or omission of Ikarus 3D prior to the actual
          start of the services will constitute acceptance of your offer. If you
          have supplied us with your email address or phone number, we will
          notify you by email and/or phone number, as the case may be, as soon
          as possible to confirm receipt of your order and email/contact you
          again to confirm the order.
        </p>
        <p className="mb-4 text-2xl font-semibold">General Terms of Use:</p>
        <ul className="pl-8 text-lg">
          <li>
            Being eligible to use and by using the website/ transacting on the
            Mobile App or through any other mode of communication/ by making any
            purchase during the aforesaid tenure, User hereby agree to be bound
            by this Terms of Use;
          </li>
          <li>
            The user is hereby authorized to use the website for a lawful
            purpose and for the purposes as mentioned under the policies of the
            Ikarus 3D and Google only, any violation of the policy will lead to
            strict legal action against the User in terms of the policies and
            applicable laws; o Ikarus 3D strives to provide best services to
            users availing from the Website.
          </li>
          <li>
            Ikarus 3D has a network of vendors and reserves the right to pass on
            the orders to any of the vendors for fulfillment.
          </li>
          <li>
            We don’t run the promotions that prompt users to initiate a
            purchase, download, or other commitment without first providing all
            relevant information and without obtaining the user’s explicit
            consent promotions that represent our services in a way that is not
            accurate, realistic, and truthful;
          </li>
          <li>
            Ikarus 3D may, at any time due to various reasons, including but not
            limited to technical errors, unavailability of resources or for any
            other reasons whatsoever, cancel the orders placed by Users. Ikarus
            3D’s decision of cancellation of order shall be final and Ikarus 3D
            shall not be liable for such cancellation(s) whatsoever;
          </li>
          <li>
            Expected delivery time as mentioned on the website may vary than the
            usual time of delivery; separate agreements must be executed for
            every project.
          </li>
          <li>
            Ikarus 3D strives to provide accurate services and information,
            typographical and other errors may occur. In the event that a
            service is listed with incorrect information due to an error in
            service information, Ikarus 3D may, at its discretion, either
            contact User for instructions or cancel the User’s order and will
            notify the User about such cancellation;
          </li>
          <li>
            Cancellation by Ikarus 3D: There may be certain orders that Ikarus3D
            is unable to accept and must cancel. Ikarus 3D reserves the right,
            at its sole discretion, to refuse or cancel any order for any reason
            whatsoever, without assigning any reason to the User, User accepts
            and undertakes that the same is acceptable and he/ she/ it will not
            contest/ raise any dispute on the same. The situations that may
            result in cancellation of User’s order includes, without limitation,
            nonavailability of the service, inaccuracies or errors in pricing
            information, or problems identified by Ikarus 3D’s credit and fraud
            avoidance department;
          </li>
          <li>
            Ikarus3D may also require additional verifications or information
            before accepting any order. Ikarus3D will contact the User to accept
            the User’s order. If the order is cancelled after credit card has
            been charged, the said amount will be reversed back in User’s credit
            card account;
          </li>
          <li>
            Cancellation by the User: In case of requests for order
            cancellations, Ikarus 3D at its sole discretion, reserves the right
            to accept or reject requests for order cancellations for any reason
            whatsoever, without assigning any reason to the User. As part of
            usual business practice, if Ikarus3D receives a cancellation notice
            and the order has not been processed/ approved by Ikarus 3D, Ikarus
            3D shall cancel the order and refund shall be initiated according to
            the refund policy;
          </li>

          <li>
            Ikarus 3D will not be able to cancel orders that have already been
            processed, it is pertinent to note that the Ikarus 3D has the full
            right to decide whether an order has been processed or not. User
            hereby agree and undertakes that the decision taken by the Ikarus3D
            is acceptable to User and User shall not create any dispute on the
            decision taken by Ikarus3D on cancellation;
          </li>
          <li>
            Ikarus 3D reserve the right, at its sole discretion, to change,
            modify, add or remove portions of this document, at any time without
            any prior written notice to user;
          </li>
          <li>
            Limitation of Liability: Under no circumstances Ikarus3D liability
            shall exceed giving the User a replacement of the same service and
            of the same value;
          </li>
          <li>
            These terms and conditions are subject to Indian laws and any
            dispute shall be subject to jurisdiction of the courts in Mohali
            (India) only.
          </li>
        </ul>
        <p className="mb-4 mt-4 text-2xl font-semibold ">Conditions for Availing of a Free Sample:</p>
        <ul className="pl-8 text-lg">
          <li>A free sample/model is based on due diligence from the company.</li>
          <li>A free sample/model is based on the current/ future scope of the project.</li>
          <li>A free sample/model is based on complete analysis with respect to the details received with the needs/requirements of the project.</li>
          <li>A free sample/model depends on the time required to build it.</li>
          <li>A free sample/model is subjected to development after direct communication via any channel.</li>
          <li>A free sample/model is subjected to development after a complete sample/model understanding.</li>
        </ul>
        <p className="pl-8 my-4 text-lg font-semibold "># In case of any query before/during the initiation of creating the sample, we advise you to speak to us directly or <a href="https://calendly.com/archna_luthra" rel="noopener noreferrer" target="_blank" className="hover:underline text-primaryBlue">book a call</a>.</p>
        <p className="pl-8 my-4 text-lg font-semibold "># In case of any query about T&C, you can mail us at <a href="mailto:hello@ikarus3d.com" className="hover:underline text-primaryBlue">hello@ikarus.com</a>.</p>
        <p className="my-4 text-lg font-semibold ">Usage Restrictions:</p>
        <p className="text-lg ">
          You shall not use the Website for any of the following purposes:
        </p>
        <ul className="pl-8 text-lg">
          <li>
            Disseminating any unlawful, harassing, libelous, abusive,
            threatening, harmful, vulgar, obscene, or otherwise objectionable
            material.
          </li>
          <li>
            Transmitting material that encourages conduct that constitutes a
            criminal offence, results in civil liability or otherwise breaches
            any relevant laws, regulations or code of practice.
          </li>
          <li>
            Gaining unauthorised access to other computer / network systems. o
            Interfering with any other person’s use or enjoyment of the Website.
          </li>
          <li>
            Breaching any applicable laws. o Interfering or disrupting networks
            or websites connected to the Website.
          </li>
          <li>
            Making, transmitting or storing electronic copies of materials
            protected by copyright without the permission of the owner.
          </li>
        </ul>
        <p className="my-4 text-lg">
          You are not permitted to host, display, upload, modify, publish,
          transmit, update or share any information on the Website that o
          belongs to another person and to which you do not have any right to;
        </p>
        <ul className="pl-8 text-lg">
          <li>
            is grossly harmful, harassing, blasphemous, defamatory, obscene,
            pornographic, paedophilic, libellous, invasive of another’s privacy,
            hateful, or racially, ethnically objectionable, disparaging,
            relating or encouraging money laundering or gambling, or otherwise
            unlawful in any manner whatever; o harm minors in any way; o
            infringes any patent, trademark, copyright or other proprietary
            rights;
          </li>
          <li>violates any law for the time being in force;</li>
          <li>
            deceives or misleads the addressee about the origin of such messages
            or communicates any information which is grossly offensive or
            menacing in nature; o impersonate another person;
          </li>
          <li>
            contains software viruses or any other computer code, files or
            programs designed to interrupt, destroy or limit the functionality
            of any computer resource including the Website;
          </li>
          <li>
            threatens the unity, integrity, defence, security or sovereignty of
            India, friendly relations with foreign states, or public order or
            causes incitement to the commission of any cognisable offence or
            prevents investigation of any offence or is insulting any other
            nation.
          </li>
        </ul>
        <p className="my-4 text-2xl font-semibold">
          You are also prohibited from:
        </p>
        <ul className="pl-8 text-lg">
          <li>
            violating or attempting to violate the integrity or security of the
            Website or its content;
          </li>
          <li>
            transmitting any information (including job posts, messages and
            hyperlinks) on or through the Website that is disruptive or
            competitive to the provision of services by us;
          </li>
          <li>
            intentionally submitting on the Website any incomplete, false or
            inaccurate information; o making any unsolicited communications to
            other users of the Website;
          </li>
          <li>
            using any engine, software, tool, agent or other device or mechanism
            (such as spiders, robots, avatars or intelligent agents) to navigate
            or search the Website;
          </li>
          <li>
            attempting to decipher, decompile, disassemble or reverse engineer
            any part of the Website;
          </li>
          <li>
            copying or duplicating in any manner any of the content on the
            Website or other information available from the Website; o framing
            or hotlinking or deeplinking any content on the Website.
          </li>
        </ul>
        <p className="my-4 text-2xl font-semibold">Refund Policy:</p>
        <p className="mb-4 text-lg">
          Ikarus 3D reserves the rights on refund and the eligibility of the
          user for refund cases, Ikarus 3D may at its sole discretion accept or
          reject any application for refund without assigning any reason
          whatsoever, following conditions shall make a refund claim
          eligible/qualified to be accepted or rejected by Ikarus 3D to process
          the same:
        </p>
        <ol className="pl-8 text-lg">
          <li>
            Cancellation of the services has been done mutually by the user and
            Ikarus 3D
          </li>
          <li>
            Refund Claim stands eligible ; when the same is made/applied for
            only after the expiry of minimum 14 days of the mutual cancellation
            of the services
          </li>
          <li>
            Bank account or other payment method as approved mutually by the
            user and Ikarus 3D to be provided to Ikarus 3D within 14 days of
            cancellation to initiate the refund , which shall be made available
            to the user with 30 to 90 days from the end of 14 days of
            cancellation and counted from the date of receipt of the bank
            account/payment method.
          </li>
          <li>
            Extra charges/incidental costs or any other overhead costs involved
            in the initiation/processing of refund shall be borne by the party
            initiating the refund.
          </li>
        </ol>
        <p className="my-4 text-2xl font-semibold">Indemnity:</p>
        <p className="mb-4 text-lg">
          We disclaim all warranties or conditions, whether expressed or
          implied, (including without limitation implied, warranties or
          conditions of information and context). We shall not be liable to any
          person for any loss or damage which may arise from the use of any of
          the information contained in any of the materials on this Website.
          This User Agreement and any contractual obligation between us and you
          will be governed by the laws of India, subject to the exclusive
          jurisdiction of Courts in Mohali, Punjab. All disputes will be subject
          to arbitration in Chandigarh in English by a single arbitrator
          appointed by us under the Arbitration and Conciliation Act, 1996 (as
          amended from time to time). Each party to arbitration shall bear its
          own cost.
        </p>
        <p className="text-lg">
          You agree to defend, indemnify and hold harmless Ikarus 3D, its
          employees, directors, officers, agents and their successors and
          assigns from and against any and all claims, liabilities, damages,
          losses, costs and expenses, including attorney’s fees, caused by or
          arising out of claims based upon your actions or inactions, which may
          result in any loss or liability to Ikarus 3D or any third party
          including but not limited to breach of any warranties, representations
          or undertakings or in relation to the non-fulfillment of any of your
          obligations under this User Agreement or arising out of your violation
          of any applicable laws, regulations including but not limited to
          intellectual property rights, payment of statutory dues and taxes,
          claim of libel, defamation, violation of rights of privacy or
          publicity, loss of service by other subscribers and infringement of
          intellectual property or other rights. This clause shall survive the
          expiry or termination of this User Agreement.
        </p>
        <p className="my-4 text-2xl font-semibold">Eligibility to use:</p>
        <p className="text-lg">
          Use of the Website is available only to persons who can form legally
          binding contracts under applicable law. Persons who are “incompetent
          to contract” within the meaning of the Indian Contract Act, 1872
          including un-discharged insolvents etc. are not eligible to use the
          Website. We reserve the right to terminate your membership and refuse
          to provide you with access to the Website at our sole discretion. The
          Website is not available to persons whose membership has been
          suspended or terminated by us for any reason whatsoever. If you are
          registering as a business entity, you represent that you have the
          authority to bind the entity to this User Agreement. We make no
          representation that any products or services referred to in the
          materials on this Website are appropriate for use, or available
          outside India. Those who choose to access this Website from outside
          India are responsible for compliance with local laws if and to the
          extent local laws are applicable. We will deliver the products only
          within India and will not be liable for any claims relating to any
          products ordered from outside India. Some Indian states prohibit
          direct sale of merchandise from other states and require special
          documentation to effect such a sale without dual taxation, if we
          receive an order from such states or to be delivered to such states
          under such circumstances we retain the right to accept or reject the
          order at our sole discretion. Those who choose to access this Website
          from Indian states which restrict such use are responsible for
          compliance with local laws if and to the extent local state laws are
          applicable. We will deliver the products only within states having
          open import policy and will not be liable for any claims relating to
          any products ordered from restricted states. Except where additional
          terms and conditions are provided which are product specific, these
          terms and conditions supersede all previous representations,
          understandings, or agreements and shall prevail notwithstanding any
          variance with any other terms of any order submitted.
        </p>
        <p className="my-4 text-2xl font-semibold">Privacy:</p>
        <p className="mb-4 font-semibold ">
          IF YOU DO NOT AGREE, PLEASE DO NOT USE OR ACCESS THE WEBSITE.
        </p>
        <p className="mb-4 text-lg">
          All the information provided to us by you, including sensitive
          personal information, is voluntary. You have the right to withdraw
          your consent at any time, in accordance with the terms of this User
          Agreement, but please note that withdrawal of consent will not be
          retroactive.
        </p>
        <p className="mb-4 text-lg">
          You can access, modify, correct and eliminate the data about you which
          has been collected pursuant to your decision to become a user of the
          Website. If you update any information relating to you, we may keep a
          copy of the information which you originally provided to us in its
          archives.
        </p>
        <p className="mb-4 text-lg">
          Due to the communications standards on the Internet, when you visit
          the Website, we automatically receive the URL of the site from which
          you came and the site to which you are going when you leave. We also
          receive the Internet Protocol (IP) address of your computer (or the
          proxy server you used to access the World Wide Web), your computer
          operating system and type of web browser you are using, email
          patterns, as well as the name of your internet service provider (ISP).
          This information is used to analyze overall trends to help us improve
          our service.
        </p>
        <p className="mb-4 text-lg">
          The Website uses temporary cookies to store certain data (that is not
          sensitive personal data or information) that is used by us and our
          service providers for the technical administration of the Website,
          research and development, and for administration. In the course of
          serving advertisements or optimizing services to you, we may allow
          authorized third parties to place or recognize a unique cookie on your
          browser. We do not store personally identifiable information in the
          cookies.
        </p>
        <p className="mb-4 text-lg">
          We may keep records of telephone calls received and made for making
          inquiries, orders or other purposes for the purpose of administration
          of services, research and development, quality management services and
          for proper administration.
        </p>
        <p className="mb-4 text-lg">
          We allow other companies, to serve advertisements to you. These
          companies include third party ad servers, ad agencies, ad technology
          vendors and research firms. We may “target” some ads to you that fit a
          certain general profile. We do NOT use personally identifiable
          information to target ads.
        </p>
        <p className="mb-4 text-lg">
          We assume no responsibility, and shall not be liable for, any damages
          to, or viruses that may infect your equipment on account of your
          access to, use of, or browsing the Website or the downloading of any
          material, data, text, images, video content, or audio content from the
          Website. If you are dissatisfied with the Website, your sole remedy is
          to discontinue using the Website.
        </p>
        <p className="mb-4 text-lg">
          This privacy policy applies to websites and services that are operated
          and managed by us. We do not exercise control over the sites displayed
          as search results or links from within its services. These other sites
          may place their own cookies or other files on your computer, collect
          data or solicit personal information from you, for which we are not
          responsible or liable. Accordingly, we do not make any representations
          concerning the privacy practices or policies of such third parties or
          terms of use of such websites, nor do we guarantee the accuracy,
          integrity, or quality of the information, data, text, software, sound,
          photographs, graphics, videos, messages or other materials available
          on such websites. The inclusion or exclusion does not imply any
          endorsement by us of the website, the website’s provider, or the
          information on the website. We encourage you to read the privacy
          policies of that website.
        </p>
        <p className="mb-4 text-lg">
          The Website may enable you to communicate with other users or to post
          information to be accessed by others, whereupon other users may
          collect such data. We hereby expressly disclaim any liability for any
          misuse of such information that is made available by visitors in such
          a manner.
        </p>
        <p className="mb-4 text-lg">
          We value the privacy of information pertaining to our associates. The
          linkage between your IP address and your personally identifiable
          information is not shared with third-parties without your permission
          or except when required by law. Notwithstanding the above, we may
          share some of the aggregate findings and details with advertisers,
          sponsors, investors, strategic partners, and others in order to help
          grow our business without obtaining any approval from you. We will
          enable you to communicate your privacy concerns to us and that we will
          respond to them appropriately. We do not disclose any personal
          information to advertisers and for other marketing and promotional
          purposes that could be used to personally identify you, such as your
          password, credit card number and bank account number.
        </p>
        <p className="mb-4 text-2xl font-semibold">Refusal of service:</p>
        <p className="text-lg">
          We reserve the right to refuse service to anyone at any time. We
          reserve the right, in our sole discretion, to suspend or cancel the
          service at any time if a computer virus, bug, or other technical
          problem corrupts the security, or proper administration of the
          service.
        </p>
        <p className="my-4 text-2xl font-semibold">
          Promotional Communications:
        </p>
        <p className="text-lg">
          “We may also send you other information about us, the Site, our other
          websites, our products, sales promotions, our newsletters, SMS
          updates, anything relating to other companies in our group or our
          business partners. If you would prefer not to receive any of this
          additional information as detailed in this paragraph (or any part of
          it) please click the “unsubscribe” link in any email that we send to
          you or register as a Do Not Disturb user. Within 7 working days (days
          which are neither (i) a Saturday or Sunday, nor (ii) a public holiday
          anywhere in India) of receipt of your instruction we will cease to
          send you information as requested. In case of any clarity you can
          contact our Customer support service”.
        </p>
        <p className="my-4 text-2xl font-semibold">Financial Details:</p>
        <p className="text-lg">
          You agree, understand and confirm that the credit / debit card details
          or other financial details provided by you for availing of services on
          the Website will be correct and accurate and you shall not use the
          credit /debit card or financial facility which is not lawfully owned /
          obtained by you. You also understand that any financial information
          submitted by you is directly received by our acquiring bank and not
          taken by us. We will not be liable for any credit / debit card fraud.
          The liability for use of a card fraudulently will be on you and the
          onus to ‘prove otherwise’ shall be exclusively on you. We and our
          associated acquiring bank or financial institutions reserve the right
          to recover the cost of goods, collection charges and lawyers fees from
          persons using the Website fraudulently. We and our associated
          acquiring banks or financial institutions reserve the right to
          initiate legal proceedings against such persons for fraudulent use of
          the Website and any other unlawful acts or acts or omissions in breach
          of these terms and conditions in accordance with applicable laws.
        </p>
        <p className="my-4 text-2xl font-semibold">Communication:</p>
        <p className="text-lg">
          When you visit the Website or send emails to us, you are communicating
          with us electronically. You consent to receive communications from us
          electronically. We will communicate with you by email or by posting
          notices on the Website. You agree that all agreements, notices,
          disclosures and other communications that we provide to you
          electronically satisfy any legal requirement that such communications
          be in writing. When you submit your phone number along with your
          shipping address or to request our call back, you consent to receive
          calls on that number for communication related to your order/request
          and other site related communication.
        </p>
        <p className="my-4 text-2xl font-semibold">
          Website feedback, user comments and user generated content:
        </p>
        <p className="text-lg">
          All reviews, comments, feedback, postcards, suggestions, ideas, and
          other submissions disclosed, submitted to us on or by this Website or
          otherwise disclosed, submitted or offered in connection with your use
          of this Website (collectively, the “Comments”) shall be and remain our
          property. Such disclosure, submission or offer of any Comments shall
          constitute an assignment to us of all worldwide rights, titles and
          interests in all copyrights and other intellectual properties in the
          Comments. Thus, we own exclusively all such rights, titles and
          interests and shall not be limited in any way in its use, commercial
          or otherwise, of any Comments. We will be entitled to use, reproduce,
          disclose, modify, adapt, create derivative works from, publish,
          display and distribute any Comments you submit for any purpose
          whatsoever, without restriction and without compensating you in any
          way. We are and shall be under no obligation (1) to maintain any
          Comments in confidence; (2) to pay you any compensation for any
          Comments; or (3) to respond to any Comments. You agree that any
          Comments submitted by you to the Website will not violate this policy
          or any right of any third party, including copyright, trademark,
          privacy or other personal or proprietary right(s), and will not cause
          injury to any person or entity. You further agree that no Comments
          submitted by you to the Website will be or contain libelous or
          otherwise unlawful, threatening, abusive or obscene material, or
          contain software viruses, political campaigning, commercial
          solicitation, chain letters, mass mailings or any form of ‘spam’. We
          do not regularly review posted Comments, but do reserve the right (but
          not the obligation) to monitor and edit or remove any Comments
          submitted on the Website. You grant us the right to use the name that
          you submit in connection with any Comments. You agree not to use a
          false email address, impersonate any person or entity, or otherwise
          mislead as to the origin of any Comments you submit. You are and shall
          remain solely responsible for the content of any Comments you make and
          you agree to indemnify us and our affiliates for all claims resulting
          from any Comments you submit. We and our affiliates take no
          responsibility and assume no liability for any Comments submitted by
          you or any third party.
        </p>
        <p className="my-4 text-2xl font-semibold">Copyright & Trademark:</p>
        <p className="text-lg">
          We and our suppliers and licensors expressly reserve all intellectual
          property rights in all text, programs, products, processes,
          technology, content and other materials, which appear on this Website.
          Access to this Website does not confer and shall not be considered as
          conferring upon anyone any license under any of our or any third
          party’s intellectual property rights. All rights, including copyright,
          in this Website are owned by or licensed to us. Any use of this
          Website or its contents, including copying or storing it or them in
          whole or part, other than for your own personal, non-commercial use is
          prohibited without our prior permission. You may not modify,
          distribute or re-post anything on this Website for any purpose. The
          Ikarus 3D names and logos and all related product and service names,
          design marks and slogans are the trademarks or service marks of Ikarus
          3D or licensed to Ikarus 3D. All other marks are the property of their
          respective companies and you shall not use or exploit the same in any
          manner whatsoever. No trademark or service mark license is granted to
          you in connection with the materials contained on this Website. Access
          to this Website does not authorize anyone to use any name, logo or
          mark which appears on the Website in any manner. References on this
          Website to any names, marks, products or services of third parties or
          hypertext links to third party websites or information are provided
          solely as a convenience to you and do not in any way constitute or
          imply our endorsement, sponsorship or recommendation of the third
          party, information, product or service. We are not responsible for the
          content of any third party websites and does not make any
          representations regarding the content or accuracy of material on such
          websites. If you decide to link to any such third party websites, you
          do so entirely at your own risk. All materials, including images,
          text, illustrations, designs, icons, photographs, programs, music
          clips or downloads, video clips and written and other materials that
          are part of this Website (collectively, the “Contents”) are intended
          solely for personal, non-commercial use. You may download or copy the
          Contents and other downloadable materials displayed on the Website for
          your personal use only. No right, title or interest in any downloaded
          materials or software is transferred to you as a result of any such
          downloading or copying. You may not reproduce (except as noted above),
          publish, transmit, distribute, display, modify, create derivative
          works from, sell or participate in any sale of or exploit in any way,
          in whole or in part, any of the Content, the Website or any related
          software. All software used on this Website is the property of Ikarus
          3D or its suppliers and licensors and protected by Indian and
          international copyright laws. The Content and software on this Website
          may be used only as a shopping resource. Any other use, including the
          reproduction, modification, distribution, transmission, republication,
          display, or performance, of the Content on this Website is strictly
          prohibited. Unless otherwise noted, all Content are copyrights,
          trademarks, trade dress and/or other intellectual property owned,
          controlled or licensed by us, our affiliates or by third parties who
          have licensed their materials to us and are protected by Indian and
          international copyright laws. The compilation (meaning the collection,
          arrangement, and assembly) of all Content on this Website is the
          exclusive property of Ikarus 3D and is also protected by Indian and
          international copyright. We don’t offer any Counterfeit goods contain
          a trademark or logo that is identical to or substantially
          indistinguishable from the trademark of another{" "}
          <b>Objectionable Material:</b>
        </p>
        <p className="text-lg">
          You understand that by using this Website or any services provided on
          the Website, you may encounter Content that may be deemed by some to
          be offensive, indecent, or objectionable, which Content may or may not
          be identified as such. You agree to use the Website and any service at
          your sole risk and that to the fullest extent permitted under
          applicable law, we and our affiliates shall have no liability to you
          for Content that may be deemed offensive, indecent, or objectionable
          to you.
        </p>
        <p className="my-4 text-2xl font-semibold">Termination:</p>
        <p className="text-lg">
          This User Agreement is effective unless and until terminated by either
          you or us. You may terminate this User Agreement at any time by
          informing us in writing through postal system by registered post if in
          India or otherwise, that you no longer wish to be associated with this
          Website, provided that you discontinue any further use of this
          Website. We may terminate this User Agreement at any time and may do
          so immediately without notice, and accordingly deny you access to the
          Website. Such termination will be without any liability to Ikarus 3D.
          Upon any termination of the User Agreement by either you or us, you
          must promptly destroy all materials downloaded or otherwise obtained
          from this Website, as well as all copies of such materials, whether
          made under the User Agreement or otherwise. Our right to any Comments
          shall survive any termination of this User Agreement. Any such
          termination of the User Agreement shall not cancel your obligation to
          pay for the product already ordered from the Website or affect any
          liability that may have arisen under the User Agreement.
        </p>
        <p className="my-4 text-2xl font-semibold">
          Limitation of Liability and Disclaimers:
        </p>
        <p className="mb-4 text-lg">
          The Website is provided without any warranties or guarantees and in an
          “As Is” condition. You must bear the risks associated with the use of
          the Website. The Website provides content from other Internet websites
          or resources and while we try to ensure that material included on the
          Website is correct, reputable and of high quality, we shall not be
          held liable or responsible if this is not the case. We will not be
          responsible for any errors or omissions or for the results obtained
          from the use of such information or for any technical problems you may
          experience with the Website. This disclaimer constitutes an essential
          part of this User Agreement. To the fullest extent permitted under
          applicable law, we or our suppliers shall not be liable for any
          indirect, incidental, special, consequential or exemplary damages,
          including but not limited to, damages for loss of profits, goodwill,
          use, data or other intangible losses arising out of or in connection
          with the Website, its services or this User Agreement. Without
          prejudice to the generality of the section above, our total liability
          to you for all liabilities arising out of this User Agreement be it in
          tort or contract is limited to the amount charged to you, Ikarus 3D
          its associates and technology partners make no representations or
          warranties about the accuracy, reliability, completeness and/or
          timeliness of any content, information, software, text, graphics,
          links or communications provided on or through the use of the Website
          or that the operation of the Website will be error free and/or
          uninterrupted. We assume no liability whatsoever for any monetary or
          other damage suffered by you on account of the delay, failure,
          interruption, or corruption of any data or other information
          transmitted in connection with use of the Website; and/or any
          interruption or errors in the operation of the Website.
        </p>
        <p className="mb-4 text-lg">
          The images contained in this website are for general information
          purposes only. The said images have been sourced through the various
          open sources available in general on the world wide web (w.w.w.). We
          endeavour to keep the information up to date and correct, we make no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability or availability
          with respect to the images or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk.
        </p>
        <p className="mb-4 text-lg">
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of the images available on the website.
        </p>
        <p className="mb-4 text-lg">
          Through this website you are able to get/ find the images available
          through various open source websites, which are not under the control
          of Ikarus 3D. We have no control over the nature, content and
          availability of those open source sites. The inclusion of any images/
          graphics does not necessarily imply a recommendation or endorse the
          views expressed within them.
        </p>
        <p className="mb-4 text-lg ">
          Every effort is made to keep the website up and running smoothly.
          However, Ikarus3D and Partner stakes no responsibility for, and will
          not be liable for, the website being temporarily unavailable due to
          technical issues beyond our control.
        </p>
        <p className="mb-4 text-2xl font-semibold">Website Security:</p>
        <p className="mb-4 text-lg ">
          You are prohibited from violating or attempting to violate the
          security of the Website, including, without limitation:
        </p>
        <ul className="pl-8 text-lg">
          <li>
            Accessing data not intended for you or logging onto a server or an
            account which you are not authorized to access;
          </li>
          <li>
            Attempting to probe, scan or test the vulnerability of a system or
            network or to breach security or authentication measures without
            proper authorization;
          </li>
          <li>
            Attempting to interfere with service to any other user, host or
            network, including, without limitation, via means of submitting a
            virus to the Website, overloading,
          </li>
        </ul>
        <p className="my-4 text-lg">
          ‘flooding,’ ‘spamming’, ‘mail bombing’ or ‘crashing;
        </p>
        <ul className="pl-8 text-lg">
          <li>
            Sending unsolicited email, including promotions and/or advertising
            of products or services; or
          </li>
          <li>
            Forging any TCP/IP packet header or any part of the header
            information in any email or newsgroup posting. Violations of system
            or network security may result in civil or criminal liability. We
            will investigate occurrences that may involve such violations and
            may involve, and cooperate with, law enforcement authorities in
            prosecuting users who are involved in such violations. You agree not
            to use any device, software or routine to interfere or attempt to
            interfere with the proper working of this Website or any activity
            being conducted on this Website. You agree, further, not to use or
            attempt to use any engine, software, tool, agent or other device or
            mechanism (including without limitation browsers, spiders, robots,
            avatars or intelligent agents) to navigate or search this Website
            other than the search engine and search agents available from
            Ikarus3D on this
          </li>
        </ul>
        <p className="my-4 text-lg">
          Website and other than generally available third party web browsers
          (e.g.,
        </p>
        <p className="mb-4 text-lg">
          Google Chrome, Firefox, Microsoft Internet Explorer).
        </p>
        <ul className="mb-4 pl-8 text-lg">
          <li>
            “We have in place appropriate technical and security measures to
            prevent unauthorized or unlawful access to or accidental loss of or
            destruction or damage to your information. When we collect data
            through the Site, we collect your personal details on a secured
            server through firewalls. The Company does not access, store or keep
            debit card data or credit card data and or any financial
            information. All transactions done using Secure Server Software
            (SSL) for 128 bit encryption through third party gateways and
            Ikarus3D plays no role in the transaction, except for directing the
            customers to gateways or relevant webpage(s). Accordingly, Ikarus3D
            shall not be responsible or liable for any loss or damage due to any
            disclosure whatsoever of Personal Information while using the third
            party gateways and or website. Ikarus3D shall not be liable for any
            loss or damage sustained by reason of any disclosure (inadvertent or
            otherwise) of any Personal Information concerning the User’s account
            and / or information relating to or regarding online transactions
            using credit cards / debit cards /cash cards/net banking and / or
            their verification process and particulars nor for any error,
            omission or inaccuracy with respect to any information so disclosed
            and used. We maintain physical, electronic and procedural safeguards
            in connection with the collection, storage and disclosure of your
            information. To protect your privacy and security, we will verify
            your identity before granting access or making changes to your
            Personal Information. If you have registered your profile on the
            Website, your ID and Password are required in order to access your
            Account. You are responsible for protecting against unauthorized
            access to your password and to your computer.”
          </li>
        </ul>
        <p className="my-4 text-2xl font-semibold"> Entire Agreement:</p>
        <p className="text-lg">
          If any part of this User Agreement is determined to be invalid or
          unenforceable pursuant to applicable law including, but not limited
          to, the warranty disclaimers and liability limitations set forth
          above, then the invalid or unenforceable provision will be deemed to
          be superseded by a valid, enforceable provision that most closely
          matches the intent of the original provision and the remainder of the
          User Agreement shall continue in effect. Unless otherwise specified
          herein, this User Agreement constitutes the entire agreement between
          you and us with respect to the Websites/services and it supersedes all
          prior or contemporaneous communications and proposals, whether
          electronic, oral, or written, between you and us with respect to the
          Websites/services. Our failure to act with respect to a breach by you
          or others does not waive its right to act with respect to subsequent
          or similar breaches.
        </p>
        <p className="my-4 text-lg font-semibold">Contact Information:</p>
        <p className="mb-4 text-lg">
          If any User has any grievance, comment, question, or suggestion
          regarding any of our Services, please contact our Grievance Officer,
          who will redress the grievances of the Users expeditiously but within
          one month from the date of receipt of grievance, and who can be
          reached by:
        </p>
        <ul className="pl-8 text-lg">          
          <li>
            Sending an email to{" "}
            <a
              className="text-ikarus-blue hover:underline"
              href="mailto:info@ikarus3d.com"
            >
              info@ikarus3d.com
            </a>{" "}
            ➢ <b>© Ikarus3D </b>{" "}
            <a
              className="text-ikarus-blue hover:underline"
              href="mailto:info@ikarus3d.com"
            >
              ikarus3D.com
            </a>
            <b>. All Rights Reserved.</b>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
