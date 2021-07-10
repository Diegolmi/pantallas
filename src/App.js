import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inversion from './pages/Inversion'
import Retiro from './pages/Retiro'
import Soporte from "./pages/Soporte";
import NavReactB from "./components/NavReactB";
import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavReactB />
      <div className="d-flex" style={{height: '100vh'}}>
        <SideBar />
        <div className="w-100">
          <Switch>
            <Route path="/" exact>
            </Route>
            <Route path="/Inversion" exact>
              <Inversion />
            </Route>
            <Route path="/Retiro" exact>
              <Retiro />
            </Route>
            <Route path="/Soporte" exact>
              <Soporte />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
