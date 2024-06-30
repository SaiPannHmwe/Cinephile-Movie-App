import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`)
  };

  return (
    <nav className="flex items-center justify-between text-white bg-black">
      <NavLink to={"/"} className="text-5xl font-bold font-mono">
        Cinephile
      </NavLink>
      <div className="flex items-center justify-center space-x-3">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "text-link")}
          to={"/"}
        >
          Popular
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "text-link")}
          to={"/upcoming"}
        >
          Upcoming
        </NavLink>
      </div>
      <form action="#" className="flex items-center" onSubmit={search}>
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </form>
    </nav>
  );
}

export default Nav;
