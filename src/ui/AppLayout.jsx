import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="mx-auto box-border max-w-[1440px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
