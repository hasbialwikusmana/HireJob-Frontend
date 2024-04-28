import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import RegisterWorker from "./pages/auth/RegisterWorker";
import RegisterRecruiter from "./pages/auth/RegisterRecruiter";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import ProfileWorkerById from "./pages/Profile/ProfileId";
import ProfileRecruiter from "./pages/Profile/ProfileRecruiter";
import EditWorker from "./pages/Profile/EditWorker";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState } from "react";
import EditRecruiter from "./pages/Profile/EditRecruiter";
import NavbarUtama from "./components/Navbar/NavbarUtama";
import Hire from "./pages/Hire/Hire";
import ListHireWorker from "./pages/Hire/ListHireWorker";
import ListHireRecruiter from "./pages/Hire/ListHireRecruiter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const userLoggedIn = localStorage.getItem("token");
    setIsLoggedIn(!!userLoggedIn);
  };

  useState(() => {
    checkLoginStatus();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN REGISTER */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register-worker" element={<RegisterWorker />} />
        <Route path="/auth/register-recruiter" element={<RegisterRecruiter />} />

        {/* Landing */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <PrivateRoute>
                <Navbar />
                <Landing />
                <Footer />
              </PrivateRoute>
            ) : (
              <>
                <Navbar />
                <Landing />
                <Footer />
              </>
            )
          }
        />

        {/* Home */}
        <Route path="/home" element={<PrivateRouteLayout component={<Home />} />} />

        {/* Profie */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Profile by ID */}
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <ProfileWorkerById />
            </PrivateRoute>
          }
        />

        {/* Profile Recruiter */}
        <Route
          path="/profile-recruiter"
          element={
            <PrivateRoute>
              <ProfileRecruiter />
            </PrivateRoute>
          }
        />

        {/* Edit Worker */}
        <Route
          path="/profile/edit-worker"
          element={
            <PrivateRoute>
              <EditWorker />
            </PrivateRoute>
          }
        />

        {/* Edit Recruiter */}
        <Route
          path="/profile/edit-recruiter"
          element={
            <PrivateRoute>
              <EditRecruiter />
            </PrivateRoute>
          }
        />

        {/* Hire */}
        <Route
          path="/hire/:id"
          element={
            <PrivateRoute>
              <Hire />
            </PrivateRoute>
          }
        />

        {/* List Hire Worker */}
        <Route
          path="/hire/worker"
          element={
            <PrivateRoute>
              <ListHireWorker />
            </PrivateRoute>
          }
        />

        {/* List Hire Worker */}
        <Route
          path="/hire/recruiter"
          element={
            <PrivateRoute>
              <ListHireRecruiter />
            </PrivateRoute>
          }
        />

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// eslint-disable-next-line react/prop-types
const PrivateRouteLayout = ({ component }) => (
  <>
    <PrivateRoute>
      <NavbarUtama />
      {component}
      <Footer />
    </PrivateRoute>
  </>
);

export default App;
