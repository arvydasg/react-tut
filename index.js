function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="./index.html">
          <img className="nav-image" src="./react-logo.png" />
        </a>
        <Navbar />
      </nav>
    </header>
  );
}

function Navbar() {
  return (
    <ul className="nav-items">
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>2021 Arvydas Development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
