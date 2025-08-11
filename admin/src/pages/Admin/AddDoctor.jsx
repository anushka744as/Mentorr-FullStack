import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

    const [docImg,setDocImg] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [experience,setExperience] = useState('1 Year')
    const [fees,setFees] = useState('')
    const [about,setAbout] = useState('')
    const [speciality,setSpeciality] = useState('General physician')
    const [degree,setDegree] = useState('')
    const [address1,setAddress1] = useState('')
    const [address2,setAddress2] = useState('')

    const {backendUrl,aToken} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            
            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData()

            formData.append('image',docImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fees',Number(fees))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1,line2:address2}))
            
            formData.forEach((value,key)=>{
                console.log(`${key} : ${value}`);
                
            })

            const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData, {headers:{aToken}})

            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }


        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }


  return (
    <form onSubmit={onSubmitHandler} className="md:m-10 w-auto max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg transform transition-all hover:shadow-2xl md:hover:scale-105">
      <h2 className="mb-8 text-3xl font-bold text-center text-gradient">Add New Doctor</h2>

      {/* Image Upload Section */}
      <div className="flex flex-col items-center mb-10">
        <label htmlFor="doc-img" className="cursor-pointer">
          <img 
            src={docImg? URL.createObjectURL(docImg) :assets.upload_area} 
            alt="Upload" 
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 hover:border-indigo-700 transition-all duration-300" 
          />
        </label>
        <p className="mt-3 text-gray-600 text-sm text-center font-medium">Upload Doctor's Picture</p>
        <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
      </div>

      {/* Form Fields */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-10">
        {/* Doctor Name */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Doctor Name</label>
          <input onChange={(e)=> setName(e.target.value)} value={name} 
            type="text" 
            placeholder="Name" 
            className="input-field"
            required 
          />
        </div>

        {/* Doctor Email */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Doctor Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} 
            type="email" 
            placeholder="Email" 
            className="input-field"
            required 
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Password</label>
          <input onChange={(e)=> setPassword(e.target.value)} value={password} 
            type="password" 
            placeholder="Password" 
            className="input-field"
            required 
          />
        </div>

        {/* Experience */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Experience</label>
          <select onChange={(e)=> setExperience(e.target.value)} value={experience}  className="input-field" required>
            {[...Array(10).keys()].map(year => (
              <option key={year} value={`${year + 1} Year`}>
                {year + 1} Year
              </option>
            ))}
          </select>
        </div>

        {/* Fees */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Fees</label>
          <input onChange={(e)=> setFees(e.target.value)} value={fees} 
            type="number" 
            placeholder="Consultation Fees" 
            className="input-field"
            required 
          />
        </div>

        {/* Speciality */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Speciality</label>
          <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality}  className="input-field" required>
            {["General physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"].map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        {/* Education */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Education</label>
          <input onChange={(e)=> setDegree(e.target.value)} value={degree} 
            type="text" 
            placeholder="Education" 
            className="input-field"
            required 
          />
        </div>
      </div>

      {/* Address */}
      <div className="flex flex-col mb-6">
        <label className="text-gray-800 font-semibold mb-1">Address</label>
        <input onChange={(e)=> setAddress1(e.target.value)} value={address1} 
          type="text" 
          placeholder="Address line 1" 
          className="input-field mb-3"
          required 
        />
        <input onChange={(e)=> setAddress2(e.target.value)} value={address2} 
          type="text" 
          placeholder="Address line 2" 
          className="input-field"
          required 
        />
      </div>

      {/* About Doctor */}
      <div className="flex flex-col mb-10">
        <label className="text-gray-800 font-semibold mb-1">About Doctor</label>
        <textarea onChange={(e)=> setAbout(e.target.value)} value={about} 
          placeholder="Write a brief description about the doctor..." 
          rows={2} 
          className="input-field"
          required 
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
      >
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;





