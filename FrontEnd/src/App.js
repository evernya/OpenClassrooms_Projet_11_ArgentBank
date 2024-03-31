//IMPORT
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Error from "./Pages/Error/Error";

//LAYOUTS


//COMPONENTS

//ASSETS

//CSS

function App() {
  //state (état, données)

  //comportement

  //affichage (render)
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
