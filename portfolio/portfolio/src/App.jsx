import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import { BrowserRouter } from "react-router-dom";
const App = () => {

  return (
    <main>
        <Navbar />
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />


    </main>
  );
};

export default App;