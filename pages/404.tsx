import React, { useEffect } from "react";
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
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <NavLink href="/">Homepage</NavLink>
      </p>
    </div>
  );
};

export default NotFound;
