import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { NavbarMinimal } from "./components/Navbar";
import AddEmployePage from "./pages/AddEmployePage";
import LandingPage from "./pages/LandignPage";
import { SettingPage } from "./pages/SettingPage";
import UpdateEmployePage from "./pages/UpdateEmployePage";

function MyRoutes() {
  return (
    <Router>
      <div className="flex">
        <NavbarMinimal />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="add" element={<AddEmployePage />} />
            <Route path="update/:id" element={<UpdateEmployePage />} />
            {/* <Route path="setting" element={<SettingPage/>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default MyRoutes;
