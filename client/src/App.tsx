import LandingPage from "./modules/LandingPage";
import Login from "./modules/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export const App = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/app">
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
    );

}