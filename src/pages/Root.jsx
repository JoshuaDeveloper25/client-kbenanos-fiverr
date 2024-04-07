import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <main>
        <header>
          <Navbar />
        </header>

        <div>
          <Outlet />
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Root;
