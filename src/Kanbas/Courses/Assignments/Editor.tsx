import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {assignments} from "../../Databases"
export default function AssignmentEditor() {
  const { cid, id } = useParams();
  const [assignment, setAssignment] = useState<{ _id: string; title: string; course: string; startCalendar: string; dueCalendar: string; points: number; description: string; availableFrom: string; dueDate: string;}>();

  useEffect(() => {
    const selectedAssignment = assignments.find(
      (assignment: any) => assignment._id === id
    );
    setAssignment(selectedAssignment);
  }, [id]);

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="text-left w-100">
          Assignment Name
        </label>
        <input id="wd-name"  value={assignment?.title ?? ''}  className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="text-left w-100">
          Description
        </label>
        <textarea id="wd-description" value={assignment?.description} className="form-control" rows={12}>
        </textarea>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col text-end">
          Points
        </label>
        <input id="wd-points" value={assignment?.points} className="form-control col" />
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
              value={assignment?.dueCalendar}
              className="form-control"
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
                value={assignment?.startCalendar}
                className="form-control"
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
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end pt-2">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
        </div>
      </div>
    </div>
  );
}
