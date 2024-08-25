import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        points: assignment.points,
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        availableFrom: formatDate(assignment.startCalendar) + " at 12:00 am",
        dueDate: formatDate(assignment.dueCalendar) + " at 11:59 pm",
        startCalendar: assignment.startCalendar,
        dueCalendar: assignment.dueCalendar,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});

function formatDate(dateString: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month, 10) - 1];

  return `${monthName} ${parseInt(day, 10)}`;
}
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;