import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployePage from "./pages/AddEmployePage";
import LandingPage from "./pages/LandignPage";
import { SettingPage } from "./pages/SettingPage";
import UpdateEmployePage from "./pages/UpdateEmployePage";

function MyRoutes(){
    return <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="add" element={<AddEmployePage/>} />
            <Route path="update" element={<UpdateEmployePage/>} />
            {/* <Route path="setting" element={<SettingPage/>} /> */}
        </Routes>
    </Router>
}

export default MyRoutes;