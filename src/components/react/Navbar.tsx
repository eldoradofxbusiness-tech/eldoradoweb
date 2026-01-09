import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <NavbarMobile
        open={open}
        onToggle={() => setOpen(!open)}
        onClose={() => setOpen(false)}
      />

      <NavbarDesktop />
    </div>
  );
}
