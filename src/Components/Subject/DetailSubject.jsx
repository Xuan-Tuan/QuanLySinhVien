import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "../../Config/firestore";
import { useEffect, useState } from "react";

const DetailSubject = () => {
  const location = useLocation();
  const { course } = location.state;

  const { id } = useParams();
  const [schedule, setSchedule] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Lấy ngày hôm nay dưới dạng Timestamp
  //     const today = new Date();
  //     const startOfToday = new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate()
  //     );
  //     const endOfToday = new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + 1
  //     );
  //     const startTimestamp = Timestamp.fromDate(startOfToday);
  //     const endTimestamp = Timestamp.fromDate(endOfToday);

  //     const q = query(
  //       collection(db, "schedule"),
  //       where("courseID", "==", `${id}`),
  //       where("date", ">=", startTimestamp),
  //       where("date", "<", endTimestamp)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     const data = [];
  //     querySnapshot.forEach((doc) => {
  //       data.push(doc.data());
  //     });
  //     setSchedule(data);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, [id]);

  if (!course) {
    return (
      <p className="text-5xl, text-center">Không tìm thấy thông tin môn học</p>
    );
  }

  return (
    <div className="h-[calc(100vh-60px-50px-64px-64px)] flex flex- row flex-wrap justify-evenly items-center">
      <div className="flex flex-col justify-start items-center space-y-6">
        <h2 className="text-lg text-uit text-center font-semibold ">
          Môn học:{course.name}
        </h2>
        <div className=" p-4 border border-gray-300 rounded-lg">
          <div className=" lg:w-80 w-60 text-left">
            <p>Giáo viên: {course.lecturerName} </p>
            <p>Ngày bắt đầu:{course.startDay}</p>
            <p>Tuần Học: {course.week} Tuần</p>
            <p>Phòng học: {course.roomID}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center space-y-6 ">
        <h2 className="text-lg text-center text-uit font-semibold ">
          Thông tin lịch học
        </h2>
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="text-left lg:w-80 w-60">
            <p>Online URL: {course.onlineURL}</p>
            <p>Thời gian: </p>
            <p>Trạng thái giáo viên: Có</p>
            <p>Trạng thái điểm danh: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSubject;
