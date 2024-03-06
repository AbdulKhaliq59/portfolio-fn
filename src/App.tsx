import { Routes, Route, useNavigate } from 'react-router-dom';
import { scrollReveal } from './util/scrollReveal';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ProjectDetails from './components/ProjectDetails';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

window.addEventListener('load', scrollReveal);
window.addEventListener('scroll', scrollReveal);
window.addEventListener('resize', scrollReveal);

function App() {
  const navigate = useNavigate();

  const isLoginPage = window.location.pathname.toLowerCase().includes('/login');
  const isSignupPage = window.location.pathname.toLowerCase().includes('/signup');
  return (
    <>
      {isLoginPage && isSignupPage ? null : <Navbar />}
      <div className="App container md:max-w-7xl mx-auto">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="resume" element={<Resume />} />
            <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          </Routes>
        </ScrollToTop>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
