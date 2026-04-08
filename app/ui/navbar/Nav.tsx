import NavBig from "./NavBig";
import NavSmall from "./NavSmall";

export default function Navbar() {
  return (
    <nav className="absolute">
      {/* nav for big screens */}
      <NavBig />
      {/* nav for small screens */}
      <NavSmall />
    </nav>
  );
}
