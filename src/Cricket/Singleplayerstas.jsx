import React from 'react'
import SinglePlayer from './SinglePlayer'
import Sidebar from '../components/Sidebar/Sidebar'

const Singleplayerstas = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-8">
                <SinglePlayer/>
            </div>
            <div className='col-md-4'>
                <Sidebar/>
            </div>
        </div>
        
    </div>
  )
}

export default Singleplayerstas