import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
const App = () => {
  return (
    <div>
      <Router>
        <div className="app">
          <Routes>
            {routes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
