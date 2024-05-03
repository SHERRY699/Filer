import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="pt-20 selection:bg-[#bb5644] font-sans ">
      <h1 className=" text-[60px] text-center font-bold ">Privacy Policy</h1>
      <div className="w-full h-full flex flex-col md:flex-row  items-center md:items-start justify-center gap-10 ">
        <div className="table-of-contents ml-4 flex flex-col  mb-4 w-[300px] md:w-[400px] h-max 2xl:sticky top-10 2xl:left-[10%] 3xl:left-[20%] mt-8 gap-4 items-center justify-center">
          <h1 className="text-[20px] font-bold">Table Of Contents</h1>
          <ol className="list-decimal flex flex-col gap-4">
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#introduction"}
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#consent"}
              >
                User Consent
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#information"}
              >
                Types of Information Collected
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#collection-personal"}
              >
                Collection of Personal Information
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#cookies"}
              >
                Cookies and Other Tracking Technologies
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#anonymuscollection"}
              >
                Collection of Anonymus Information
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#storage"}
              >
                Storage and Protection of Your Information
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#disclosure-personal"}
              >
                Use and Disclosure of Personal Information
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#disclosure-anonymus"}
              >
                Use and Disclosure of Anonymous Information
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#ability"}
              >
                The Ability of Others to View Your Information
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#thirdparty"}
              >
                Third-Party Sites and Advertising
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#choices"}
              >
                Your Choices and Rights
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#revesions"}
              >
                Revisions
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#minors"}
              >
                Minors
              </Link>
            </li>
            <li>
              <Link
                className="text-[#bb5644] hover:border-b-[1px] border-[#bb5644]"
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ol>
        </div>
        <div className="w-full mt-8  h-full mb-10  flex flex-col items-center justify-center sm:items-start md:items-center sm:px-[10%]  md:px-4">
          <div className="w-9/12 sm:w-[470px] md:w-[550px] lg:w-[600px] xl:w-[800px]   h-full flex flex-col gap-4 leading-7">
            <section id="introduction">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-10">
                Introduction
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-secondary text-[13px] mt-8 md:text-[15px]">
                  This Privacy Policy discloses the policies of Filer.me (the
                  “Website”) and its operator, Filer.me, LLC (collectively “we”
                  or “us”), regarding the collection, use, and disclosure of
                  information you submit to us through the use of Website.
                </p>
                <p className="text-secondary text-[13px]  md:text-[15px]">
                  Filer.me is part of an affiliation of companies owned by the
                  same ownership group (collectively, “our Group Companies”). In
                  some cases, we may receive personal information from our Group
                  Companies, and we may share personal information with our
                  Group Companies
                </p>
              </div>
            </section>

            <section id="consent">
              <div className="flex flex-col gap-4">
                <h1 className="text-[24px] font-bold md:text-[40px]">
                  User Consent
                </h1>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  By accessing or otherwise using the Website, you agree to the
                  terms and conditions of this Privacy Policy, which is
                  incorporated into and forms a part of the Website’s Terms of
                  Service. You expressly consent to the processing and use of
                  your information as described herein.
                </p>
              </div>
            </section>

            <section id="information">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Types of Information Collected
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  Cookies are small pieces of data contained in text files,
                  which are stored on your computer or other device when
                  websites are loaded in a browser. First Party Cookies.
                  Filer.me utilizes cookies, web beacons, and other technologies
                  to allow the Website to “personalize” itself for each user by
                  remembering information about the user’s visit to the website.
                  For instance, by using the cookies generated by Filer.me
                  (“First Party Cookies”), your information is retained, so you
                  do not have to continually log back into your account each
                  time you move to a different page. First Party Cookies remain
                  associated with you. However, no third party may use the
                  information we collect through our First Party Cookies for
                  their own purposes. Deletion of these cookies may result in
                  limited functionality of the Website and associated services.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Third-Party Cookies. We work with third parties that place
                  cookies on our Website to provide:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Analytics/Measurement. We use third-party analytics cookies to
                  gain insight into how our visitors use the Website, to find
                  out what works and what doesn’t, to optimize and improve our
                  Website, and to ensure we continue to be interesting and
                  relevant. The data we gather includes which web pages you have
                  viewed, which referring/exit pages you have entered and left
                  from, which platform type you have used, date and time stamp
                  information, and details such as the number of clicks you make
                  on a given page, your mouse movements and scrolling activity,
                  the search words you use and the text you type while using our
                  Site.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Google Analytics. Our Website uses Google Analytics, an
                  analytics advertising service provided by Google LLC, which
                  uses third-party cookies. Our Website may also use the
                  following Google Analytics Advertising features: Google
                  Remarketing with Analytics, Google Segments, Double Click by
                  Google, Adwords, and BigQuery. These features use third-party
                  cookies to collect information about our Website traffic by
                  tracking users across time and generating reports for us to
                  better understand our Website users.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Inspectlet. Our Website utilizes Inspectlet, an analytics tool
                  that uses cookies to record the mouse movements, clicks, and
                  keypresses of Users as they use the Website.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Intercom. Our Website uses Intercom to collect data for
                  analytics purposes when you visit the Website or otherwise use
                  hosted Services. As a data processor acting on our behalf,
                  Intercom analyzes your use of our website and/or product and
                  tracks our relationship by way of cookies and similar
                  technologies so that we can improve our service to you. We may
                  also use Intercom as a medium for communications, either
                  through email or through messages within our product(s). As
                  part of our service agreements, Intercom collects publicly
                  available contact and social information related to you, such
                  as your email address, gender, company, job title, photos,
                  website URLs, social network handles, and physical addresses,
                  to enhance your user experience.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Google Tag Manager. The Website uses Google Tag Manager.
                  Google Tag Manager is a solution operated by Google LLC that
                  allows marketed website tags to be managed using an interface.
                  The Tag Manager tool itself (which implements the tags) is a
                  cookie-less domain and does not register personal data. The
                  tool causes other tags to be activated, which may, for their
                  part, register data under certain circumstances. Google Tag
                  Manager does not access this information. If recording has
                  been deactivated on domain or cookie level, this setting will
                  remain in place for all tracking tags implemented with Google
                  Tag Manager.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Opting Out of Cookies and Other Tracking Technologies. See
                  section XII.B for your rights regarding opting out of cookie
                </p>
              </div>
            </section>

            <section id="collection-personal">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Collection of Personal Information
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  We collect the following categories of Personal Information
                  you voluntarily submit to us through the Website, chat, or
                  over the phone.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  As you use our Website, we generate certain personal
                  information about you, including through automatic data
                  collection. We may automatically collect information about
                  your interactions with the Website or communications you
                  receive (such as email) using certain technologies, such as
                  cookies, web beacons, third-party platforms, and other
                  technologies. Specifically, we generate, or direct third-party
                  service providers to generate, the following categories of
                  personal information about you:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Use and Disclosure of Personal Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  A. General Use of Personal Information. We use your personal
                  information for the following purposes (“Purposes”) to:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Provide the Services. Which includes providing you with the
                  services, products, and functionality offered through our
                  Website and fulfilling your requests, including filing
                  intellectual property applied.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Authenticate your account credentials and identify you. As
                  necessary to log you into the Website and ensure the security
                  of your account Communicate with you. About your account or
                  use of our services, products, and/or functionality; respond
                  to, or follow up on, your comments and questions; and
                  otherwise provide customer service.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Send you marketing communications. Including communicating
                  with you about services or products offered by Filer.me, our
                  Group Companies, or our business partners and other marketing
                  communications that we believe you would be interested in, as
                  permitted by law.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Show your purchases. Made through the websites, applications,
                  and services of our group company es on your account page
                  Authenticate your credit or debit card account information
                  Protect against, investigate, and deter fraudulent,
                  unauthorized, or illegal activity
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Create anonymized information. Which will be completely
                  de-identified from your personal information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Comply with our policies, procedures, and legal obligations.
                  Including complying with law enforcement or government
                  authority requests, addressing litigation-related issues, and
                  exercising rights or obligations conferred by law
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  As otherwise consented to by you and as required or permitted
                  by applicable law. If you give your consent to any further use
                  of personal information, you can withdraw that consent at any
                  time by contacting us using the details set out below
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  You have choices about your personal information, and in some
                  circumstances, you may have the right to opt-out or object to
                  our uses of your personal information for these Purposes. For
                  more information or to exercise these or other rights (where
                  available), see Section XII, Your Choices and Rights, below.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  B. Electronic Communications. Consistent with the above
                  Purposes and as is permitted by applicable law, we may
                  communicate with you via electronic messages, including SMS,
                  live chat platforms, and correspondence with the email address
                  you provided to:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Send you information relating to our products and services,
                  including receipts, updates, security alerts, support, and
                  administrative messages. Send you marketing communications. In
                  other situations, subject to the Your Choice and Rights
                  section below and applicable law, we may communicate with you
                  about contests, offers, promotions, rewards, upcoming events,
                  and other news about products and services offered by
                  Filer.me, our Group Companies, and other business partners
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  You can opt-in to receive SMS messages from Filer.me via a
                  one-click confirmation through email or the customer web
                  portal.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  If you’d like to stop receiving SMS messages from Filer.me,
                  you can let us know by replying STOP to any SMS message you
                  receive from us. You can also opt out by emailing
                  info@Filer.me
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  C. Disclosure of Personal Information to Third-Parties. We do
                  not sell your personal information. We disclose the personal
                  information we collect (or otherwise generate or obtain) as
                  follows
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  With Our Group Companies.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We share your information with our Group Companies. The
                  purpose of disclosure to our Group Companies is to provide you
                  with integrated services, such as mail receipt and registered
                  agent services, to provide customer support, and to analyze
                  how users use our independent and affiliated platforms. The
                  use of the information by the Group Companies is subject to
                  each of their respective Privacy Policies. We disclose the
                  following categories of personal information with Group
                  Companies: Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  With Business Affiliates.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We share information with other third-party business partners
                  only with your express consent. We allow you to opt-in to
                  third-party offers through our website. When you affirmatively
                  opt in, we transmit only as much of your personal information
                  as is necessary. We disclose the following categories of
                  personal information with Business Affiliates:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To protect our rights and property.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We may disclose your information to third parties when we
                  believe in good faith that disclosure is necessary to protect
                  our rights, our property, the integrity of the Website,
                  personal safety, or the interests of you or any other person,
                  and to detect, prevent and/or otherwise address fraud, risk
                  management, security, or technical issues. We may disclose the
                  following categories of personal information to protect our
                  rights and property:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To process payments.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To use services on the Website, we require credit or debit
                  card account information. When you submit your credit or debit
                  card account information through our Website, we share that
                  information with third-party payment processors and other
                  third-party service providers (including, but not limited to,
                  vendors who provide fraud detection services to us and other
                  third parties) to the extent necessary to meet our contractual
                  obligations to you, to meet our legitimate interests in
                  preventing fraud and other misuse of our platforms, or with
                  your consent where this is required by law. We disclose the
                  following categories of personal information with third
                  parties to process payments:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  With Third Party Service Providers.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Your Personal Information may be disclosed to third-party
                  service providers who work with us to provide some of the
                  services on the Website and to help us communicate with you.
                  Examples include, but are not limited to, sending emails,
                  monitoring website usage, fulfilling your order if it requires
                  providing the information you provided to us to others,
                  marketing, and providing customer service. We expect our
                  third-party service providers to not use such information
                  except as necessary to provide the relevant services to us. We
                  disclose the following categories of personal information with
                  Third Party Service Providers:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In the event of a corporate transaction.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We may disclose or transfer your information to a third party
                  if we sell, transfer, divest, or disclose all or a portion of
                  our business or assets to another company in connection with
                  or during negotiation of any merger, financing, acquisition,
                  bankruptcy, dissolution, transaction, or proceeding. We may
                  disclose the following categories of personal information in
                  connection with a corporate transaction;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To comply with and as required by law.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We may disclose your personal information to government
                  authorities or other relevant third parties in order to comply
                  with applicable legal requirements, judicial proceedings,
                  court orders, legal process, or lawful requests from
                  governmental authorities. We may disclose the following
                  categories of personal information to comply with and as
                  required by law:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  At your request.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We also share your information as directed or requested by you
                  or subject to your consent. We may disclose the following
                  categories of personal information at your request:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In some circumstances, you may have the right to opt out or
                  object to our sharing of your information with certain third
                  parties. For more information or to exercise these or other
                  rights, see Section XI. Your Choices and Rights below.All the
                  above categories exclude text messaging originator opt-in data
                  and consent; this information will not be shared with any
                  third parties.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  D. Processing Bases and Consequences. When we process your
                  personal information, we rely on the following legal bases:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Performance of the contract we have with you,
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  such as using your information to carry out your entity
                  formation by sharing your information with the applicable
                  government office.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Compliance with legal obligations to which we are subject
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  such as tax obligations, and when we are obliged to comply
                  with lawful requests from competent authorities such as law
                  enforcement.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To serve our legitimate interests,
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  provided that such processing does not outweigh your rights
                  and freedoms. The processing may also be pursuant to other
                  applicable legal bases for data processing.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  E. Anonymous Information. We also reserve the right to create
                  Anonymous Information records from the Personal Information
                  collected directly from you by excluding information that we
                  believe in good faith prevents it from being directly
                  identified to a specific user, such as your name. This would
                  include any comments or feedback you provide us, which becomes
                  our property, and we reserve the right to use any such
                  material with your Personal Information redacted in perpetuity
                  for any reason we deem appropriate, including, but not limited
                  to, marketing and/or improvement of the Website, without
                  royalties or compensation to you. Any such Anonymous
                  Information is subject to terms of this Privacy Policy
                  applicable to all Anonymous Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In some circumstances, you may have the right to opt out or
                  object to our sharing of your information with certain third
                  parties. For more information or to exercise these or other
                  rights, see Section XI. Your Choices and Rights below
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We may receive the following categories of personal
                  information from our Group Companies when you opt-in for our
                  services through a Group Company’s platform:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We receive some of your personal information from third-party
                  service providers after you have directed us to pursue
                  services on your behalf. The following categories of personal
                  information may be received from third-party service providers
                  after you opt in for services:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  It is optional for you to utilize this Website. If you elect
                  to utilize certain aspects of this Website, we may ask you to
                  provide us with certain items of personal information. When
                  you order products or services, we may also ask you to provide
                  us with your credit card number, expiration date, and
                  authentication codes or related information. If you do not
                  provide certain mandatory information for a particular
                  activity that requires it, you will not be permitted to engage
                  in that activity.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We may offer contests, sweepstakes, or other contests that
                  will require you to sign up and provide additional Personal
                  Information. In that case, we will collect the information
                  provided along with your involvement in such activity.
                  Additionally, we reserve the right to collect any other
                  information that you voluntarily enter, including Personal
                  Information, into any postings, comments, feedback, or forums
                  on the Website
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We may, but are in no way obligated to, provide referral or
                  “tell another” programs that allow you to recommend the site
                  or an article to a friend. If you choose to do so, we will ask
                  for your referral recipient’s name and email address. We will
                  automatically send your friend one or more
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  communications about either the product you have purchased or
                  with an invitation for him or her to visit the Website. The
                  communication will allow the referral recipient to unsubscribe
                  from further communications. We will collect this information
                  for the sole purpose of sending an invitation to visit the
                  site, sending their product, and tracking the success of any
                  referral program. We will also collect your email address and
                  the full content of your email message, including attached
                  files and other information you provide. We may use and
                  display your full name and email address to your referral
                  recipient. Additionally, we may use your email address to
                  contact you about the status of your referral.
                </p>
              </div>
            </section>

            <section id="cookies">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Cookies and Other Tracking Technologies
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  “Personal information” is data that identifies, relates to,
                  describes, can be used to contact, or could reasonably be
                  linked directly or indirectly to you. For purposes of this
                  Policy, there is no meaningful distinction between the terms
                  “personal information” and “personal data.”
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  As you visit or use our Website or otherwise interact with us,
                  we collect the following categories of personal information
                  about you:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers (such as names, nicknames, online identifiers,
                  company names, email addresses, addresses, postal addresses,
                  and IP addresses.);
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information (such as phone numbers, account
                  information, passwords, credit, debt, or other payment card
                  information, as may be required to use certain services on the
                  Website, text-based customer support messages, answers to
                  other questionnaires we provide to you, and other information
                  you provide about yourself or others through our Services. We
                  also utilize blockchain technology to create a permanent,
                  time-stamped record to document information about your
                  trademark use when you submit information to us. Such records
                  are stored on the Hyperledger Fabric blockchain);
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics protected under some laws (such as citizenship
                  status); Commercial Information (such as products or services
                  you have purchased through the Website);
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information (such as account settings, the user agent
                  identification string associated with your device, which
                  includes information about your hardware and software, and
                  device configuration, information about your searches or
                  interactions with features of our Website; sites or pages
                  visited; access times; referring/exit pages; clickstream data;
                  and performance of our Services.); Audio and Visual
                  Information (such as recordings of calls placed by you to
                  customer support of the Website and visual recordings of your
                  interaction with the website)
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  You may choose not to provide some of the personal information
                  described above. Please note, however, that many of our
                  services require some personal information to operate, so if
                  you choose not to provide the personal information necessary
                  to operate and provide you with a particular service or
                  feature of that service, you may not be able to use that
                  service or featur
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We do not proactively collect sensitive personal information,
                  such as health-related information, political opinions,
                  religious beliefs, or genetic data.
                </p>
              </div>
            </section>

            <section id="anonymuscollection">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Collection of Anonymous Information
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  We use technology to passively collect and store certain
                  information that is not tied to a specific identified user.
                  This information is sufficiently de-identified according to
                  the standards of applicable laws and will not be associated
                  with an identifiable individual.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Should you be directed to any third-party site from the
                  Website, we are not responsible for the acts of other sites,
                  and this Privacy Policy does not apply to that site
                </p>
              </div>
            </section>

            <section id="storage">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Storage and Protection of Your Information
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  Location. Your Personal Information may be processed and
                  stored outside of your jurisdiction where laws regarding
                  processing of Personal Information may be less stringent than
                  the laws in your country or state. Your Personal Information
                  will not, however, be used or disclosed for purposes for which
                  you have not given consent or which are not permitted under
                  applicable law
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Protection. We have put in place safeguards to provide
                  adequate protection for the storage and transfer of personal
                  information, including the presence of an SSL certificate and
                  other encryption protocol in accordance with applicable legal
                  requirements.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Storage of Credit Card Information. When your credit or debit
                  card account information is being transmitted through our
                  Website, it will be protected by security protocols. Filer.me
                  does not itself store your credit card or debit card account
                  information, and we do not have direct control over or
                  responsibility for your credit or debit card account
                  information. We may continue to have access to your credit
                  card information through third-party services for easy access
                  in the event you decide to order more services from Filer.me.
                  We do not otherwise store your credit card information
                  ourselves
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Storage of Blockchain Records. Blockchain records generated by
                  us are stored on the Hyperledger Fabric blockchain.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Disclaimer of Guaranty of Security. We believe we have taken
                  reasonable steps to protect your Personal Information. No one
                  can fully guarantee or fully eliminate all risks associated
                  with Personal Information, and we make no such guarantees
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Retention. Unless there is something in this Policy to the
                  contrary, we may retain your personal information for as long
                  as your account is active and for a period of time thereafter
                  to allow you to re-activate your account without loss of
                  information. We may also retain your personal information as
                  necessary to:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Maintain logs and business records for analysis, security,
                  and/or audit purposes;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Comply with record retention requirements under the law;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Deal with any complaints regarding the Website; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Comply with our legal obligations, protect or defend our
                  rights, resolve disputes and enforce our contracts.
                </p>
              </div>
            </section>

            <section id="disclosure-personal">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-10">
                Use and Disclosure of Personal Information
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  General Use of Personal Information. We use your personal
                  information for the following purposes (“Purposes”) to:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Provide the Services. Which includes providing you with the
                  services, products, and functionality offered through our
                  Website and fulfilling your requests, including filing
                  intellectual property applied.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Authenticate your account credentials and identify you. As
                  necessary to log you into the Website and ensure the security
                  of your account
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Communicate with you. About your account or use of our
                  services, products, and/or functionality; respond to, or
                  follow up on, your comments and questions; and otherwise
                  provide customer service
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Send you marketing communications. Including communicating
                  with you about services or products offered by Filer.me, our
                  Group Companies, or our business partners and other marketing
                  communications that we believe you would be interested in, as
                  permitted by law.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Show your purchases. Made through the websites, applications,
                  and services of our group companies on your account page
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Authenticate your credit or debit card account information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Protect against, investigate, and deter fraudulent,
                  unauthorized, or illegal activity
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Create anonymized information. Which will be completely
                  de-identified from your personal information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Comply with our policies, procedures, and legal obligations.
                  Including complying with law enforcement or government
                  authority requests, addressing litigation-related issues, and
                  exercising rights or obligations conferred by law
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  As otherwise consented to by you and as required or permitted
                  by applicable law. If you give your consent to any further use
                  of personal information, you can withdraw that consent at any
                  time by contacting us using the details set out below.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  You have choices about your personal information, and in some
                  circumstances, you may have the right to opt out or object to
                  our uses of your personal information for these Purposes. For
                  more information or to exercise these or other rights (where
                  available), see Section XII, Your Choices and Rights, below
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Electronic Communications. Consistent with the above Purposes
                  and as is permitted by applicable law, we may communicate with
                  you via electronic messages, including SMS, live chat
                  platforms, and correspondence with the email address you
                  provided to:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Send you information relating to our products and services,
                  including receipts, updates, security alerts, support, and
                  administrative messages.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Send you marketing communications. In other situations,
                  subject to the Your Choice and Rights section below and
                  applicable law, we may communicate with you about contests,
                  offers, promotions, rewards, upcoming events, and other news
                  about products and services offered by Filer.me, our Group
                  Companies, and other business partners.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  You can opt-in to receive SMS messages from Filer.me via a
                  one-click confirmation through email or the customer web
                  portal.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  If you’d like to stop receiving SMS messages from Filer.me,
                  you can let us know by replying STOP to any SMS message you
                  receive from us. You can also opt out by emailing
                  info@Filer.me
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Disclosure of Personal Information to Third-Parties. We do not
                  sell your personal information. We disclose the personal
                  information we collect (or otherwise generate or obtain) as
                  follows:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  With Our Group Companies. We share your information with our
                  Group Companies. The purpose of disclosure to our Group
                  Companies is to provide you with integrated services, such as
                  mail receipt and registered agent services, to provide
                  customer support, and to analyze how users use our independent
                  and affiliated platforms. The use of the information by the
                  Group Companies is subject to each of their respective Privacy
                  Policies. We disclose the following categories of personal
                  information with Group Companies
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  With Business Affiliates. We share information with other
                  third-party business partners only with your express consent.
                  We allow you to opt-in to third-party offers through our
                  website. When you affirmatively opt in, we transmit only as
                  much of your personal information as is necessary. We disclose
                  the following categories of personal information with Business
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Affiliates;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To protect our rights and property. We may disclose your
                  information to third parties when we believe in good faith
                  that disclosure is necessary to protect our rights, our
                  property, the integrity of the Website, personal safety, or
                  the interests of you or any other person, and to detect,
                  prevent and/or otherwise address fraud, risk management,
                  security, or technical issues. We may disclose the following
                  categories of personal information to protect our rights and
                  property:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To process payments. To use services on the Website, we
                  require credit or debit card account information. When you
                  submit your credit or debit card account information through
                  our Website, we share that information with third-party
                  payment processors and other third-party service providers
                  (including, but not limited to, vendors who provide fraud
                  detection services to us and other third parties) to the
                  extent necessary to meet our contractual obligations to you,
                  to meet our legitimate interests in preventing fraud and other
                  misuse of our platforms, or with your consent where this is
                  required by law. We disclose the following categories of
                  personal information with third parties to process payments:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  With Third Party Service Providers. Your Personal Information
                  may be disclosed to third-party service providers who work
                  with us to provide some of the services on the Website and to
                  help us communicate with you. Examples include, but are not
                  limited to, sending emails, monitoring website usage,
                  fulfilling your order if it requires providing the information
                  you provided to us to others, marketing, and providing
                  customer service. We expect our third-party service providers
                  to not use such information except as necessary to provide the
                  relevant services to us. We disclose the following categories
                  of personal information with Third Party Service
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Providers:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In the event of a corporate transaction. We may disclose or
                  transfer your information to a third party if we sell,
                  transfer, divest, or disclose all or a portion of our business
                  or assets to another company in connection with or during
                  negotiation of any merger, financing, acquisition, bankruptcy,
                  dissolution, transaction, or proceeding. We may disclose the
                  following categories of personal information in connection
                  with a corporate
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  transaction;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To comply with and as required by law. We may disclose your
                  personal information to government authorities or other
                  relevant third parties in order to comply with applicable
                  legal requirements, judicial proceedings, court orders, legal
                  process, or lawful requests from governmental authorities. We
                  may disclose the following categories of personal information
                  to comply with and as required by law:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>

                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  At your request. We also share your information as directed or
                  requested by you or subject to your consent. We may disclose
                  the following categories of personal information at your
                  request
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Identifiers;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Other Personal Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Characteristics Protected Under Some Laws;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Commercial Information;
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Internet Information; and
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Audio and Visual Information.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In some circumstances, you may have the right to opt out or
                  object to our sharing of your information with certain third
                  parties. For more information or to exercise these or other
                  rights, see Section XI. Your Choices and Rights below.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  All the above categories exclude text messaging originator
                  opt-in data and consent; this information will not be shared
                  with any third parties.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Processing Bases and Consequences. When we process your
                  personal information, we rely on the following legal bases:
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Performance of the contract we have with you, such as using
                  your information to carry out your entity formation by sharing
                  your information with the applicable government office.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Compliance with legal obligations to which we are subject,
                  such as tax obligations, and when we are obliged to comply
                  with lawful requests from competent authorities such as law
                  enforcement.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To serve our legitimate interests, provided that such
                  processing does not outweigh your rights and freedoms. The
                  processing may also be pursuant to other applicable legal
                  bases for data processing
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Anonymous Information. We also reserve the right to create
                  Anonymous Information records from the Personal Information
                  collected directly from you by excluding information that we
                  believe in good faith prevents it from being directly
                  identified to a specific user, such as your name. This would
                  include any comments or feedback you provide us, which becomes
                  our property, and we reserve the right to use any such
                  material with your Personal Information redacted in perpetuity
                  for any reason we deem appropriate, including, but not limited
                  to, marketing and/or improvement of the Website, without
                  royalties or compensation to you. Any such Anonymous
                  Information is subject to terms of this Privacy Policy
                  applicable to all Anonymous Information
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In some circumstances, you may have the right to opt out or
                  object to our sharing of your information with certain third
                  parties. For more information or to exercise these or other
                  rights, see Section XI. Your Choices and Rights below.
                </p>
              </div>
            </section>

            <section id="disclosure-anonymus">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-10">
                Use and Disclosure of Anonymous Information
              </h1>

              <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                This Privacy Policy does not limit our use or disclosure of any
                Anonymous Information in any way, and we reserve the right to
                use and disclose Anonymous Information to our partners,
                advertisers, and other third parties in our absolute discretion.
              </p>
            </section>

            <section id="ability">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-10">
                The Ability of Others to View Your Information
              </h1>

              <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                When you use the Website, certain information you post or
                provide on the publicly available portions of the Website may
                become publicly available and may be collected and used by
                others, including people outside of the control of the Website.
                We have no obligations with respect to any information that you
                post to publicly available parts of the Website
              </p>
            </section>

            <section id="thirdparty">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Third-Party Sites and Advertising
              </h1>

              <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                The Website may contain links to other sites that are not owned
                or controlled by Filer.me, LLC, such as links to review
                aggregate websites. We are not responsible for the privacy
                practices or the content of such other websites, and this
                Privacy Policy does not apply to any other sites. We make no
                representation regarding the privacy practices of any other
                sites, regardless of whether we advertise on those sites or
                provide a link to those sites from our Website.
              </p>
            </section>

            <section id="choices">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Your Choices and Rights
              </h1>
              <div className="flex flex-col ">
                <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                  When you use the Website, certain information you post or
                  provide on the publicly available portions of the Website may
                  become publicly available and may be collected and used by
                  others, including people outside of the control of the
                  Website. We have no obligations with respect to any
                  information that you post to publicly available parts of the
                  Website.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Ability to Unsubscribe. Should you receive a promotional email
                  from us, you may “opt out” of receiving additional promotional
                  email
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  communications from us by following the unsubscribe
                  instructions on the emails. You may also contact us directly
                  at Filer.me, LLC. This applies to promotional communications
                  and not administrative communications we feel are necessary to
                  provide the services on the Website.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Cookies.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Opting out of First Party Cookies. If you would rather we did
                  not use Filer.me cookies when you visit us, click here for
                  information on how to configure your browser settings to
                  reject cookies. Please note disabling these types of cookies
                  will result in limited functionality of our Website and
                  services.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Opting out of Third-Party Cookies.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  In order to control the collection of data for analytical
                  purposes by Google Analytics, you may download and install the
                  Google Analytics Opt-out Browser Add-on available here. To
                  control the collection of data for analytical advertising
                  purposes by Google Analytics Advertising, you may also visit
                  the Google Ad Settings page here. Please remember that
                  changing your settings with certain browsers and ad networks
                  will not carry your privacy choices across browsers and other
                  ad network.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  You may disable the collection of screen captures by
                  Inspectlet for all websites (not just this one) by clicking
                  here and following the provided instructions.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  To opt out of cookies collected by Intercom, contact them
                  directly. Do Not Track Requests. We do not currently have a
                  mechanism to respond to “Do Not Track Requests” at this time.
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Sharing with Business Affiliates. We do not automatically
                  share your personal information with third-party business
                  affiliates without your consent, except for the disclosures we
                  make necessary to provide the services of our Website.
                  Disclosures to third-party business affiliates are only made
                  through your affirmative actions by indicating on the Website
                  that you are interested in third-party services. To prevent
                  the disclosure of your personal information to these
                  third-party business affiliates, do not opt-in for the service
                </p>
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Access and Correction of Your Information. If you have created
                  an online account with us and would like to update the
                  information you have provided to us, you can access your
                  account to view and update your information. You may also
                  contact us as described in section XIV. Contact below
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Notice to California Residents. Residents of California have
                  the following rights with respect to your personal information
                  that we retain:
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  The right to request that we disclose to you the categories of
                  personal information we have collected about you, specific
                  pieces of personal information collected about you, the
                  sources of that personal information, the commercial purpose
                  of collecting your personal information, and the categories of
                  third parties that personal information is disclosed to. You
                  also have the right to direct us to disclose the personal
                  information to another entity.
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  The right to request that we delete any personal information
                  about you which we have collected from you. We may deny this
                  request if the personal information is necessary to complete a
                  transaction, detect security incidents, debug products,
                  exercise free speech, comply with the California Electronic
                  Communication Privacy Act, engage in research for public
                  benefit, enable internal uses aligned with consumer desires,
                  or comply with legal obligations;
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  The right to request that we correct any inaccurate personal
                  information we have about you
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  The right not to be discriminated against for exercising your
                  consumer rights
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  We do not sell your personal information. We do not share your
                  personal information for the purposes of cross-context
                  behavioral advertising. If we begin to sell your personal
                  information or share your personal information for the
                  purposes of cross-context behavioral advertising in the
                  future, California residents will be able to opt out of the
                  sale or sharing of their personal information. Any resident of
                  California may exercise their rights by submitting a
                  verifiable request to privacy@tFiler.me. So that we can better
                  process your request, please provide the email you use to log
                  into your account and include the fact that you reside in
                  California in your request. Your request will not be processed
                  until your identity has been verified and your California
                  residency has been confirmed
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  Legal Rights. We do not automatically share your personal
                  information with third-party business affiliates without your
                  consent, except for the disclosures we make necessary to
                  provide the services of our Website. Disclosures to
                  third-party business affiliates are only made through your
                  affirmative actions by indicating on the Website that you are
                  interested in third-party services. To prevent the disclosure
                  of your personal information to these third-party business
                  affiliates, do not opt-in for the service
                </p>{" "}
                <p className="text-secondary text-[13px] md:text-[15px]">
                  If you wish to exercise legal rights you may have under
                  applicable law; please submit your request to
                  privacy@Filer.me. So that we can better process your request,
                  please provide the email you use to log into your Filer.me
                  account. If you do not have a Filer.me account, please provide
                  the email you used to make requests or to use our Website.
                </p>
              </div>
            </section>

            <section id="revesions">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Revisions
              </h1>

              <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                This Privacy Policy is subject to occasional changes at our
                discretion. We will post any such changes to this page and may
                otherwise post other alerts on the Website or communicate such
                changes through email. If you disagree with any such changes,
                please cease using the Website. Continued use following the
                posting of any such changes indicates your acceptance of the
                changes. If we make any changes to this Privacy Policy that
                materially impact previously collected personal information
                about you, we will make reasonable efforts to provide notice and
                obtain consent to any such changes as may be required by law.
              </p>
            </section>
            <section id="minors">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Minors
              </h1>

              <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                Minors under the age of 16 may not use the Website. We do not
                knowingly collect information from children under 16 years of
                age. Additionally, we recommend that users between the ages of
                16 and 18 ask their parents for permission before sending any
                information about themselves to anyone over the Internet. If you
                become aware your child or any child under your care has
                provided us information without your consent, please contact us
                according to section XIV. Contact below.
              </p>
            </section>
            <section id="contact">
              <h1 className="text-[24px] font-bold md:text-[40px] leading-7">
                Contact
              </h1>

              <p className="text-secondary mt-4 text-[13px] md:text-[15px]">
                If you have any questions or concerns about this Policy or the
                way in which your personal information is used, please contact
                us at privacy@Filer.me.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
