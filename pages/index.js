import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../src/App";

function AppInit() {
  return (
    <>
      <Head>
        <title>SpaceX Programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}

AppInit.getInitialProps = async ctx => {
  const res = await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
  const posts = await res.json();
  console.log("posts");
  console.log(posts);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  };
};

export default AppInit;
