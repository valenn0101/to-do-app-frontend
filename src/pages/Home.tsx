import { Link, Outlet } from "react-router-dom";

import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <h1>HOME</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
