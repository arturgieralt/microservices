import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import IFrame from './Iframe';

const serviceMap = {
  'service1': {
    url: 'http://localhost:3000'
  }
}
export default function ViewManager () {
        const { name } = useParams()
        const location = useLocation()
        const src = serviceMap[name].url
        const relativeLink = location.pathname.split(name)[1]
        console.log(relativeLink)
        return <div>
          <IFrame url={src +  relativeLink} name={name} />
        </div>
    
}