import { LiaFileExportSolid, LiaFileImportSolid } from "react-icons/lia";
import { HiMiniCog6Tooth  } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

export default function GradesButtons() {
  return (
    <div className="float-end">
      <button
        id="wd-grades-setting-button"
        className="btn btn-secondary me-1 float-end"
      >
        <HiMiniCog6Tooth  className="position-relative me-0 fs-3" style={{ bottom: "1px" }} />
      </button>
      <button
        id="wd-grades-export-button"
        className="btn btn-secondary me-1 float-end"
      >
        <LiaFileExportSolid  className="position-relative me-2 fs-3" style={{ bottom: "1px" }} />
        Export
        <IoIosArrowDown className="position-relative ms-1 me-0 fs-5" style={{ bottom: "1px" }} />
      </button>
      <button
        id="wd-grades-import-button"
        className="btn btn-secondary me-1 float-end"
      >
        <LiaFileImportSolid  className="position-relative me-2 fs-3" style={{ bottom: "1px" }} />
        Import
      </button>
    </div>
  );
}
