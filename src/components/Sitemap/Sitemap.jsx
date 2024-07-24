import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Sitemap = () => {



  const [url, setUrl] = useState([])

  useEffect(() => {
    geturl()
  }, [])

  const geturl = async () => {
    axios.get(`https://sabhitech.com/wp-json/wp/v2/posts?categories=1262&_fields[]=slug&per_page=100`).then((res) => {
      // console.log(res.data)
      setUrl(res.data)
    }).catch((err) => alert("url error"))
  }

  
  return (
    <>
      <div className='container'>

        {url.map((po, index) => {
          return (
            <ul>
              <li>
              <Link to={`/${po.slug}`} >https://cricpoint.in/{po.slug}</Link>
              </li>
            </ul>
          )
        })}

      </div>

    </>
  )

}

export default Sitemap