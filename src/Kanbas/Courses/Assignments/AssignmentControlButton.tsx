import { BsPlusLg } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButton() {
    return (
      <div className="float-end">
        <span className="rounded-rect-border">40% of Total </span>  
        <BsPlusLg className="ml-5 fs-4"/>
        <IoEllipsisVertical className="fs-4" />
      </div>
  );}