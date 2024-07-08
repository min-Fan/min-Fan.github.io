import { Outlet, Helmet } from "umi";
import Nav from "./Nav";
import { Provider } from "react-redux";
import config_store from "@/store/config/store";
import Footer from "./Footer";

export default function Layout() {
  
  
  return (
    <Provider store={config_store}>
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </Provider>
  );
}
