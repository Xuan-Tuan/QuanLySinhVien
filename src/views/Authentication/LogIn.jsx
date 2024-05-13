import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// const users = [
//   {
//     id: 4,
//     name: "tuan",
//     email: "student@gmail.com",
//     password: "stu123",
//     role: "student",
//   },
//   {
//     id: 3,
//     name: "tien",
//     email: "lecturer@gmail.com",
//     password: "Lecture123",
//     role: "lecturer",
//   },
//   {
//     id: 2,
//     name: "vu",
//     email: "parent@gmail.com",
//     password: "parent123",
//     role: "parent",
//   },
//   {
//     id: 1,
//     name: "thien",
//     email: "admin@gmail.com",
//     password: "admin123",
//     role: "admin",
//   },
// ];

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  // const handleLogin = () => {
  //   const user = users.find((user) => user.email === email);
  //   if (user) {
  //     if (user.password === password) {
  //       switch (user.role) {
  //         case "student":
  //           alert("Đăng nhập student account");
  //           break;
  //         case "lecturer":
  //           alert("Đăng nhập Lecture account");
  //           break;
  //         case "parent":
  //           alert("Đăng nhập parent account");
  //           break;
  //         case "admin":
  //           alert("Đăng nhập admin account");
  //           break;
  //         default:
  //           break;
  //       }
  //     } else {
  //       setError("email hoặc mật khẩu không hợp lệ");
  //     }
  //   } else {
  //     setError("Không tìm thấy tài khoản");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // console.log(user);
      // console.log(user.uid);
      if (user) {
        localStorage.setItem("info", user.displayName);
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("email", user.email);
        user
          .getIdTokenResult()
          .then((idTokenResult) => {
            // console.log(idTokenResult.claims.role);
            const role = idTokenResult.claims.role;
            localStorage.setItem("role", role);
            // console.log(role);
            navigate(`/${role}`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.error("Login error:", errorCode, errorMessage);
      switch (errorCode) {
        case "auth/invalid-credential":
          setLoginError(
            "Tài khoản hoặc mật khẩu không chính xác. vui lòng thử lại"
          );
          break;
        case "auth/invalid-credentialll":
          setLoginError("Mật khẩu không chính xác. Vui lòng thử lại");
          break;
        default:
          setLoginError("Lỗi trong quá trình đăng nhập. Vui lòng thử lại");
          break;
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container h-auto lg:w-2/6 lg:auto my-8 mx-auto px-12 py-12 flex flex-col justify-center border-4 rounded-3xl  bg-white shadow-md">
        <div className=" flex justify-evenly item-center sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <img className="mt-2 w-20" src={Logo} alt="LOGO" />
          </div>
          <h2 className=" mt-2 text-center text-lg lg:text-2xl font-bold leading-9 tracking-tight text-blue-900">
            HỆ THỐNG <br />
            QUẢN LÝ SINH VIÊN
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng nhập
              </button>
            </div>
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/ForgotPass"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Quên mật khẩu
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
