import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inversion from "./pages/Inversion";
import Retiro from "./pages/Retiro";
import Soporte from "./pages/Soporte";
import Objetivos from "./pages/Objetivos";
import Perfil from "./pages/Perfil";
import Blog from "./pages/Blog";
import NavReactB from "./components/NavReactB";
import SideBar from "./components/SideBar";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  const [path, setPath] = useState(true);

  useEffect(() => {
    if (location.pathname === '/Blog') {
      setPath(false)
    } else {
      setPath(true)
    }
  }, [location.pathname])


  return (
    <div className="App">
      <NavReactB />
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {path === true && <SideBar />}
        <div className="w-100">
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/Inversion" exact>
              <Inversion />
            </Route>
            <Route path="/Retiro" exact>
              <Retiro />
            </Route>
            <Route path="/Soporte" exact>
              <Soporte />
            </Route>
            <Route path="/Objetivos" exact>
              <Objetivos />
            </Route>
            <Route path="/Perfil" exact>
              <Perfil />
            </Route>
            <Route path="/Blog" exact>
              <Blog />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
