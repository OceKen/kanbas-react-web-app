import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";

// TODO fix home defaulting to active
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();


  console.log(pathname);

  const links = [
    {label: "Home", path: `/Kanbas/Courses/${cid}/Home`},
    {label: "Modules", path:`/Kanbas/Courses/${cid}/Modules`},
    {label: "Piazza", path:`/Kanbas/Courses/${cid}/Piazza`},
    {label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom`},
    {label: "Assignments", path:`/Kanbas/Courses/${cid}/Assignments`},
    {label: "Quizzes",path: `/Kanbas/Courses/${cid}/Quizzes`},
    {label: "Grades",path :`/Kanbas/Courses/${cid}/Grades`},
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 position-sticky top-0 d-none d-md-block bottom-0 z-2" style={{ width: "fit-content" }}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border border-0 ${pathname.includes(link.path) ? "active" : "text-danger"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
