import { CustomHelmet } from "../helmet/index.jsx";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";

export default function Landing() {
  return (
    <div className="landing grid h-screen w-full place-content-center">
      <CustomHelmet title="React Formik | Homepage" />
      <Navigation />
      <Outlet />
    </div>
  );
}