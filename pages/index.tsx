import NavLink from "../components/Navbar/NavLink/NavLink";
import classes from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className={classes.title}>Homepage</h1>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className={classes.text}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <NavLink href="/ninjas" customClassName={classes.btn}>
        See all Ninjas listing
      </NavLink>
    </div>
  );
};

export default Home;
