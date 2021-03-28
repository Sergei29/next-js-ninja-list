import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { JSON_API } from "../../constants/constants";
import classes from "../../styles/Ninjas.module.css";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${JSON_API}/users`);
    const data = await response.json();
    return {
      props: { ninjas: data },
    };
  } catch (error) {
    throw new Error(`Failed to load users. ${error.message}`);
  }
};

type Props = {
  ninjas: Record<string, any>[];
};

const Ninjas: React.FC<Props> = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {!!ninjas &&
          ninjas.map((objNinja) => (
            <Link key={objNinja.id} href={`ninjas/${objNinja.id}`}>
              <a className={classes.single}>
                <h3>{objNinja.name}</h3>
              </a>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Ninjas;
