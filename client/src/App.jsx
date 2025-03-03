import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applayout from "./layout/Applayout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
