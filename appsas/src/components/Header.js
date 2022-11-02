import reactLogo from "../images/troll-face.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="./index.html">
          <img className="nav-image" src={reactLogo} />
        </a>
        <h1>Meme Generator</h1>
      </nav>
    </header>
  );
}
