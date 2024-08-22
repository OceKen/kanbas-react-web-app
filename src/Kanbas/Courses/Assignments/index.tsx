import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import LessonControlButtons from "../Module/LessonControlButtons";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentControlButton from "./AssignmentControlButton";
// TODO: fix assignment details padding and lower Icons to the center

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <span className="position-relative  float-start">
        <FaSearch className="position-absolute search-icon" />
        <input
          id="wd-search-assignment"
          className="ps-5"
          placeholder="Search for Assignments"
        />
      </span>
      <span className="float-end">
        <button id="wd-add-assignment-group" className="btn btn-secondary">
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger">
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </span>
      <br />
      <br />
      <div>
        <ul id="wd-assignment" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <MdArrowDropDown className="me-2 fs-3" />
              Assignments
              <AssignmentControlButton />
            </div>
            <ul className="wd-assignment-list list-group border-left-green rounded-0">
              <li className="wd-assignmnet-list list-group-item ps-0">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item no-border">
                    <BsGripVertical className="me-2 fs-3" />{" "}
                  </li>
                  <li className="list-group-item no-border">
                    <FaPenToSquare
                      className="fs-3"
                      style={{ color: "green" }}
                    />{" "}
                  </li>
                  <li className="list-group-item no-border">
                    
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                    <strong className="float-start" style={{color:"black"}}>A1</strong></a><br />
                    <span>
                      <span style={{ color: "red" }}>Multiple Modules</span> |
                      <strong>Not available until</strong> May 6 at 12:00 am |
                      <strong>Due</strong> May 13 at 11:59pm | 100pts
                    </span>
                  </li>
                  <li className="list-group-item no-border">
                    <LessonControlButtons />
                  </li>
                </ul>
              </li>
              <li className="wd-assignment-list-item list-group-item p-3 ps-0">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item no-border">
                    <BsGripVertical className="me-2 fs-3" />{" "}
                  </li>
                  <li className="list-group-item no-border">
                    <FaPenToSquare
                      className="fs-3"
                      style={{ color: "green" }}
                    />{" "}
                  </li>
                  <li className="list-group-item no-border">
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
                    <strong className="float-start" style={{color:"black"}}>A2</strong></a> <br />
                    <span>
                    <span style={{ color: "red" }}>Multiple Modules</span> |
                      <strong>Not available until</strong> May 12 at 12:00 am |
                      <strong>Due</strong> May 20 at 11:59pm | 100pts
                    </span>
                  </li>
                  <li className="list-group-item no-border">
                    <LessonControlButtons />
                  </li>
                </ul>
              </li>
              <li className="wd-assignment-list-item list-group-item p-3 ps-0">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item no-border justify-content-center">
                    <BsGripVertical className="me-2 fs-3" />
                  </li>
                  <li className="list-group-item no-border">
                    <FaPenToSquare
                      className="fs-3"
                      style={{ color: "green" }}
                    />{" "}
                  </li>
                  <li className="list-group-item no-border">
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
                    <strong className="float-start" style={{color:"black"}}>A3</strong></a> <br />
                    <span>
                    <span style={{ color: "red" }}>Multiple Modules</span> |
                      <strong>Not available until</strong> May 20 at 12:00 am |
                      <strong>Due</strong> May 27 at 11:59pm | 100pts
                    </span>
                  </li>
                  <li className="list-group-item no-border">
                    <LessonControlButtons />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
