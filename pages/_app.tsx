import Layout from "../containers/Layout/Layout";
import "../styles/globals.css";

type Props = {
  Component: React.FC;
  pageProps: Record<string, any>;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
