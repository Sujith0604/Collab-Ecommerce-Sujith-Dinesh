import { Routes, Route } from "react-router-dom";
import Applayout from "./layout/Applayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
