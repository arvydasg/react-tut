import Navbar from "./Navbar";
import reactLogo from "../images/react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="./index.html">
          <img className="nav-image" src={reactLogo} />
        </a>
        <Navbar />
      </nav>
    </header>
  );
}
