
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing/Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import { DataProvider } from "./Context/Context";
import {DATA} from './Variable/Variable'
import "./App.css";

function App() {
  return (
    <div className="App">
      <DataProvider value={DATA()}>
      <Router>
        <Header />
        <div className="SideBar">
          <SideBar />
        </div>
        <div className="Body">
          <Routing />
        </div>
      </Router>
      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
