import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import SingleProjectPage from './Pages/ProjectsPage/SingleProjectPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter className="flex-wrapper">
      <ToastContainer position="bottom-center" limit={1} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<SingleProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
