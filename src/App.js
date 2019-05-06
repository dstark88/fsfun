import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Beer from "./pages/Beer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
      <Wrapper>
        <Navbar /> 
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/beer" component={Beer} />
        <Footer />
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
