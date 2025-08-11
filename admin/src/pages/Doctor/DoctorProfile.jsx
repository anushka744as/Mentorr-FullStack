// import React from 'react'
// import { useContext } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { AppContext } from '../../context/AppContext'
// import { useEffect } from 'react'

// const DoctorProfile = () => {
//   const {dToken,profileData,setProfileData,getProfileData} = useContext(DoctorContext)
//   const {currency,backendUrl} = useContext(AppContext)


//   useEffect(()=>{
//     if (dToken) {
//       getProfileData()
//     }
//   },[dToken])

//   return profileData && (
//     <div>
//       <div>
//         <div>
//           <img className='w-64 h-72' src={profileData.image} alt="" />
//         </div>
//         <div>
//           {/*-----Doc Info : name,degree,experience---- */}
//           <p>{profileData.name}</p>
//           <div>
//             <p>{profileData.degree} - {profileData.speciality}</p>
//             <button>{profileData.experience}</button>
//           </div>
//           {/*-----Doc About-------*/}
//           <div>
//             <p>About:</p>
//             <p>
//               {profileData.about}
//             </p>
//           </div>
//           <p>
//             Appointment fee: <span>{currency} {profileData.fees}</span>
//           </p>
//           <div>
//             <p>Address:</p>
//             <p>
//               {profileData.address.line1} <br />
//               {profileData.address.line2}
//             </p>
//           </div>
//           <div>
//             <input type="checkbox" name='' id='' />
//             <label htmlFor="">Available</label>
//           </div>
//           <button>Edit</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DoctorProfile



import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'

const DoctorProfile = () => {
  const { dToken, profileData, getProfileData,setProfileData,backendUrl } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit,setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      const {data} = await axios.post(backendUrl + '/api/doctor/update-profile',updateData,{headers:{dToken}})

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center p-4">
            <img
              className="w-64 h-96 object-cover rounded-lg shadow-lg border-4 border-blue-300"
              src={profileData.image}
              alt={profileData.name}
            />
          </div>

          {/* Doctor Information */}
          <div className="w-full md:w-2/3 p-6 space-y-5 flex flex-col justify-between relative">
            {/* Header Information */}
            <div>
              <h1 className="text-3xl font-semibold text-blue-700">{profileData.name}</h1>
              <p className="text-lg text-gray-700">
                {profileData.degree} - {profileData.speciality}
              </p>
              <p className="text-sm text-gray-500 mt-1">Experience: {profileData.experience}</p>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold text-blue-700">About:</h2>
              <p className="text-gray-600 mt-2">{profileData.about}</p>
            </div>

            {/* Fee and Availability */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-3">
              <p className="text-gray-700 font-medium">
                Appointment Fee: <span className="font-bold">{currency} {isEdit ? <input type="number" onChange={(e)=>setProfileData(prev => ({...prev,fees: e.target.value}))} value={profileData.fees}/> : profileData.fees}</span>
              </p>
              <div className="flex items-center mt-2 md:mt-0 space-x-2">
                <input onChange={()=> isEdit && setProfileData(prev => ({...prev,available: !prev.available}))} checked={profileData.available} type="checkbox"  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="availability" className="text-gray-700">Available for Appointments</label>
              </div>
            </div>

            {/* Address */}
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-blue-700">Address:</h2>
              <p className="text-gray-600 mt-1">
                {isEdit ? <input type="text" onChange={(e)=>setProfileData(prev => ({...prev,address:{...prev.address,line1:e.target.value}}))} value={profileData.address.line1} /> : profileData.address.line1} <br />
                {isEdit ? <input type="text" onChange={(e)=>setProfileData(prev => ({...prev,address:{...prev.address,line2:e.target.value}}))} value={profileData.address.line2} /> : profileData.address.line2}
              </p>
            </div>

            {/* Action Buttons */}
            {
              isEdit 
              ? <div className="flex justify-between items-center mt-6">
              <button onClick={updateProfile} className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105">
                Profile Saved
              </button>
            </div>
            : <div className="flex justify-between items-center mt-6">
            <button onClick={()=>setIsEdit(true)} className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105">
              Edit Profile
            </button>
          </div>
            }
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
