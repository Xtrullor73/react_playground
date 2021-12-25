import React from 'react';
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;