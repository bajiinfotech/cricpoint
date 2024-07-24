import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// import '../../CssFiles/Wpl.css'


const Dream11 = () => {

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

        const url = `https://cricpoint.in/wp-json/wp/v2/posts?_embed&per_page=9&categories=11069&page=${page}`
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
                <title>Dream11 Prediction Today Match</title>
                <meta name='description' content=" ream11 prediction for today's match, winning dream11 team, fantasy cricket tips, probable 11 and playing 11 updates on Sportskeeda for the cricket games" />
                <link rel="canonical" href="https://cricpoint.in/dream11-prediction" />
            </Helmet>
            <div className="container">
                <div className="row">
                    {cat.map((po) => {
                        return (
                            <div key={po.id} class="card m-4 cards" style={{ width: "18rem" }}>
                                <img class=" image" style={{width:"auto", height:"200px"}} src={po.featured_media_src_url} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title"dangerouslySetInnerHTML={{ __html: po.title.rendered}}></h5>
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

export default Dream11;