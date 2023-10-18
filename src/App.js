import React from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import Signin from "./pages/signin";
import ExtractedPage from "./pages/extractedPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" name="home"   element={<HomePage/>} />
      <Route path="/login" name="login"   element={<Login/>} />
      <Route path="/signin" name="signin"   element={<Signin/>} />
      <Route path="/history" name="signin"   element={<ExtractedPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
