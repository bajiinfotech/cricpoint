import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../../src/loader.gif'
import { Link } from 'react-router-dom'
import Logo from '../Images/cricpoint.png'

const PlayersStats = () => {


  const [player, setPlayer] = useState([])

  useEffect(() => {
    getplayers()
  }, [])


  const getplayers = async () => {

    await axios.get(`https://api.cricapi.com/v1/players?apikey=a15b86f7-08d4-49f8-995c-6a0190405ee8&offset=0`).then((res) => {
      // console.log(res.data.data)
      setPlayer(res.data.data)
    }).catch((err) => {
      alert("url error")
    })
  }


  return (
    <div className='container'>
      <div className="row">
        {player.length == 0 ? (<div>
          <img className="loader" src={Loader} alt="Loader" />
        </div>) : (
          <div>
            <div className="container-fluid">
              <div className="row">


                {player.map((players, index) => {
                  return (
                    <>
                      <div key={players.id} className='card m-3' style={{ width: "15rem" }}>
                        <h4 className='card-head bg-info p-1 text-white'>{players.name}</h4>
                        <div className="card-body">
                          <img className='img-fluid' src={Logo} alt="" srcset="" />
                        </div>
                        <Link to={`/player/${players.id}`} className='text-center bg-info p-1 text-white' >

                          Player Details

                        </Link>

                      </div>

                    </>

                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default PlayersStats;