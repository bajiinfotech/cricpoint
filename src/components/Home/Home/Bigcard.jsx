import axios from 'axios'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Bigcard = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getposts()
    }, [])

    const getposts = async () => {
        axios.get(`https://cricpoint.in/wp-json/wp/v2/posts?categories=2&per_page=6`).then((result) => {
            // console.log(result.data)
            setPosts(result.data)
        }).catch((err) => alert("please check url"))
    }

    return (
        <div>
            <div className='heading'>
                <h6>IPL 2023</h6>
            </div>
            <div className="container">
                <div className="row">
                    {posts.map((post, index) => {
                        return (
                            <div className="card m-2" style={{ width: "16rem" }}>
                                <img class="img-fluid" src={post.featured_media_src_url} alt={post.title.rendered} />
                                <div class="card-body" >
                                    <div class="media-body">
                                        <Link to={`/post/${post.slug}`}>
                                            <h6 class="pt-1" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h6>
                                        </Link>
                                        <Moment fromNow >{post.date}</Moment>
                                        {/* <p class="card-text" dangerouslySetInnerHTML={{ __html: po.excerpt.rendered }}></p> */}

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

export default Bigcard