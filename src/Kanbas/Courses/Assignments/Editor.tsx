import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as client from "./client";
export default function AssignmentEditor()    
 {

  const { cid, id } = useParams();
 //  const [assignments, setAssignments] = useState(db.assignments);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  
  const [assignment, setAssignment] = useState<any>({
    _id: "000",
    title: "New Assignment",
    course: cid,
    startCalendar: "2023-09-10",
    dueCalendar: "2023-09-10",
    points: 0,
    description: "New Description",
    availableFrom: "May 6 at 12:00 am",
    dueDate: "2May 6 at 12:00 am",
});

  useEffect(() => {
    if (id) {
      const selectedAssignment = assignments.find(
        (assignment: any) => assignment._id === id
      );
      if (selectedAssignment) {
        setAssignment(selectedAssignment);
      }
    }
  }, [id]);

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };

  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };



  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="text-left w-100">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          className="form-control"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="text-left w-100">
          Description
        </label>
        <textarea
          id="wd-description"
          value={assignment.description}
          className="form-control"
          rows={12}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value }) }
        ></textarea>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col text-end">
          Points
        </label>
        <input
          id="wd-points"
          value={assignment?.points}
          className="form-control col"
          onChange={(e) =>
            setAssignment({ ...assignment, points: e.target.value }) }
        />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col text-end">
          Assignment Group
        </label>
        <select id="wd-group" className="col form-control">
          <option selected value="Assignments">
            ASSIGNMENTS
          </option>
        </select>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col form-label text-end"
        >
          Display Grade as
        </label>
        <select id="wd-display-grade-as" className="col form-control">
          <option selected value="Percentage">
            Percentage
          </option>
        </select>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col form-label text-end">
          Submission Type
        </label>
        <div className="col form-control">
          <select id="wd-submission-type" className="form-control">
            <option selected value="Online">
              Online
            </option>
          </select>
          <div>
            <label className="form-label text-left w-100 fw-bold pt-2">
              Online Entry Options
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
              />
              <label
                className="form-check-label text-left w-100"
                htmlFor="wd-text-entry"
              >
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
              />
              <label
                className="form-check-label text-left w-100"
                htmlFor="wd-website-url"
              >
                Website Url
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recordings"
              />
              <label
                className="form-check-label text-left w-100"
                htmlFor="wd-media-recordings"
              >
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
              />
              <label
                className="form-check-label text-left w-100"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-upload"
              />
              <label
                className="form-check-label text-left w-100"
                htmlFor="wd-file-upload"
              >
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-assign" className="col form-label text-end">
          Assign
        </label>
        <div className="col form-control">
          <div className="">
            <label
              htmlFor="wd-assign-to"
              className="form-label text-left w-100 fw-bold"
            >
              Assign to
            </label>
            <input
              id="wd-assign-to"
              value="Everyone"
              className="form-control"
            />
          </div>
          <div className="">
            <label
              htmlFor="wd-due-date"
              className="form-label text-left w-100 fw-bold"
            >
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value={assignment.dueCalendar}
              className="form-control"
              onChange={(e) =>
                setAssignment({ ...assignment, dueCalendar: e.target.value }) }
            />
          </div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="wd-available-from"
                className="form-label text-left w-100 fw-bold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.startCalendar}
                className="form-control"
                onChange={(e) =>
                  setAssignment({ ...assignment, startCalendar: e.target.value }) }
              />
            </div>
            <div className="col">
              <label
                htmlFor="wd-available-until"
                className="form-label text-left w-100 fw-bold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value=""
                className="form-control"
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value }) }
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end pt-2">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-danger"
            onClick={id === "000" ? () => {createAssignment(assignment)} : () => {saveAssignment(assignment)}}
            
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
