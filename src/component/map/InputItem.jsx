"use client"
import React, { useContext, useEffect, useState } from 'react'
import sourceImg from '../../assets/map/source.png'
import destinationImg from '../../assets/map/destination.png'
import { Image } from '@chakra-ui/react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import SourceContext from '../../context/SourceContext'
import DestinationContext from '../../context/DestinationContext'

const google=window.google;
function InputItem({type}) {
    const [value,setValue]=useState(null);
    const [placeholder,setPlaceholder]=useState(null);
    const {source,setSource}=useContext(SourceContext);
    const {destination,setDestination}=useContext(DestinationContext);

    useEffect(()=>{
        type==='source'?setPlaceholder('Pickup Location'):setPlaceholder('Destination Location')
    },[]);

    const getLatAndLng=(place,type)=>{
        const placeId=place.value.place_id;
        const service=new google.maps.places.PlacesService(document.createElement("div"));
        service.getDetails({placeId},(place,status)=>{
            if(status==="OK"&&place.geometry&&place.geometry.location){
                if(type==="source")
                {
                    setSource({
                        lat:place.geometry.location.lat(),
                        lng:place.geometry.location.lng(),
                        name: place.formatted_address,
                        label: place.name,
                    })
                }
                else{
                    setDestination({
                        lat:place.geometry.location.lat(),
                        lng:place.geometry.location.lng(),
                        name: place.formatted_address,
                        label: place.name,
                    })
                }
            }
        })
    } 
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
    <Image src={type==='source'?sourceImg:destinationImg} width={15} height={15} />
    <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
  onSelect={(place) => console.log('Selected:', place)}
  onError={(error) => console.error('Error:', error)}
      selectProps={{
        value, onChange: (place)=>{getLatAndLng(place,type);
        setValue(place)},
        placeholder: placeholder,
        isClearable: true,
        className: 'w-full',
        components:{
            DropdownIndicator:false,
        },
        styles:{
            control: (provided)=>({
                ...provided,
                backgroundColor: '#00ffff00',
                border: 'none',
            }),
        }
      }}
    />
    </div>
  )
}

export default InputItem