import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavLink from "../components/NavLink/NavLink";

const NotFound: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the <NavLink href="/">Homepage</NavLink>
        </p>
      </div>
    </>
  );
};

export default NotFound;
