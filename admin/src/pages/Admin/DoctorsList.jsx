// import React from 'react'
// import { useContext } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import { useEffect } from 'react'

// const DoctorsList = () => {

//   const {doctors,aToken,getAllDoctors, changeAvailability} = useContext(AdminContext)

//   useEffect(()=>{
//     if (aToken) {
//       getAllDoctors()
//     }
//   },[aToken])


//   return (
//     <div className='m-5 max-h-[90vh] overflow-y-scroll'>
//       <h1 className='text-lg font-medium'>All Doctors</h1>
//       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
//         {
//           doctors.map((item,index)=>(
//             <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
//               <img className='bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
//               <div className='p-4'>
//                 <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
//                 <p className='text-zinc-600 text-sm'>{item.speciality}</p>
//                 <div className='mt-2 flex items-center gap-1 text-sm'>
//                   <input onChange={()=>changeAvailability(item._id)} className='' type="checkbox" checked={item.available} />
//                   <p>Available</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default DoctorsList



// import React, { useContext, useEffect } from 'react';
// import { AdminContext } from '../../context/AdminContext';

// const DoctorsList = () => {
//   const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllDoctors();
//     }
//   }, [aToken]);

//   return (
//     <div className="m-5 max-h-[90vh] overflow-y-scroll">
//       <h1 className="text-2xl font-semibold text-gray-700 mb-6">Our Doctors</h1>
//       <div className="w-full flex flex-wrap gap-6 justify-center">
//         {doctors.length > 0 ? (
//           doctors.map((doctor, index) => (
//             <div 
//               className="border border-indigo-200 shadow-md rounded-xl max-w-xs bg-white overflow-hidden cursor-pointer transition-transform transform hover:scale-105 duration-300 group" 
//               key={index}
//             >
//               <div className="relative">
//                 <img 
//                   className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300" 
//                   src={doctor.image} 
//                   alt={doctor.name} 
//                 />
//                 <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded ${doctor.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//                   {doctor.available ? 'Available' : 'Unavailable'}
//                 </span>
//               </div>
//               <div className="p-4">
//                 <p className="text-gray-800 text-xl font-bold">{doctor.name}</p>
//                 <p className="text-gray-500 text-md mb-2">{doctor.speciality}</p>
//                 <div className="mt-4 flex items-center gap-2 text-sm">
//                   <input 
//                     onChange={() => changeAvailability(doctor._id)} 
//                     type="checkbox" 
//                     checked={doctor.available} 
//                     className="h-4 w-4 text-primary focus:ring-primary focus:outline-none border-gray-300 rounded"
//                   />
//                   <label htmlFor="availability" className="text-gray-600 w-full">
//                     Available for appointments
//                   </label>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600 text-lg">No doctors found. Please try again later.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;




// import React, { useContext, useEffect } from 'react';
// import { AdminContext } from '../../context/AdminContext';

// const DoctorsList = () => {
//   const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllDoctors();
//     }
//   }, [aToken]);

//   return (
//     <div className="sm:m-1 pb-5 max-h-screen overflow-y-scroll hide-scrollbar  smooth-scroll">
//       <h1 className="text-2xl font-semibold text-gray-700 mb-6">Our Doctors</h1>
      
//       {/* Responsive grid with max 3 columns */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-8 justify-items-center">
//         {doctors.length > 0 ? (
//           doctors.map((doctor, index) => (
//             <div 
//               className="w-52 h-72 border border-indigo-200 shadow-md rounded-xl bg-white overflow-hidden cursor-pointer transition-transform transform hover:scale-105 duration-300 group" 
//               key={index}
//             >
//               <div className="relative">
//                 <img 
//                   className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity duration-300" 
//                   src={doctor.image} 
//                   alt={doctor.name} 
//                 />
//                 <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded ${doctor.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//                   {doctor.available ? 'Available' : 'Unavailable'}
//                 </span>
//               </div>
//               <div className="p-4">
//                 <p className="text-gray-800 text-xl font-bold">{doctor.name}</p>
//                 <p className="text-gray-500 text-md mb-2">{doctor.speciality}</p>
//                 <div className="mt-4 flex items-center gap-2 text-sm">
//                   <input 
//                     onChange={() => changeAvailability(doctor._id)} 
//                     type="checkbox" 
//                     checked={doctor.available} 
//                     className="h-4 w-4 text-primary focus:ring-primary focus:outline-none border-gray-300 rounded"
//                   />
//                   <label htmlFor="availability" className="text-gray-600 w-full text-sm">
//                     Appointment available
//                   </label>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600 text-lg">No doctors found. Please try again later.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;



import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-1 max-h-screen">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Our Doctors</h1>

      {/* Scrollable container */}
      <div className="h-[70vh] overflow-y-auto hide-scrollbar smooth-scroll">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-x-2 justify-items-center">
          {doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <div 
                className="w-52 h-72 mt-3 border border-indigo-200 shadow-md rounded-xl bg-white overflow-hidden cursor-pointer transition-transform transform hover:scale-105 duration-300 group" 
                key={index}
              >
                <div className="relative">
                  <img 
                    className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity duration-300" 
                    src={doctor.image} 
                    alt={doctor.name} 
                  />
                  <span className={`absolute top-0 right-0 px-1 py-1 text-xs font-semibold rounded-bl-lg ${doctor.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {doctor.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-800 text-xl font-bold">{doctor.name}</p>
                  <p className="text-gray-500 text-md mb-2">{doctor.speciality}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <input 
                      onChange={() => changeAvailability(doctor._id)} 
                      type="checkbox" 
                      checked={doctor.available} 
                      className="h-4 w-4 text-primary focus:ring-primary focus:outline-none border-gray-300 rounded"
                    />
                    <label htmlFor="availability" className="text-gray-600  w-full">
                      Appointment available
                    </label>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No doctors found. Please try again later.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
