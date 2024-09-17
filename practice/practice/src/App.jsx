
import { List } from "./components/list";
import { flowers } from "./assets/flowers.js";
import { flowers2 } from "./assets/flowers2.js";
import { Types } from "./components/types.jsx";
import { Select } from "./components/select.jsx";
import { ColorPicker } from "./components/colorPicker.jsx";
import { LoginForm } from "./components/loginForm.jsx";
import { AddDeleteList } from "./components/06-Add-Delete-List.jsx";
import { Home } from "./components/07-searchbar-cards/home.jsx";

function App() {
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
      
      */}
      <Home />
   
    </>
  );
}

export default App;
