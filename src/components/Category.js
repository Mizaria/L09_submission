import { useParams, NavLink, Outlet } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  if (!category) {
    return <h2>Category not found</h2>; 
  }

  return (
    <>
      <h2>{category.name} Diploma</h2>

              <ul className="session-list">
          {category.sessions.map(session => (
            <li className="session" key={session.id}>
              <NavLink 
                className={({ isActive }) => isActive ? "session-active" : null} 
                to={session.id}>
                <p className="session-name">{session.name}</p>
                <p>
                  {session.speaker.name} | {session.speaker.title}
                </p>  
              </NavLink>
            </li>
          ))}
        </ul>


      <Outlet />
    </>
  );
}
