import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRouter from "./_privateRouter";
import { Welcome } from "./welcome";
import { Layout } from "../components/layouts";

export default function Router() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/welcome" />}></Route>
          <Route path="welcome" element={<Welcome />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
