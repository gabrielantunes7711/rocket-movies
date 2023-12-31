import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Details } from "../pages/Details/Details";
import { Profile } from "../pages/Profile/Profile";
import { New } from "../pages/New/New";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/update/:id" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};
