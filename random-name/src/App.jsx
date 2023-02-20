import './App.css'
import ironhackLogo from "./assets/ironhack-logo-xs.png"
import menu from "./assets/menu-top-xs.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

function App() {
  return <div className='App'>

<header>
  <nav>
    <a href="/">
      <img src={ironhackLogo} className="logo" alt="ironhack logo" />
    </a>
    <a href="/">
      <img src={menu} className="menu" alt="menu" />
    </a>
  </nav>
  <div className="intro">
    <h1>Say hello to ReactJS</h1>
    <h4>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h4>
    <button className="button">Awesome!</button>
  </div>
</header>
<main>
  <div className="icons">
    <div>
      <img src={icon1} alt="icon1" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div>
      <img src={icon2} alt="icon2" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
    </div>
    <div>
      <img src={icon3} alt="icon3" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
    <div>
      <img src={icon4} alt="icon4" />
      <h2>JSX</h2>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  </div>
</main>

  </div>
}
export default App
