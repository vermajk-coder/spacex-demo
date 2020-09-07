import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
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
}
export default MyApp;
