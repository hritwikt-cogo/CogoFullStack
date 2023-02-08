import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BlogPost from "./views/BlogPost";
import Landing from "./views/Landing";
import Error from "./views/Error";
import SignUp from "./views/SignUp";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";
import Editor from "./views/Editor";
import Pricing from "./views/Pricing";



function App() {
  return (
    <>
      {/* <BlogPost /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/blogs/:id" element={<BlogPost />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='edit' element= {<Editor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
