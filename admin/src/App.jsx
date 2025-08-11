

import React, { useState, useContext, useEffect } from 'react';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllApointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
  const { aToken } = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate to change routes

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarNavigation = (path) => {
    setIsSidebarOpen(false); // Close the sidebar
    navigate(path); // Navigate to the new path
  };

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD] min-h-screen'>
      <ToastContainer />
      <Navbar />
      {/* Button to toggle sidebar on mobile devices */}
      <button 
        className="md:hidden w-full p-2 bg-blue-500 text-white rounded-full mr-5" 
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Hide Sidebar' : 'Sidebar'}
      </button>
      <div className='flex relative'>
        {/* Overlay for the sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <Sidebar 
          isOpen={isSidebarOpen} 
          closeSidebar={toggleSidebar} 
          onNavigate={handleSidebarNavigation} 
        />
        {/* Main content area */}
        <div className={`flex-1 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50' : 'opacity-100'} p-4`}>
          <Routes>
            {/* Admin Route */}
            <Route path='/' element={<></>} />
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/all-appointments' element={<AllAppointments />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/doctor-list' element={<DoctorsList />} />

            {/* Doctor Route */}
            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
            <Route path='/doctor-appointments' element={<DoctorAppointments />} />
            <Route path='/doctor-profile' element={<DoctorProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
