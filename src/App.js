
import { HashRouter as Router } from "react-router-dom";
import Routing from "./Routing/Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import { DataProvider } from "./Context/Context";
import {DATA} from './Variable/Variable'
import "./App.css";
import { useReducer } from "react";
const theme ={theme:false}

const reducer = (state,action)=>{
  switch(action.type){
    case 'themeMode':
      const newTheme = !state.theme
      return {...state,theme:newTheme}
      default:
        return state.theme
  }
}




function App() {
  const [themeState,dispatch] = useReducer(reducer,theme.theme)

  const nightModeSwitch = ()=>{
    const action= {
      type: 'themeMode'
    }
    dispatch(action)
  }
 let data = {data:DATA(),
    themeReducer:{themeState,dispatch}}
  return (
    <div className="App">
    <DataProvider value={data}>
      <Router>
        <Header nightModeSwitch={nightModeSwitch} />
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
