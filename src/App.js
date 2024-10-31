import "./App.css";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import { Modal } from "antd";

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
      <Modal title="Basic Modal" open={false} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default App;
