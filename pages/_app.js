import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Components, pageProps }) {
  return (
    <Layout>
      <Components {...pageProps} />
    </Layout>
  );
}

export default MyApp;
