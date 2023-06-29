import { Routes, Route } from "react-router-dom";
import Category from "../views/Category";
import Home from "../views/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}


export default AppRoutes;