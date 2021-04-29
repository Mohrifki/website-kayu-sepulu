import data from "./data";
import "./App.css";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
        <Link to = "/" >Kasepu</Link>
          </div>
          <div className="header-links">
            <a href="Keranjang.html">Chart </a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Category</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Bengkirai</a>
            </li>
            <li>
              <a href="index.html">Galam</a>
            </li>
            <li>
              <a href="index.html">Meranti</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            
          </div>
        </main>
        <footer className="footer">Bismillah Bisa.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
