import React from 'react'
import PackagesButton from './PackagesButton';
import PackagesCard from './PackagesCard';


const array=[{
    title:'Case Review'
},
{
    title:'Basic Trademark Search'
},
{
    title:'Trademark Monitoring Services(1 Month)'
},
{
    title:'Trademark Secured ™'
},
{
    title:'Refusal Risk Meter ™'
},{
    title:'Complete paperwork'
},


]
const array1=[{
    title:'Case Review by a (TM Expert)'
},
{
    title:'Basic Free Trademark Search'
},
{
    title:'Trademark Monitoring Services(3 Month)'
},
{
    title:'Trademark Secured ™'
},
{
    title:'Refusal Risk Meter ™'
},{
    title:'Complete paperwork'
},
]
const array2=[{
    title:'Case Review & Filing by an (Attorney)'
},
{
    title:'Expedited Application Processing within 24 Hours'
},
{
    title:'Filing along with complete Paperwork'
},
{
    title:"Trademark Monitoring Services,(12 Months)"
},
{
    title:'Trademark Secured ™'
},
{
    title:'Refusal Risk Meter ™'
},{
    title:'Litigant Scan'
},
{
    title:'Comprehensive Trademark Search Report(50 States along with social media/Domains)'
},{
    title:'Cease & Desist Letter'
},{
    title:'Dedicated Account Manager & 100% Approval Guranteed'
},
]
const array3=[{
    title:'Case Review & Filing by an (U.S Registered IP Attorney)'
},
{
    title:'Assigned Case Filing Officer'
},
{
    title:'Private Registration'
},
{
    title:'Federal Search & Clearance Report (All States)'
},
{
    title:"Federal E-Filing(USPTO)"
},
{
    title:'Cease & Desist Letter'
},
{
    title:'Trademark Monitoring(1 Year)'
},{
    title:'Trademark Secured'
},
{
    title:'Direct Hit Search'
},{
    title:'Dedicated Case Manager'
},
,{
    title:'24/7 Secure Online Access'
},
,{
    title:'100% Approval Guarantee'
}
]


function Packages() {
  return (
    <>
    <main className="selection:bg-[#bb5644]">
        <div className='w-full h-full bg-[#f9f9f9]  font-sans pt-10 mt-10  lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <h1 className='text-[24px] sm:text-[34px] text-justify font-bold px-8 lg:text-[40px] '>Cost-effective Service Mark & patent filing Packages</h1>
            <p className='text-[18px]  text-justify px-10 font-semibold leading-[20px] mt-4 lg:px-[300px]  '>Our Packages offer comprehensive trademark and patentfiling services at 
                affordable rates . Don't compromise on quality - choose our budget-friendly 
                packages for peace of mind and sercure your intellectual property
                today!
            </p>
            <div className="packages-card  grid grid-cols-1 sm:grid-cols-4 gap-8  sm:gap-0 sm:px-10 md:justify-items-center lg:flex lg:flex-row lg:justify-center lg:gap-4 md:px-2 place-items-center sm:place-items-start mt-12 font-sans">
                <PackagesCard
                title='Basic'
                price='45'
               array={array}
                />
                <PackagesCard title='Deluxe' price='149' array={array1}/>
                <PackagesCard title='Premium' price='299' array={array2}/>
                <PackagesCard title='Supreme' price='449' array={array3}/>
            </div>
        </div>
    </main>
    </>
  )
}

export default Packages;