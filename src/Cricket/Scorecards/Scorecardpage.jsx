import React from 'react'
import Scorecard from './Scorecard'
import Sidebar from '../../components/Sidebar/Sidebar'

const Scorecardpage = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-8">
                <Scorecard/>
            </div>
            <div className="col-md-4">
                <Sidebar/>
            </div>
        </div>
        
    </div>
  )
}

export default Scorecardpage