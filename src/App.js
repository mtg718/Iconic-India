import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route, Routes, useLocation} from 'react-router-dom'
import Detail from './components/Detail';
import { createContext, useEffect, useState } from "react";
import Login from './components/Login'
import Signup from './components/Signup'
import AddSites from "./components/AddSites";
import VideoPlayer from "./components/VideoPlayer";
const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const location = useLocation();
  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
    <div className="App relative">
      <Header />
      {location.pathname === "/" && <VideoPlayer/>}
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddSites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
