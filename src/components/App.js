import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a diploma</h3>} />
        </Route>
        <Route path="Register" element={<Register />} />
        <Route path="Confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page IsNot Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic Courses</a>
      </footer>
    </div>
  );
}

export default App;
