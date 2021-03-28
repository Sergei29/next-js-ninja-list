import Image from "next/image";
import NavLink from "../NavLink/NavLink";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/ninjas">Ninja listing</NavLink>
    </nav>
  );
};

export default Navbar;
