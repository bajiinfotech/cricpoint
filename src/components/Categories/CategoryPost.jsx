import React, { useEffect, useState } from 'react';
import Moment from "react-moment";
import Loader from "../../loader.gif";
import axios from "axios";
import clientConfig from "../../client-config";
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { Helmet } from 'react-helmet-async';
import Latest from '../Home/Home/Latest';
import Pagenotfound from '../Common/Pagenotfound';




const SinglePost = () => {
	const [state, setState] = useState([])

	const { slug } = useParams()

	// for load from top 
	const body = document.querySelector('#root');
	body.scrollIntoView({
	}, [])



	useEffect(() => {

		getdata()

	}, [slug])

	const getdata = () => {
		const wordPressSiteURL = clientConfig.siteUrl;
		axios.get(`${wordPressSiteURL}/wp-json/wp/v2/posts?slug=${slug}`)
			.then(res => {
				setState(res.data[0])
				// console.log(res.data[0])
			}).catch((err) => {
				alert("no result")
			})
	}

	// link for helmet 
	const link = `https://cricpoint.in/post/${slug}`

	return (
		<div className='container'>

			<div className='row'>
				<div className="col-lg-8">


					{Object.keys(state).length ? (

						<div className=" posts-container">
							<Helmet>
								<title >{state.title.rendered}</title>
								<meta
									name='description'
									content={state.excerpt.rendered.slice(3, 160)}
								/>
								<meta property="og:title" content={state.title.rendered} />
								<meta property="og:description" content={state.excerpt.rendered.slice(3, 160)} />
								<meta property="og:image" content={state.fimg_url} />
								<link rel="canonical" href={link} />
								<meta property="og:url" content={link} />
								<meta property="og:type" content="website" />
							</Helmet>


							<div className=" border-dark" style={{ maxWidth: '80rem' }}>
								
								<div className="">
									<h1 className='post-title' dangerouslySetInnerHTML={{__html:state.title.rendered}}>
									
									</h1>
								</div>
								<div className="card">
									<div className="">
										<img className='img-fluid' src={state.featured_media_src_url} alt="" />
									</div>
									<div className='card-body'>
										<p className="catsingle card-text" dangerouslySetInnerHTML={{ __html: state.content.rendered }}></p>
									</div>
								</div>
								<div className="card-footer"><Moment fromNow >{state.date}</Moment></div>
							</div>


						</div>

					) : (<div>
						<img className="loader" src={Loader} alt="Loader" />
					</div>)}


				</div>


				<div className="col-lg-4">
					<Sidebar />
				</div>



			</div>
			<div>
				{/* related post section  */}
				<Latest />
			</div>
		</div>
	)
}

export default SinglePost

