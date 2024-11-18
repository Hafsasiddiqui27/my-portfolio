import React from 'react'
import Boxes from "@/components/shared/Boxes"
import {  BiCartAlt } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { TbSettingsCode } from "react-icons/tb";
import { TbDeviceImacSearch } from "react-icons/tb";
const Services = () => {
  return (
    <div className='bg-slate-800 text-white'>

        <h2 className='text-5xl p-8 text-center font-semibold'>Services</h2>
<div className='grid grid-flow-row sm:grid-cols-3 mx-auto px-10'>

<Boxes
icon= { <BiCartAlt /> }
header={"E-Commerce Solutions"} 
/>



 <Boxes 
icon={<BiCodeAlt />} 
header={"Web Application Development"} 
 />

<Boxes 
icon={<RiComputerFill />} 
header={"UI/UX Design"} 
/>




<Boxes 
icon={<CgWebsite />} 
header={"Website Redesign & Modernization"} 
 />



<Boxes 
icon={<TbSettingsCode />} 
header={"API Integration & Custom Development"} 
 />

<Boxes 
icon={<TbDeviceImacSearch />} 
header={"SEO & Website Optimization"} 
 />
</div>
</div> 
)
}

export default Services
