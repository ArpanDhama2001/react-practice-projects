import { Hero, Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <section className="banner">
        <img
          src={require("./assets/images/logo@2x.jpg")}
          alt="logo"
          className="p-4 border-y-2 border-black flex justify-center items-center"
        />
      </section>
      <Hero id="Hero" />
    </div>
  );
}

export default App;
