import { IoFunnelOutline } from "react-icons/io5";
import GradesButtons from "./GradesButtons";
import { FaSearch } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";

export default function AssignmentControlButton() {
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
                <th className="col">A1 SETUP</th>
                <th className="col">A2 HTML</th>
                <th className="col">A3 CSS</th>
                <th className="col">A4 BOOTSTRAP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="row text-danger">Alice Johnson</th>
                <td>85%</td>
                <td>90%</td>
                <td>78%</td>
                <td>
                <div className="d-flex justify-content-center align-items-center">
                <input type="text" className="form-control" defaultValue="92%" style={{ width: "70px" }}/>
                <LiaFileExportSolid  className="position-relative fs-3" />
                </div>
                </td>
              </tr>
              <tr>
                <th className="row text-danger">Bob Smith</th>
                <td>88%</td>
                <td>74%</td>
                <td>91%</td>
                <td>85%</td>
              </tr>
              <tr>
                <th className="row text-danger">Carol Williams</th>
                <td>92%</td>
                <td>81%</td>
                <td>87%</td>
                <td>89%</td>
              </tr>
              <tr>
                <th className="row text-danger">David Brown</th>
                <td>76%</td>
                <td>88%</td>
                <td>84%</td>
                <td>91%</td>
              </tr>
              <tr>
                <th className="row text-danger">Eva Davis</th>
                <td>90%</td>
                <td>95%</td>
                <td>79%</td>
                <td>86%</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}
