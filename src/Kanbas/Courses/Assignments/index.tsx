import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentsControlButton from "./AssignmentsControlButton";
import AssignmentControlButton from "./AssignmentControlButton";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments(
  
) {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const assignment = { _id: "000" };


  return (
    <div id="wd-assignments">
      <span className="position-relative float-start">
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
        <Link
          id="wd-add-assignment"
          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
          className="btn btn-danger"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Link>
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
              <AssignmentsControlButton />
            </div>
            <ul className="wd-assignment-list list-group border-left-green rounded-0">
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <li
                    key={assignment._id}
                    className="wd-assignment-list-item list-group-item p-3 ps-0"
                  >
                    <ul className="list-group list-group-horizontal">
                      <li className="list-group-item no-border">
                        <BsGripVertical className="me-2 fs-3" />
                      </li>
                      <li className="list-group-item no-border">
                        <FaPenToSquare
                          className="fs-3"
                          style={{ color: "green" }}
                        />
                      </li>
                      <li className="list-group-item no-border">
                        <a
                          className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          <strong
                            className="float-start"
                            style={{ color: "black" }}
                          >
                            {assignment.title}
                          </strong>
                        </a>
                        <br />
                        <span>
                          <span style={{ color: "red" }}>Multiple Modules</span>{" "}
                          |<strong>Not available until</strong>{" "}
                          {assignment.availableFrom} |<strong>Due</strong>{" "}
                          {assignment.dueDate} | {assignment.points}pts
                        </span>
                      </li>
                      <li className="list-group-item no-border ms-auto">
                        <AssignmentControlButton
                        assignmentId={assignment._id}
                        deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))} />
                      </li>
                    </ul>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
