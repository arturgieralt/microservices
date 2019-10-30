import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import IFrame from './Iframe';

const serviceMap = {
  'service1': {
    url: 'http://localhost:3000'
  },
  'service2': {
    url: 'http://localhost:3002'
  }
}
export default function ViewManager () {
        const { name } = useParams()
        const serviceData = serviceMap[name]

        if(!serviceData) {
          return 'Wrong service name provided!'
        }

        const location = useLocation()
        const relativeLink = location.pathname.split(name)[1]

        return (
          <div>
            <IFrame url={serviceData.url +  relativeLink} name={name} />
          </div>
        )
}