import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../Config/firestore";
import { useLocation, useNavigate } from "react-router-dom";

const ListSubject = () => {
  const [listCourse, setListCourse] = useState([]);
  const [courseStu, setCourseStu] = useState([]); // quản lý danh môn học của sinh viên
  const location = useLocation();
  const navigate = useNavigate();

  const uid = localStorage.getItem("uid");
  const role = localStorage.getItem("role");

  // Lấy danh sách môn học của sinh viên hoặc phụ huynh
  useEffect(() => {
    const fetchCourseStu = async () => {
      if (role === "student") {
        const q = query(
          collection(db, "courseStudent"),
          where("studentID", "==", uid)
        );
        const querySnapshot = await getDocs(q);
        const courses = [];
        querySnapshot.forEach((doc) => {
          courses.push(doc.data().courseID);
        });
        setCourseStu(courses);
      } else if (role === "parent") {
        const getStudentCourses = async (studentUID) => {
          const q = query(
            collection(db, "courseStudent"),
            where("studentID", "==", studentUID)
          );
          const querySnapshot = await getDocs(q);
          const courses = [];
          querySnapshot.forEach((doc) => {
            courses.push(doc.data().courseID);
          });
          return courses;
        };

        const q = query(
          collection(db, "student"),
          where("parentID", "==", uid)
        );
        const querySnapshot = await getDocs(q);
        console.log("Danh sách dữ liệu sinh viên ==> ", querySnapshot);
        const allCourses = [];
        for (const doc of querySnapshot.docs) {
          const studentUID = doc.data().studentUID; // CHƯA SỬA
          localStorage.setItem("t", doc.data().name);
          const studentCourses = await getStudentCourses(studentUID);
          allCourses.push(...studentCourses);
        }
        setCourseStu(allCourses);
      }
    };

    fetchCourseStu();
  }, [uid, role]);

  // Lấy thông tin môn học
  useEffect(() => {
    const fetchCourses = async () => {
      const temp = [];
      for (const courseID of courseStu) {
        const docRef = doc(db, "course", courseID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const startDay = data.startDay.toDate().toLocaleString();
          const lecturerDoc = await getDoc(
            doc(db, "lecturer", data.lecturerID)
          );
          const lecturerName = lecturerDoc.exists()
            ? lecturerDoc.data().name
            : "N/A";
          temp.push({
            name: data.name,
            startDay,
            roomID: data.roomID,
            code: data.code,
            onlineURL: data.onlineURL,
            week: data.week,
            lecturerName,
          });
        }
      }
      setListCourse(temp);
    };

    if (courseStu.length > 0) {
      fetchCourses();
    }
  }, [courseStu]);

  return (
    <div className="h-[calc(100vh-70px-50px)]">
      <div className=" text-base h-12 mt-8 font-bold text-left align-middle pl-10 text-blue-700">
        <div>
          {role === "student" ? (
            <p>Danh sách môn học của bạn</p>
          ) : role === "parent" ? (
            <p>Danh sách môn học của sinh viên: {localStorage.getItem("t")}</p>
          ) : (
            <p>Vai trò không xác định</p>
          )}
        </div>
      </div>
      <div className="h-[calc(100vh-60px-50px-64px-64px)] m-10 lg:mr-96 lg:ml-20 shadow-lg flex flex-col gap-5 p-5 overflow-y-scroll will-change-scroll">
        {listCourse.map((course, index) => (
          <div
            key={index}
            className="flex flex-row justify-between text-center items-center px-8 py-4 my-5 outline outline-4 outline-slate-50 hover:shadow-2xl  border-2"
          >
            <div className="flex flex-col text-start text-uit text-lg font-bold">
              <p>Môn học: {course.name}</p>
              <p>Giáo viên: {course.lecturerName}</p>
              <p>Thời gian: {course.startDay}</p>
            </div>
            <div>
              <div
                onClick={() => {
                  navigate(`/${role}/DetailSubject/${course.code}`, {
                    state: { course },
                  });
                }}
              >
                <IoArrowForwardCircleOutline
                  className="text-uit mr-10"
                  size={50}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSubject;
