import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/home" replace={true} />}
                />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
