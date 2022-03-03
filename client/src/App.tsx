import LandingPage from "./modules/LandingPage";
import Login from "./modules/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from './modules/sign-up';
import GeneralNav from "./modules/GeneralNav";

export const App = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/app" element={<GeneralNav />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
    );

}