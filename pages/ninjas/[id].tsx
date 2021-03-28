import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { JSON_API } from "../../constants/constants";

/**
 * @description next.js special function to fetch path info (must be exported)
 * @returns {Promise} fetches data then returns it as context to be used by `getStaticProps`
 */
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch(`${JSON_API}/users`);
    const data: Record<string, any>[] = await response.json();
    const paths = data.map((objNinja) => ({
      params: { id: objNinja.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    throw new Error(`Failed to load users. ${error.message}`);
  }
};

/**
 * @description next.js special function to fetch data on server (must be exported)
 * @returns {Promise} fetches data then returns it as props to server rendered component
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`${JSON_API}/users/${id}`);
  const data: Record<string, any> = await response.json();
  return { props: { ninja: data } };
};

type Props = {
  ninja: Record<string, any>;
};

const NinjaDetails: React.FC<Props> = ({ ninja }) => {
  if (!ninja) {
    return <p>No details found.</p>;
  }
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default NinjaDetails;
