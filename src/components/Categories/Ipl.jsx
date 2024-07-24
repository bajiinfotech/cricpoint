import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// import '../../CssFiles/Wpl.css'


const Ipl = () => {
    const body = document.querySelector('#root');
	body.scrollIntoView({
	}, [])

    const [cat, setCat] = useState([])
    const [page, setPage] = useState(1)
    const [nrofpages, setNumberofpage] = useState(1);

    useEffect(() => {
        getpost()
    }, [page, setCat])

    // Event handler: Decrease page count no lower then 1.
    const showPrevPage = () => setPage(page - 1 ? page - 1 : 1);
    // Event handler: Increase page count no higher then nrofpages.
    const showNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);


    const getpost = async () => {

        const url = `https://cricpoint.in/wp-json/wp/v2/posts?_embed&per_page=9&categories=2&page=${page}`
        await axios.get(url).then((res) => {
            setCat(res.data);
            setNumberofpage(res.headers["x-wp-totalpages"]);
            // console.log(res.data)
        });
    }

    // console.log('cat', cat)
    return (
        <div className='container '>
            <Helmet>
                <title>IPL News, IPL 2023 Updates, Squads & Results</title>
                <meta name='description' content=" IPL Live Score Today: Get all the latest Indian Premier League (IPL) score, Tata IPL 2023 news, match updates, squads, playing11 & fantasy updates on ..." />
                <link rel="canonical" href="https://cricpoint.in/indian-premier-league" />
            </Helmet>
            <div className="container">
                <div className="row">
                    {cat.map((po) => {
                        return (
                            <div key={po.id} class="card m-4 cards" style={{ width: "18rem" }}>
                                <img class=" image" style={{width:"auto", height:"200px"}} src={po.featured_media_src_url} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title" dangerouslySetInnerHTML={{ __html: po.title.rendered}}></h5>
                                    <p class="card-text" dangerouslySetInnerHTML={{ __html: po.excerpt.rendered.slice(0, 150) }}></p>
                                    {/* <link to="/post/${po.id}">read more</link> */}
                                    <Link to={`/post/${po.slug}`} class="btn btns btn-primary">Read More..</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* pagination srction */}
            <div className="posts-post-nav">
                <button onClick={showPrevPage}>&#60;</button>
                <p>
                    Page {page} of {nrofpages}
                </p>
                <button onClick={showNextPage}>&#62;</button>
            </div>
        </div>
    )
}

export default Ipl;