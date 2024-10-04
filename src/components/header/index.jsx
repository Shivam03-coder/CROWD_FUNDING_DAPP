import { Cuboid } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="flex mx-auto bg-slate-900  justify-between px-10 py-3">
      <section>
        <div
          className="text-2xl text-indigo-500 flex-center gap-4 font-semibold
       text-greatBlue-400  p-2 "
        >
          <Cuboid className="text-greatBlue-400" size={37} />
          CARDONA
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
