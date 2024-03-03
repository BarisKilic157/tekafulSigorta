import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Item({ type = "nav", link, text }) {
  return (
    <>
      {type === "nav" ? (
        <NavLink
          className={({ isActive }) =>
            classNames(
              "text-[color:var(--text)] font-medium transition-colors",
              {
                "text-red-600": isActive,
              }
            )
          }
          to={link}
        >
          {text}
        </NavLink>
      ) : (
        <button>{text}</button>
      )}
    </>
  );
}

export default Item;
