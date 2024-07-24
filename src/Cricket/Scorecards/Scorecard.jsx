import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Scorecard = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const [post, setPost] = useState([])
    const [score, setScore] = useState([])

    useEffect(() => {
        Getscorecards()
    }, [])

    const [scorecard, setScorecard] = useState([])
    const Getscorecards = async () => {
        await axios.get(`https://api.cricapi.com/v1/match_scorecard?apikey=ef54ecd7-78ec-4a47-827d-61b21672e925&id=${id}`).then((result) => {
            // console.log(result.data)
            if (result.data.status == "failure") {
                navigate("/")
            }
            else {
                const score = result.data
                setPost(score.data)
                setScore(score.data.score)
                setScorecard(score.data.scorecard)
            }


        }).catch((err) => {
            // alert("Soory Scorecard Not Fount")
            navigate("/")
        });
    }

    console.log({ id })
    return (
        <div className='container'>

            <div className=''>
                {post.status == "failure" ? (
                    <div>
                        Match Has Not Started
                    </div>
                ) : (
                    <div>
                        {/* Match Details  */}
                        <div>
                            {score.map((inn) => {
                                return (
                                    <div>
                                        <div>
                                            {inn.inning.slice(0, -8)} {inn.r}/{inn.w} ({inn.o})
                                        </div>

                                    </div>
                                )
                            })}
                            <div>
                                <h5>
                                    {post.status}
                                </h5>
                            </div>

                            <div>
                                <h3>
                                    Score Card
                                </h3>
                                <div>
                                    {scorecard.map((scor) => {
                                        return (
                                            <div>

                                                {/* Batting stats  */}

                                                <h6 className='bg-primary p-2 text-white' >{scor.inning.slice(0, -8)}</h6>

                                                <table className='table table-striped table-responsive-sm'>

                                                    <thead className='bg-dark text-white'>
                                                        <tr>
                                                            <th>Batter</th>
                                                            <th>Dismissal</th>
                                                            <th>R</th>
                                                            <th>B</th>
                                                            <th>4s</th>
                                                            <th>6s</th>
                                                            <th>Sr</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {scor.batting.map((batt) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{batt.batsman.name}</td>
                                                                        <td>{batt['dismissal-text']}</td>
                                                                        {/* <td>{batt.bowler.name}</td> */}
                                                                        <td>{batt.r}</td>
                                                                        <td>{batt.b}</td>
                                                                        <td>{batt['4s']}</td>
                                                                        <td>{batt['6s']}</td>
                                                                        <td>{batt.sr}</td>
                                                                    </tr>

                                                                </>
                                                            )
                                                        })}

                                                        {/* Extras  */}

                                                    </tbody>
                                                    <tfoot className=''>
                                                        <tr>
                                                            <td>Extras</td>
                                                            <td className='text-center' colSpan={5}>    <strong>{scor.extras.r} </strong>(b 0, lb {scor.extras.lb}, w {scor.extras.w}, nb {scor.extras.nb}, p {scor.extras.p})</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total</td>
                                                            <td className='text-center' colSpan={5}>
                                                                <strong>{scor.totals.R}</strong> ({scor.totals.W} wkts, {scor.totals.O} Ov)</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>


                                                {/* Bowling Stats  */}
                                                {/* <h4 colspan="4">Bowling Stats</h4> */}
                                                <table className='table table-striped table-responsive-sm mb-5'>

                                                    <thead className='bg-primary'>
                                                        <tr>
                                                            <th>Bowler</th>
                                                            <th>O</th>
                                                            <th>M</th>
                                                            <th>R</th>
                                                            <th>W</th>
                                                            <th>NB</th>
                                                            <th>WD</th>
                                                            <th>Eco</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {scor.bowling.map((ball) => {
                                                            return (
                                                                <tr>
                                                                    <td>{ball.bowler.name}</td>
                                                                    <td>{ball.o}</td>
                                                                    <td>{ball.m}</td>
                                                                    <td>{ball.r}</td>
                                                                    <td>{ball.w}</td>
                                                                    <td>{ball.nb}</td>
                                                                    <td>{ball.wd}</td>
                                                                    <td>{ball.eco}</td>

                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>

                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                        <div className='mt-4'>
                            {/* Match Info  */}
                            <table class="table table-striped mt-3">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className='bg-dark text-white'>Match Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Status</td>
                                        <td>{post.status}</td>
                                    </tr>
                                    <tr>
                                        <td>Match Winner</td>
                                        <td>{post.matchWinner}</td>
                                    </tr>
                                    <tr>
                                        <td>Toss Winner</td>
                                        <td>{post.tossWinner}</td>
                                    </tr>
                                    <tr>
                                        <td>Venue</td>
                                        <td>{post.venue}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>{post.date}</td>
                                    </tr>
                                    <tr>
                                        <td>Match Type</td>
                                        <td>{post.matchType}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Scorecard