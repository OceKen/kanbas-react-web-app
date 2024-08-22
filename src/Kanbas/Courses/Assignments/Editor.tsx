import "bootstrap/dist/css/bootstrap.min.css";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="text-left w-100">
          Assignment Name
        </label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="text-left w-100">
          Description
        </label>
        <textarea id="wd-description" className="form-control" rows={12}>
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netlify. The landing apge should
          include the following: Your full name and section lins to each of the
          lab assignmnets Lik to the Kanbas application Links to all relevant
          source code repositories The Kanbas application should inlcude a link
          to navigate back to the landding page.
        </textarea>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col text-end">
          Points
        </label>
        <input id="wd-points" value={100} className="form-control col" />
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
              value="2024-05-13"
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
                value="2024-05-06"
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
                value="2024-05-20"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end pt-2">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}
