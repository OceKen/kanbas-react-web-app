import { Routes, Route } from "react-router";
import CoursesNavigation from "./Navigation";
import Module from "./Module";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "./Grades";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger" style={{marginLeft:"-1125px"}}>
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="courses-content">
        <CoursesNavigation />
        <div className="courses-routes">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Module />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:id" element={<AssignmentEditor />} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}
