// import React from 'react'
// import { useContext } from 'react'
// import { AdminContext } from '../context/AdminContext'
// import {NavLink} from 'react-router-dom'
// import { assets } from '../assets/assets'

// const Sidebar = () => {

//     const {aToken} = useContext(AdminContext)

//   return (
//     <div className='min-h-screen bg-white border-r'>
//       {
//         aToken && <ul className='text-[#515151] mt-5'>
//             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
//                 <img src={assets.home_icon} alt="" />
//                 <p>Dashboard</p>
//             </NavLink>

//             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/all-appointments'}>
//                 <img src={assets.appointment_icon} alt="" />
//                 <p>Appointments</p>
//             </NavLink>

//             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/add-doctor'}>
//                 <img src={assets.add_icon} alt="" />
//                 <p>Add Doctor</p>
//             </NavLink>

//             <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-list'}>
//                 <img src={assets.people_icon} alt="" />
//                 <p>Doctors List</p>
//             </NavLink>
//         </ul>
//       }
//     </div>
//   )
// }

// export default Sidebar


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ isOpen, closeSidebar, onNavigate }) => {
//   return (
//     <div 
//       className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
//     >
//       <button className="absolute top-4 right-4" onClick={closeSidebar}>Close</button>
//       <nav className="flex flex-col p-4">
//         <button onClick={() => onNavigate('/admin-dashboard')} className="p-2 text-left">Dashboard</button>
//         <button onClick={() => onNavigate('/all-appointments')} className="p-2 text-left">All Appointments</button>
//         <button onClick={() => onNavigate('/add-doctor')} className="p-2 text-left">Add Doctor</button>
//         <button onClick={() => onNavigate('/doctor-list')} className="p-2 text-left">Doctor List</button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { DoctorContext } from '../context/DoctorContext';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { aToken } = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)

  return (
    <div 
      className={`fixed top-0 left-0 h-screen w-52 bg-white border-r shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:translate-x-0`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-[#515151]">Admin Panel</h2>
        <button className="text-gray-600 text-lg md:hidden" onClick={closeSidebar}>×</button>
      </div>
      {aToken && (
        <ul className='text-[#515151] mt-5'>
          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/admin-dashboard'}
          >
            <img src={assets.home_icon} alt="Home Icon" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/all-appointments'}
          >
            <img src={assets.appointment_icon} alt="Appointments Icon" />
            <p>Appointments</p>
          </NavLink>

          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/add-doctor'}
          >
            <img src={assets.add_icon} alt="Add Doctor Icon" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/doctor-list'}
          >
            <img src={assets.people_icon} alt="Doctors List Icon" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}


{dToken && (
        <ul className='text-[#515151] mt-5'>
          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/doctor-dashboard'}
          >
            <img src={assets.home_icon} alt="Home Icon" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/doctor-appointments'}
          >
            <img src={assets.appointment_icon} alt="Appointments Icon" />
            <p>Appointments</p>
          </NavLink>

          <NavLink 
            className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-1 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} 
            to={'/doctor-profile'}
          >
            <img src={assets.people_icon} alt="Doctors List Icon" />
            <p>Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
