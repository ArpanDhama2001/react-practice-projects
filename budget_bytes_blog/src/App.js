import { Hero, Navbar, Banner, RecipesGrid, Footer } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Hero />
      <RecipesGrid />
      <Footer />
    </div>
  );
}

export default App;
