import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./Applayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Audio from "./pages/Audio";
import Discover from "./pages/Discover";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";
import Menu from "./components/Menu";
import Videos from "./pages/Videos";
import TherapyBot from "./pages/TherapyBot";
import Intake from "./components/Intake";
import Seatch from "./pages/Seatch";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import { Mailsent } from "./auth/MailSent";
import VideoView from "./components/VideoView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/mailSent" element={<Mailsent />} />

        <Route element={<Applayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exercise/1" element={<VideoView />} />{" "}
          <Route path="/blog" element={<Blog />} />
          <Route path="/audio" element={<Audio />} />
        </Route>

        <Route element={<Discover />}>
          <Route index element={<Navigate replace to="/discover" />} />
          <Route path="/discover" element={<Articles />} />
        </Route>

        <Route element={<Menu />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/therapybot" element={<TherapyBot />} />
        </Route>

        <Route>
          <Route index element={<Navigate replace to="/seatch" />} />
          <Route path="/seatch" element={<Seatch />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Intake />} />
          <Route path="/contactus" element={<Contactus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
