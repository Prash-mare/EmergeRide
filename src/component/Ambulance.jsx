"use client"
import React, { useState } from 'react'
import SearchSection from './map/SearchSection'
import GoogleMapSection from './map/GoogleMapSection'
import SourceContext from '../context/SourceContext'
import DestinationContext from '../context/DestinationContext'

const Ambulance = () => {
  const [source,setSource]=useState([])
  const [destination,setDestination]=useState([])
  return (
    <SourceContext.Provider value={{source, setSource}}>
      <DestinationContext.Provider value={{destination,setDestination}}>
    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>

        <div>
            <SearchSection/>
        </div>

        <div className='col-span-2'>
            <GoogleMapSection/>
        </div>

    </div>
    </DestinationContext.Provider>
    </SourceContext.Provider>
  )
}

export default Ambulance