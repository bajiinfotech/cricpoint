import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import Logo from '../../Images/cricpoint.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment'


const Sidebar = () => {

  const [post, setPost] = useState([])


  useEffect(() => {
    getpost()
  }, [])


  const getpost = async () => {

    const url = `https://cricpoint.in/wp-json/wp/v2/posts?_embed&per_page=5`
    await axios.get(url).then((res) => {
      setPost(res.data);
      // setNumberofpage(res.headers["x-wp-totalpages"]);
      // console.log(res.data)
    });
  }


  return (
    <div>
      <h4>Latest Posts</h4>
      {post.map((po) => {
        return (
          <div key={po.id} class="media">
            <img class="align-self-center img-fluid mr-2" src={po.featured_media_src_url} alt="Generic placeholder image" />
            <div class="media-body mt-2">
              <p class="mt-0"> <Link to={`/post/${po.slug}`}>
                <span dangerouslySetInnerHTML={{ __html: po.title.rendered }}></span>
              </Link> <br /> <Moment format='MMMM Do YYYY' >{po.date}</Moment></p>

            </div>
          </div>
        )
      })}


    </div>
  )
}

export default Sidebar