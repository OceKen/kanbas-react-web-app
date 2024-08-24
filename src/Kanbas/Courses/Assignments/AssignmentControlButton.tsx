import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Module/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleteDialog from "./AssignmentDeleteDialog";
export default function AssignmentControlButton(
   {assignmentId, deleteAssignment}: {assignmentId: string; deleteAssignment:(assignmentId:string) => void;}
) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <FaTrash className="text-danger me-2 mb-1" 
      data-bs-toggle="modal" data-bs-target="#wd-assignment-delete-dialog" />
      <AssignmentDeleteDialog dialogTitle="Delete Assignment"
                    assignmentId={assignmentId} deleteAssignment={deleteAssignment}/>
    </div>
);}