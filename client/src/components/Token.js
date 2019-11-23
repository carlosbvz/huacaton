import React from 'react'

export default function Token({name}) {

    
  return (
    <div className="token" style={{height: '50px'}}>
        <span style={{
                border: '1px dashed #3f50b6',
                padding: '10px 20px',
                borderRadius: '5px',
        }}>{name}</span>
    </div>
  )
}
