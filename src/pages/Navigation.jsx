import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="mx-auto flex flex-row gap-x-10 text-2xl font-bold tracking-wider text-slate-200">
          <li>
            <NavLink to="/" className="flex flex-row items-center gap-x-1.5">
              <AiFillHome className="text-3xl" />
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="flex flex-row items-center gap-x-1.5"
            >
              <CgProfile className="text-3xl" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}