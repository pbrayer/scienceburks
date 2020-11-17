import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footerform"
import Sidebar from "./sidebar"
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Background from "../assets/background.png"

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Global styles={css(bootstrap)} />
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main style = {{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <Sidebar></Sidebar>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    <Footer></Footer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    // margin-bottom: 100px;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a{
    color: white !important;
  }
  @media (max-width: 1440px) {
    .sidebar {
      display: none !important;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 31;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;


const Main = styled.div`
  padding-top: 50px;
  padding-bottom: 400px;
  display: flex;
  justify-content: center;
`;
