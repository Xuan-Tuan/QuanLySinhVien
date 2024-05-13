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

const uid = localStorage.getItem("uid");
const role = localStorage.getItem("role");
const courseStu = [];

if (role === "student") {
  const q = query(
    collection(db, "courseStudent"),
    where("studentID", "==", `${uid}`)
  );
  const querySnapshot = await getDocs(q);

  querySnapshot?.forEach((doc) => {
    // console.log(doc.data().courseID);
    courseStu.push(doc.data().courseID);
  });
} else if (role === "parent") {
  const getCoursefromStudentID = async (studentUID) => {
    const q = query(
      collection(db, "courseStudent"),
      where("studentID", "==", `${studentUID}`)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot?.forEach((doc) => {
      // console.log(doc.data().courseID);
      courseStu.push(doc.data().courseID);
      console.log("Môn học của con của bố ", courseStu);
    });
  };
  const q = query(collection(db, "student"), where("parentID", "==", `${uid}`));
  const querySnapshot = await getDocs(q);
  querySnapshot?.forEach((doc) => {
    const studentUID = doc.data().studentUID;
    // console.log("Con của bố ", doc.data().studentUID);
    getCoursefromStudentID(studentUID);
  });
} else if (role === "lecturer") {
}

// console.log(courseStu);
const ListSubject = () => {
  // const [name, setName] = useState("");
  // const [startDay, setStartDay] = useState("");
  const [listCourse, setListCourse] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const temp1 = [];

  const getSubject = async (courseID) => {
    const docRef = doc(db, "course", courseID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Dữ liệu môn học => ", docSnap.data());
      // setName(docSnap.data().name);
      // setStartDay(docSnap.data().startDay);
      const startDay = docSnap.data().startDay.toDate(); // Convert to JavaScript Date object
      const formattedStartDay = startDay.toLocaleString(); // Format the date as string

      const getNameLecturer = async (lecturerID) => {
        const docRef = doc(db, "lecturer", lecturerID);
        const docSnap = await getDoc(docRef);
        // console.log(docSnap.data());
        return docSnap.data().name;
      };
      const lecturerName = await getNameLecturer(docSnap.data().lecturerID);

      temp1.push({
        name: docSnap.data().name,
        startDay: formattedStartDay, // Use the formatted date
        roomID: docSnap.data().roomID,
        code: docSnap.data().code,
        onlineURL: docSnap.data().onlineURL,
        week: docSnap.data().week,
        lecturerName: lecturerName,
      });
      console.log("Dữ liệu Thông tin hiển thị => ", temp1);

      setListCourse([...listCourse, ...temp1]);
    } else {
      alert("Không tìm thấy môn học");
    }
  };

  useEffect(() => {
    courseStu.map((item) => getSubject(item));
  }, []);

  // console.log(listCourse);

  return (
    <div className="h-[calc(100vh-60px-50px)]">
      <div className=" text-base h-12 font-bold text-left align-middle pl-10 text-blue-700">
        Môn học sinh viên
      </div>
      <div className="h-[calc(100vh-60px-50px-64px-64px)] m-10 lg:mr-96 lg:ml-20 shadow-lg flex flex-col gap-5 p-5 overflow-y-scroll will-change-scroll">
        {listCourse?.map((course, index) => (
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
