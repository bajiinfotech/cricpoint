import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../Common/heading.css'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const Prediction = () => {

    const [pos, setPos] = useState([])

    useEffect(() => {
        gets()
    }, [])

    const gets = async () => {
        axios.get(`https://cricpoint.in/wp-json/wp/v2/posts?categories=11069&per_page=3`).then((res) => {
            // console.log(res.data)
            setPos(res.data)
        }).catch((err) => alert(err))
    }

    return (
        <div>
            <div className='heading'>
                <h6>Dream11 Predictions</h6>
            </div>

            <div className='container'>
                <div className="row">
                    {pos.map((post, index) => {
                        return (
                            <div key={post.id} className="card shadow-lg p-3 mb-3 bg-white rounded" >
                                <div class="media" >
                                    <img class="align-self-center mr-3 img-fluid" src={post.featured_media_src_url} alt={post.title.rendered} />
                                    <div class="media-body p-3">
                                        <Link to={`/post/${post.slug}`}>
                                            <h6 class="pt-1" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h6>
                                        </Link>
                                        <p class="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                        <Moment fromNow >{post.date}</Moment>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Prediction