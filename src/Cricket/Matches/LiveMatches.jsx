import React from 'react'
import Live from './Live'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Helmet } from 'react-helmet-async'

const LiveMatches = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Live Cricket Score | Scorecard | Live Commentary - CricPoint</title>
                <meta name='description' content='Get Live Cricket Scores, Ball by Ball Commentary, Scorecard Updates, Match Facts & related News of all the International & Domestic Cricket Matches across'/>
                <link rel="canonical" href="https://cricpoint.in/live-score" />

            </Helmet>
            <div className="row">
                <div className="col-md-8">
                    <Live/>
                </div>
                <div className="col-md-4">
                    <Sidebar/>
                </div>
            </div>

        </div>
    )
}

export default LiveMatches