import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Landing } from "./pages/Landing/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/city=:city" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}
