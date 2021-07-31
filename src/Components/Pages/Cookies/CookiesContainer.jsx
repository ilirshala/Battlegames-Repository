import React from "react";
import "../../../Styles/Pages/Cookies/CookiesContainer.scss";
import { list1, list2, list3 } from "./cookiesList";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
function CookiesContainer() {
  return (
    <div className='cookiesContainer'>
      <h1>Cookies</h1>
      <p>
        To provide an epic website experience, we use cookies to personalize
        content and ads, to provide you with social media features and to
        analyze our traffic. We also share information about your use of our
        site with our social media, advertising and analytics partners. Cookies
        include required cookies, functional cookies, performance cookies,
        social media cookies, and Battle Games & Affiliate cookies. You can
        learn more about the types of cookies collected and change your cookie
        settings at any time by clicking here.
      </p>
      <h2>Required Cookies</h2>
      <p>
        These cookies allow us to monitor traffic on our websites and make
        performance improvements based on how visitors navigate through the
        various pages. All information these cookies collect is aggregated and
        therefore anonymous. If you do not accept these cookies we will not know
        when you have visited our site and will not be able to monitor its
        performance. Cookies used:
      </p>
      <ul>
        {list1.map((item, key) => {
          return (
            <li key={key}>
              <ChevronRightRoundedIcon /> {item.li}
            </li>
          );
        })}
      </ul>
      <h2>Performance Cookies</h2>
      <p>
        These cookies are necessary for our website to function and cannot be
        switched off in our systems. They are set in response to actions made by
        you and are considered as a request for services such as logging in,
        setting your privacy settings or making a purchase. You can set your
        browser to block or alert you about these cookies however, some parts of
        the site will not function as expected. These cookies do not store any
        personally identifiable information. Cookies used:
      </p>
      <ul>
        {list2.map((item, key) => {
          return (
            <li key={key}>
              <ChevronRightRoundedIcon /> {item.li}
            </li>
          );
        })}
      </ul>
      <h2>Functional Cookies</h2>
      <p>
        These cookies allow us to provide you with enhanced functionality and
        personalization. They may be set by us or by third party providers whose
        services we have added to our pages. If you do not allow these cookies,
        then some or all of these services may not function properly. Cookies
        used:
      </p>
      <ul>
        {list3.map((item, key) => {
          return (
            <li key={key}>
              <ChevronRightRoundedIcon /> {item.li}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CookiesContainer;
