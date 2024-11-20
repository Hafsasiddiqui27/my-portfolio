import React from 'react'
import Boxes from "@/components/shared/Boxes"
import { ShoppingCart } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { MonitorCog } from 'lucide-react';
import { SearchCode } from 'lucide-react';
const Services = () => {
  return (
    <div className='bg-slate-800 text-white'>
<h2 className='text-5xl p-8 text-center font-semibold'>Services</h2>
<div className='grid grid-flow-row sm:grid-cols-3 mx-auto px-10'>

<Boxes
icon= { <ShoppingCart size={44} strokeWidth={2} /> }
header={"E-Commerce Solutions"} 
/>



 <Boxes 
icon={<CodeXml size={44} strokeWidth={2} />} 
header={"Web Application Development"} 
 />

<Boxes 
icon={<MonitorSmartphone size={44} strokeWidth={2} />} 
header={"UI/UX Design"} 
/>




<Boxes 
icon={<LayoutList size={44} />} 
header={"Website Redesign & Modernization"} 
 />



<Boxes 
icon={<MonitorCog size={44} />} 
header={"API Integration & Custom Development"} 
 />

<Boxes 
icon={<SearchCode size={44} />} 
header={"SEO & Website Optimization"} 
 />
</div>
</div> 
)
}

export default Services
