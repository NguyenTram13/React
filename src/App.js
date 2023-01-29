import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogPageDetail from "./components/BlogPageDetail";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";
const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              repellat perferendis, molestiae neque numquam quaerat magnam sunt
              omnis suscipit dolorum, harum veniam ipsam sapiente porro
              reprehenderit expedita voluptas adipisci exercitationem?
            </div>
          }
        ></Route>
        <Route path="/movie" element={<div>this is movie page</div>}></Route>
        <Route path="/about" element={<div> this is about page</div>}></Route>
        <Route
          path="/mobie/:mmovieId"
          element={<div> this is movie details of movied</div>}
        ></Route>
      </Routes> */}
      {/* <Nav></Nav> */}
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>

          <Route
            path="/profile"
            element={<ProfilePage>Profile Page</ProfilePage>}
          ></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
