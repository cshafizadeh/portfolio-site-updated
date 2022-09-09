import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import SingleProjectPage from './Pages/ProjectsPage/SingleProjectPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<SingleProjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
