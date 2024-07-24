import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import PlayersStats from './PlayersStats'
import { Helmet } from 'react-helmet-async'

const Players = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Players List</title>
                <meta name='description' content=" Get Live Cricket Scores, Scorecard, Schedules of International and Domestic cricket matches along with Latest News, Videos and ICC Cricket Rankings of ..." />
                <link rel="canonical" href="https://cricpoint.in/players" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <PlayersStats />
                    </div>
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Players