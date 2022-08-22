import "./App.css";
import Body from "./layout/Body/bodyy";
import Header from "./layout/Header/header";
import { Route, Routes } from "react-router-dom";
import FormCreateCard from "./components/formCreateCard/formCreateCard";
import ListItemNotifi from "./layout/Header/ListItemNotifi/listItemNotifi";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/food/" element={<Body />} />

        <Route path="/food/add" element={<FormCreateCard />} />
      </Routes>
    </div>
  );
}

export default App;
