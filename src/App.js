import React from "react";
import {Form} from "./pages/form";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Home} from "./pages/home";
import {NotFound} from "./pages/not-found";
import {Menu} from "./components/Menu";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={'/'} element ={<Home/>}/>
                <Route path={'/form'} element ={<Form/>}/>
                <Route path={'*'} element ={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
