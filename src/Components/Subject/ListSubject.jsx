import React from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../Config/firestore";

const getSubject = async () => {};

// get all document

// const querySnapshot = await getDocs(collection(db, "Course"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

// get a document with UID

// const docRef = doc(db, "Course", "3V1GaAwAXr401YxN32Ik");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

// get some document with WHERE
const q = query(
  collection(db, "Course"),
  where("LecAuth_ID", "==", "qyzPytcyXBgDwzC6wxYb4C2ltfb2")
);

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

const ListSubject = () => {
  return (
    <div className="h-[calc(100vh-60px-50px)]">
      <div className=" h-16">Môn học sinh viên</div>
      <div className="h-[calc(100vh-60px-50px-64px-64px)] ml-20 mr-60  bg-gray-100 shadow-md flex flex-col gap-5 p-5 overflow-y-scroll will-change-scroll">
        <div className=" border-uit border-2">Môn học 1</div>
        <div className=" border-uit border-2">Môn học 2</div>
        <div className=" border-uit border-2">Môn học 3</div>
        <div className=" border-uit border-2">Môn học 4</div>
        <div className=" border-uit border-2">Môn học 5</div>
        <div className=" border-uit border-2">Môn học 6</div>
        <div className=" border-uit border-2">Môn học 7</div>
        <div className=" border-uit border-2">Môn học 8</div>
        <div className=" border-uit border-2">Môn học 9</div>
        <div className=" border-uit border-2">Môn học 10</div>
        <div className=" border-uit border-2">Môn học 11</div>
        <div className=" border-uit border-2">Môn học 12</div>
      </div>
    </div>
  );
};

export default ListSubject;
