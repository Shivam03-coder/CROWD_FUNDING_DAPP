import { Cuboid } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="flex mx-auto bg-custom-blacktransparent-blue-gradient-t-b justify-between px-10 py-3">
      <section>
        <div
          className="text-2xl flex-center gap-4 font-semibold
       text-greatBlue-400 border p-2 border-greatBlue-400"
        >
          CARDONA
        <Cuboid className="text-greatBlue-400" size={27} />
        </div>
      </section>
      <div
        className="text-2xl font-semibold
       text-greatBlue-400 border p-2 border-greatBlue-400"
      >
        CARDONA
      </div>
    </nav>
  );
};

export default Header;
