/* import { List } from "./components/list";
import { flowers } from "./assets/flowers.js";
import { flowers2 } from "./assets/flowers2.js";
import { Types } from "./components/types.jsx";
import { Select } from "./components/select.jsx";
import { ColorPicker } from "./components/colorPicker.jsx";
import { LoginForm } from "./components/loginForm.jsx";
import { AddDeleteList } from "./components/06-Add-Delete-List.jsx";
import { Header } from "./components/08-api-rooter/header.jsx";

 */
//import { Home } from "./components/07-searchbar-cards/home.jsx";
//import { useState } from "react";

import { Users } from "./components/08-api-rooter/users.jsx";
import { Todos } from "./components/08-api-rooter/todos.jsx";
import { Home } from "./components/08-api-rooter/home.jsx";
import { Footer } from "./components/08-api-rooter/footer.jsx";

import { Layout } from "./components/08-api-rooter/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //let [menuItem, setMenuItem] = useState("Home");
  return (
    <>
      {/*  <List flowersArr={flowers} />
      <List flowersArr={flowers2} />
      <List />

      <Types name="Ayse" age={25} />
      <Types /> 
      
      <Select />
      
      <ColorPicker />
      
      <LoginForm />
      <AddDeleteList />
      <Home />
      <Header setMenuItem={setMenuItem} />
      {menuItem == "Home" && <Home />}
      {menuItem == "Users" && <Users />}
      {menuItem == "Todos" && <Todos /> }
      <Footer />
      */}
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="todos" element={<Todos/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
