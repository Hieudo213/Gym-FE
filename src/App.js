import "./App.css";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div className="footer">
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
