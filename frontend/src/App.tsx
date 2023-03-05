import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NoMatch from "./pages/NoMatch";
import LayoutWrapper from "./common/LayoutWrapper";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreateCVPage from "./pages/CreateCVPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import UsersPage from "./pages/UsersPage";
import CreateProjectPage from "./pages/CreateProjectPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/createcv" element={<CreateCVPage />} />
          <Route path="/createproject" element={<CreateProjectPage />} />
          <Route path="/cv" element={<CreateCVPage />} />
          <Route path="/project:id" element={<ProjectsPage />} />
          <Route path="/user:id" element={<UsersPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/" element={<LayoutWrapper />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
