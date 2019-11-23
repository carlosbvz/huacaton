import React from 'react'
import './Loading.css'

export default function Loading() {

  return (
    <div className="container-relative">
        <div className="loader-squares center">
            <div className="square square-1"></div>
            <div className="square square-2"></div>
            <div className="square square-3"></div>
            <div className="square square-4"></div>
        </div>
    </div>
  )
}
