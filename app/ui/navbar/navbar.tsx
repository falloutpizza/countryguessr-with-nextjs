import NavBig from "./navBig";
export default function Navbar() {
  return (
    <nav className="absolute">
      <NavBig />
      {/* nav for small screens */}
      <div></div>
    </nav>
  );
}
