import Footer from "./Footer";
import Header from "./Header";
import Drawer from "./layout/Drawer";
import { useState } from "react";

export default function Layout({ children }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <Header onClick={setDrawerIsOpen} open={drawerIsOpen} />
      <Drawer open={drawerIsOpen} onClick={setDrawerIsOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
