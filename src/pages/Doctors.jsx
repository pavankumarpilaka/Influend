import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const {speciality} =useParams()
  const {doctors}=useContext(AppContext)
  const [Filterdoc,setFilterdoc]=useState([])
  const navigate=useNavigate()
   
  const applyfilter = () => {
    if(speciality){
      setFilterdoc(doctors.filter(doc=>doc.speciality===speciality))
    }else{
      setFilterdoc(doctors)
    }
  }

  useEffect(()=>{
    applyfilter()
  },[doctors,speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse Through the Doctors By Speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <div className="flex-col gap-4 text-sm text-gray-600">
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "General physician" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/doctors/General physician")}
  >
    General Physician
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/doctors/Gynecologist")}
  >
    Gynecologist
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/doctors/Dermatologist")}
  >
    Dermatologist
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/doctors/Pediatricians")}
  >
    Pediatrician
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/doctors/Neurologist")}
  >
    Neurologist
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/doctors/Gastroenterologist")}
  >
    Gastroenterologist
  </p>
</div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            Filterdoc.map((item,index)=>(
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img className='bg-blue-50' src={item.image} alt=''/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                         <p className='w-2 h-2 rounded-full bg-green-500'></p>
                         <p>Available</p>
                      </div>
                      <p className='text-grey-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-grey-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors