import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer, Card } from "./components";
import { MovieList, MovieDetails, Search, PageNotFound } from "./pages";

import './App.css';
import Logo from "./assets/images/logo.png";

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header Logo={Logo} />

      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;