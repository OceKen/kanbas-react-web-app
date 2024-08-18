export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing apge should include
        the following: Your full name and section lins to each of the lab
        assignmnets Lik to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should inlcude a link to
        navigate back to the landding page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Points </label>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-group">Assignment Group </label>
            <select id="wd-group">
              <option selected value="Assignments">
                ASSIGNMENTS
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">
                Percentage
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-submission-type">Submission Type </label>
            <select id="wd-submission-type">
              <option selected value="Online">
                Online
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label>Online Entry Options</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website Url</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to </label>
            <br />

            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-due-date"> Due </label>
            <input type="date" id="wd-due-date" value="2024-05-13" />
            <br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from"> Available from </label>
            <input type="date" id="wd-available-from" value="2024-05-06" />

            <label htmlFor="wd-available-until"> Until </label>
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <button> Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
