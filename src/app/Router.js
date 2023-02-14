import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={process.env.PUBLIC_URL}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;