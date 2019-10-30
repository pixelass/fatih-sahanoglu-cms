import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import styled, {createGlobalStyle, css} from "styled-components";

const Styles = createGlobalStyle`
         @font-face {
            font-family: FatihSans;
            src: url(${withPrefix("/fonts/FatihSans.eot")});
            src: url(${withPrefix("/fonts/FatihSans.woff2")}) format('woff2'), 
                url(${withPrefix("/fonts/FatihSans.woff")}) format('woff');
            font-weight: normal;
        }
  body {
    margin: 0;
    overflow-x: hidden;
    min-width: 320px;
    font-family: sans-serif;
  }
  
  *, *::before, *::after {
  	box-sizing: border-box;
  }
  
  .tl-edges {
    overflow-x: visible!important;
    overflow-y: visible!important;
  }
`;

const Main = styled.main<{
    entering?: boolean;
    entered?: boolean;
    exiting?: boolean;
    exited?: boolean;
}>`
  background: #fff;
  color: #000;
  min-height: 100vh;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <React.Fragment>
      <Styles />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://use.typekit.net/pxo7jmy.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
        <Main>{children}</Main>
    </React.Fragment>
  );
};

export default TemplateWrapper;
