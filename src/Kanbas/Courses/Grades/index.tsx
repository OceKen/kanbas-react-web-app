import { IoFunnelOutline } from "react-icons/io5";
import GradesButtons from "./GradesButtons";
import { FaSearch } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import { enrollments, users, assignments, grades } from "../../Databases";

export default function Grades() {
  const { cid } = useParams();

  const courseEnrollments = enrollments.filter(enrollment => enrollment.course === cid);
  const enrolledUsers = users.filter(user => courseEnrollments.some(enrollment => enrollment.user === user._id));
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  const courseGrades = grades.filter(grade => courseAssignments.some(assignment => assignment._id === grade.assignment));

  return (
    <div>
      <div className="row">
        <GradesButtons />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <label
            htmlFor="wd-grades-student-names"
            className="text-left w-100 fw-bold"
          >
            Student Names
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              id="wd-grades-search-student-names"
              placeholder="Search Students"
              className="form-control ps-5"
            />
          </div>
        </div>
        <div className="col">
          <label htmlFor="wd-name" className="text-left w-100 fw-bold">
            Assignment Names
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              id="wd-name"
              placeholder="Search Assignments"
              className="form-control ps-5"
            />
          </div>
        </div>
      </div>
      <div className="pt-3">
        {" "}
        <button
          id="wd-grades-setting-button"
          className="btn btn-secondary me-1 float-start"
        >
          <IoFunnelOutline
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Apply Filters
        </button>
      </div>
      <br />
      <br />
        <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="col text-left">Student Names</th>
              {courseAssignments.map(assignment => (
                <th key={assignment._id} className="col">{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledUsers.map(user => (
              <tr key={user._id}>
                <th className="row text-danger">{user.firstName + " " + user.lastName}</th>
                {courseAssignments.map(assignment => {
                  const grade = courseGrades.find(grade => grade.student === user._id && grade.assignment === assignment._id);
                  return <td key={assignment._id}>{grade ? `${grade.grade}%` : "N/A"}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
}
