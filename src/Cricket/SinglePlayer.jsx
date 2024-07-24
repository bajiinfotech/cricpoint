import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


const SinglePlayer = () => {
    const { id } = useParams();

    const [player, setPlayer] = useState([])

    useEffect(() => {
        getplayers()
    }, [])

    const getplayers = async () => {

        await axios.get(`https://api.cricapi.com/v1/players_info?apikey=a15b86f7-08d4-49f8-995c-6a0190405ee8&offset=0&id=${id}`).then((res) => {
            // console.log(res.data)
            setPlayer(res.data.data)
        }).catch((err) => {
            alert("url error")
        })
    }

    const Name= player.name
    const link = `https://cricpoint.in/player/${Name}`
    // console.log(link)

    return (
        <div className='container'>
            <Helmet>
                <title>{player.name}</title>
                <meta name='description' content=" Get Live Cricket Scores, Scorecard, Schedules of International and Domestic cricket matches along with Latest News, Videos and ICC Cricket Rankings of ..." />
                <link rel="canonical" href={link} />
            </Helmet>


            {player.length == 0 ? ("loading") : (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className='col-md-3'>
                                <img src={player.playerImg} alt="..." class="img-thumbnail img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h2>{player.name} Personal Information</h2>
                                </div>
                                <div>
                                    <table class="table table-striped">
                                        <tbody>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <td scope="col">{player.name}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Country</th>
                                                <td scope="col">{player.country}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Born</th>
                                                <td scope="col">{player.dateOfBirth.slice(0, 10)}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Place Of Born</th>
                                                <td scope="col">{player.placeOfBirth}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Role</th>
                                                <td scope="col">{player.role}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Batting Style</th>
                                                <td scope="col">{player.battingStyle}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Bowling Style</th>
                                                <td scope="col">{player.bowlingStyle}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="">
                            <table className="table table-responsive-sm table-striped">
                                <thead>
                                    <tr>
                                        <th>fn</th>
                                        <th>matchtype</th>
                                        <th>stat</th>
                                        <th>value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {player.stats == true ? ("No Stats Available"): (
                                        player.stats.map((stats, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{stats.fn}</td>
                                                    <td>{stats.matchtype}</td>
                                                    <td>{stats.stat}</td>
                                                    <td>{stats.value}</td>
                                                </tr>
                                            )
                                        })
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default SinglePlayer;