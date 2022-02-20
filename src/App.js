import "./App.css";
import LoginView from "./components/views/login/LoginView";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/home/Home";
import ProtectedHome from "./router/protectedHome/ProtectedHome";
import Layout from "./components/views/layout/Layout";
import PageNotFound from "./router/pageNotFound/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Publick */}
        <Route path="login" element={<LoginView />} />

        {/* Protected */}
        <Route element={<ProtectedHome />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
