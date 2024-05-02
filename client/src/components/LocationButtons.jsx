import React from 'react'

const LocationButtons = () => {
  return (
    <div>
         <div className="flex gap-7">
           <div className="bg-white text-black flex gap-6 w-fit">
        <button className="p-1 border border-black">All Regions</button>
        <button className="p-1 border border-black">France</button>
        <button className="p-1 border border-black">Germany</button>
        <button className="p-1 border border-black">Italy</button>
        <button className="p-1 border border-black">Spain</button>
        <button className="p-1 border border-black">Switzerland</button>
        <button className="p-1 border border-black">UK</button>
      </div>
      </div>
      
    </div>
  )
}

export default LocationButtons
