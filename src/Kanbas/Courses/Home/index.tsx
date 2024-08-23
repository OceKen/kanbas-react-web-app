import Module from "../Module";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <table id="wd-home">
      <tbody>
      <tr>
        <td valign="top">
          <Module />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
      </tbody>
    </table>
  );
}
