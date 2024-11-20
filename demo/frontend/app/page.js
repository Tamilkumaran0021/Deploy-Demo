"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const url =  "https://demo-backend-service.onrender.com"
const [data,setdata] = useState({});
useEffect(()=>{
  axios.get(`${url}/`).then((res)=>{
    setdata(res.data) 
  })

},[])
  return (
    <div className="text-black absolute top-1/2 -translate-y-1/2 translate-x-1/2 w-1/2 h-96 bg-gray-200 p-10 flex flex-col gap-2 rounded-md">
    <h1 className="text-lg font-bold">Name:{data.Name}</h1>
    <h1 className="text-lg font-bold">role:{data.Role}</h1>
    <h1 className="text-lg font-bold">Objective :</h1>
    <p> Enthusiastic and innovative fresher with a strong foundation in the MERN stack, proficient in
      building dynamic and responsive web applications. Skilled in Figma for designing intuitive user
      interfaces and experienced with GitHub for version control and collaborative development. Eager
      to contribute to a forward-thinking organization where I can leverage my technical skills to drive
      impactful projects and continuous improvement.</p>
    </div>
  );
}
