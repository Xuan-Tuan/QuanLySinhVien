import LogIn from "../views/Authentication/LogIn";
import ForgotPass from "../views/Authentication/ForgotPass";
// Admin
import AMAccount from "../views/Admin/AMAccount";
import ManageLectures from "../views/Admin/ManageLectures";
import ManageParent from "../views/Admin/ManageParent";
import ManageStudent from "../views/Admin/ManageStudent";
import ManageSubjects from "../views/Admin/ManageSubjects";
import AMNotification from "../views/Admin/AMNotification";
// Lecture
import AccountLecturer from "../views/Lecturer/AccountLecturer";
import AddNotice from "../views/Lecturer/AddNotice";
import Attendance from "../views/Lecturer/Attendance";
import LecDetailSubject from "../views/Lecturer/LecDetailSubject";
import LecListSubject from "../views/Lecturer/LecListSubject";
import MakeupSchedule from "../views/Lecturer/MakeupSchedule";
import LecNotification from "../views/Lecturer/LecNotification";
// Student
import AccountStudent from "../views/Student/AccountStudent";
import StuDetailSubject from "../views/Student/StuDetailSubject";
import StuListSubject from "../views/Student/StuListSubject";
import StuNotification from "../views/Student/StuNotification";
// Parent
import AccountParent from "../views/Parent/AccountParent";
import ParDetailSubject from "../views/Parent/ParDetailSubject";
import ParListSubject from "../views/Parent/ParListSubject";
import ParNotification from "../views/Parent/ParNotification";

const routes = [
  // Authentication
  { path: "/LogIn", component: LogIn },
  { path: "/ForgotPass", component: ForgotPass },
  { path: "/", component: LogIn },
  // Admin
  { path: "/Admin/Account", component: AMAccount },
  { path: "/Admin", component: ManageLectures },
  { path: "/Admin/ManageLectures", component: ManageLectures },
  { path: "/Admin/ManageParent", component: ManageParent },
  { path: "/Admin/ManageStudent", component: ManageStudent },
  { path: "/Admin/ManageSubjects", component: ManageSubjects },
  { path: "/Admin/Notification", component: AMNotification },
  // Lecture
  { path: "/Lecturer/Account", component: AccountLecturer },
  { path: "/Lecturer", component: LecListSubject },
  { path: "/Lecturer/AddNotice", component: AddNotice },
  { path: "/Lecturer/Attendance", component: Attendance },
  { path: "/Lecturer/DetailSubject", component: LecDetailSubject },
  { path: "/Lecturer/ListSubject", component: LecListSubject },
  { path: "/Lecturer/MakeupSchedule", component: MakeupSchedule },
  { path: "/Lecturer/Notification", component: LecNotification },
  // Student
  { path: "/Student/Account", component: AccountStudent },
  { path: "/Student", component: StuListSubject },
  { path: "/Student/DetailSubject", component: StuDetailSubject },
  { path: "/Student/ListSubject", component: StuListSubject },
  { path: "/Student/Notification", component: StuNotification },
  // Parent
  { path: "/Parent/Account", component: AccountParent },
  { path: "/Parent", component: ParListSubject },
  { path: "/Parent/DetailSubject", component: ParDetailSubject },
  { path: "/Parent/ListSubject", component: ParListSubject },
  { path: "/Parent/Notification", component: ParNotification },
];

export default routes;
