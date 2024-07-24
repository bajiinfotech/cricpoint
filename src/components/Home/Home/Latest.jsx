import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../Common/heading.css'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
const Latest = () => {



    const [posts, setPosts] = useState([])

    useEffect(() => {
        GetPost()
    }, [])

    const GetPost = async () => {
        axios.get(`https://cricpoint.in/wp-json/wp/v2/posts?categories=2&per_page=6`).then((result) => {
            // console.log(result.data)
            setPosts(result.data)
        }).catch((err) => {
            alert("please check uel")
        });
    }
    return (
        <div>
            <div className='heading'>
                <h6>Latest News</h6>
            </div>
            <div className='container'>
                <div className="row">

                
                {posts.map((post, index) => {
                    return (
                        <div key={post.id} className="card m-1" style={{ width: "25rem" }}>
                            <div class="media" >
                                <img class="align-self-center mr-3 img-fluid" src={post.featured_media_src_url} alt="" />
                                <div class="media-body">
                                    <Link to={`/post/${post.slug}`}>
                                        <h6 class="pt-1"dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h6>
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

export default Latest