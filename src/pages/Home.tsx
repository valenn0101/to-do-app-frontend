import { Link, Outlet } from "react-router-dom";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HOME</h1>
    </div>
  );
}
