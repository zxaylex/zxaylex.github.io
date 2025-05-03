import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Tools from "./pages/Tools"
import Contact from "./pages/Contact"
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/tools" element={<Tools/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

