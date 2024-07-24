import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Live = () => {
  const navigate = useNavigate()
  const [fixture, setFixture] = useState([])

  useEffect(() => {
    getfixtures()
  }, [])

  const getfixtures = async () => {
    await axios.get(`https://api.cricapi.com/v1/cricScore?apikey=ef54ecd7-78ec-4a47-827d-61b21672e925`).then((res) => {
      // console.log(res.data)
      if (res.data.status== "failure"){
        navigate("/")
      }
      else{
        const data = res.data.data
        setFixture(data)
      }
    }).catch((err) => {
      alert("please check url")
      navigate("/")
    });
  }



  return (
    <div className='container'>
      <h2>Live Cricket Score</h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item p-2">
          <a className="nav-link p-2" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Recent</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link p-2 active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Live <i class="bi bi-dot"></i></a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link p-2" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">UpComing</a>
        </li>
      </ul>

      {/* tabs list  content  */}
      <div className="tab-content" id="myTabContent">

        {/* this is for completed matches list  */}
        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">

          <div>{fixture.filter((fixture) => fixture.ms == "result").map((po, index) => {
            return (
              <div>
                <div className='card mb-4'>
                  <div className="card-header">
                    <h4>{po.t1} <span className='text-danger'>Vs</span> {po.t2}</h4>
                  </div>

                  <div className='card-body'>

                    {/* <div className='card-img'>
                <img className='img-fluid' src={po.t1img} alt="" /> <span>vs</span>
                <img className='img-fluid' src={po.t2img} alt="" />
              </div> */}
                    <div>
                      <table>
                        <tr>
                          <td className='pr-5'>{po.t1}</td>
                          <td>{po.t1s}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className='pr-5'>{po.t2}</td>
                          <td>{po.t2s}</td>
                        </tr>
                        <tr>

                          <td>Start Time: <Moment format='MMMM Do YYYY'>{po.dateTimeGMT}</Moment> </td>

                        </tr>
                      </table>
                    </div>
                    {/* <div>
                <p>Start Time: <Moment>{po.dateTimeGMT}</Moment> </p>
              </div> */}
                    <div className='mt-2'>
                      <h5><Link to="/">{po.status}</Link></h5>
                    </div>
                    <div>
                      <h6><Link to="/"> Live </Link>| <Link to={`/scorecard/${po.id}`}> Scorecard </Link></h6>
                    </div>
                  </div>


                </div>
              </div>
            )
          })}</div>
        </div>

        {/* this is for live matches list  */}
        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div>{fixture.filter((fixture) => fixture.ms == "live").map((po, index) => {
            return (
              <div>
                {/* <h3>Live</h3> */}
                <div className='card mb-4'>
                  <div className="card-header">
                    <h4>{po.t1} <span className='text-danger'>Vs</span> {po.t2}</h4>
                  </div>

                  <div className='card-body'>

                    {/* <div className='card-img'>
                <img className='img-fluid' src={po.t1img} alt="" /> <span>vs</span>
                <img className='img-fluid' src={po.t2img} alt="" />
              </div> */}
                    <div>
                      <table>
                        <tr>

                          <td>Start Time: <Moment format='lll'>{po.dateTimeGMT.toLocaleString("en-US")}</Moment> </td>

                        </tr>
                        <tr>
                          <td className='pr-5'>{po.t1}</td>
                          <td>{po.t1s}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className='pr-5'>{po.t2}</td>
                          <td>{po.t2s}</td>
                        </tr>
                      </table>
                    </div>

                    <div className='mt-2'>
                      <h5><Link to="/">{po.status}</Link></h5>
                    </div>
                  </div>
                  <div className='card-footer'>
                    <Link to={`/scorecard/${po.id}`}>
                    <h6>Scorecard</h6>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}</div>
        </div>

        {/* this is upcoming matchs list  */}
        <div className="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">

          {/* Upcoming Matches */}
          <div>{fixture.reverse().filter((fixture) => fixture.ms == "fixture").map((po, index) => {
            return (
              <div>
                <div className='card mb-4'>
                  <div className="card-header">
                    <h4>{po.t1} <span className='text-danger'>Vs</span> {po.t2}</h4>
                  </div>

                  <div className='card-body'>

                    {/* <div className='card-img'>
                <img className='img-fluid' src={po.t1img} alt="" /> <span>vs</span>
                <img className='img-fluid' src={po.t2img} alt="" />
              </div> */}
                    <div>
                      <table>
                        <tr>
                          <td className='pr-5'>{po.t1}</td>
                          <td>{po.t1s}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className='pr-5'>{po.t2}</td>
                          <td>{po.t2s}</td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      <p>Start Time: <Moment  format='lll'>{po.dateTimeGMT.toLocaleString("en-US")}</Moment> </p>
                    </div>
                    <div className='mt-2'>
                      <h5><Link to="/">{po.status}</Link></h5>
                    </div>
                  </div>
                  <div className='card-footer'>
                    <h6>Scorecard</h6>
                  </div>
                </div>
              </div>
            )
          })}</div>
        </div>
      </div>












    </div>
  )
}

export default Live;