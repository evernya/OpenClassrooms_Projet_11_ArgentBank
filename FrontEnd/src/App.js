//IMPORT
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Error from "./Pages/Error/Error";

//LAYOUTS
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

//COMPONENTS

//ASSETS

//CSS

function App() {
  //state (état, données)

  //comportement

  //affichage (render)
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
