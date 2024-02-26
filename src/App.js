import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Login";
import Pets from "./components/Dashboard/View/Pets";
import Dashboard from "./components/Dashboard";
import Adopters from "./components/Dashboard/View/Adopters";
import BestMatch from "./components/Dashboard/BestMatch";
import './app.css'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="pets" element={<Pets />} />
                <Route path="adopters" element={<Adopters />} />
                <Route path="bestMatch" element={<BestMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
