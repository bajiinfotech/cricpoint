import React, { useState, useEffect } from 'react';
import { Post } from './layouts/Post';
import Sidebar from './Sidebar/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from "../loader.gif";

import Moment from 'react-moment';
import moment from 'react-moment';

const Blogs = () => {

	const body = document.querySelector('#root');
    body.scrollIntoView({
    }, [])


	const baseTitle = "Sabhitech";
	const baseUrl = "https://cricpoint.in";
	const baseLogo = `${baseUrl}/wp-content/themes/gtis/img/logo.png`;
	

	// Track state for posts, current page and number of pages
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [nrofpages, setNumberofpage] = useState(1);
	

	// When the page number changes call the api for posts.
	useEffect(() => {
		axios.get(`${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=10&page=${page}`

		).then((response) => {
			// console.log(response)
			// Store the number of posible pages.
			setNumberofpage(response.headers["x-wp-totalpages"]);
			// Store the posts from the response.
			setPosts(response.data);
		});
	}, [page, setPosts]);

	// Event handler: Decrease page count no lower then 1.
	const showPrevPage = () => setPage(page - 1 ? page - 1 : 1);
	// Event handler: Increase page count no higher then nrofpages.
	const showNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);


	return (
		<div className='container'>
			{/* <div className="row">
				<div className='col-md-9'>
					<Posts pageId={1} />
				</div>
				<div className='col-md-3'>
					<Sidebar/>
				</div>
			</div> */}
			<div className="row">
				<div className='col-lg-9 mb-2'>
					{/* {error && <div className="alert alert-danger" dangerouslySetInnerHTML={this.createMarkup(error)} />} */}
					<div>
						{posts.length ? (
							<div className="">
								{posts.map(post => (
									<div key={post.id} className="card border-dark mb-3" style={{ maxWidth: '50rem' }}>
										<div className="card-header">
											<Link to={`/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
												<p dangerouslySetInnerHTML={{ __html: post.title.rendered }}></p>
												{/* {renderHTML( post.title.rendered )} */}
											</Link>
										</div>
										<div className="card-body">
											<div>
											<img class="card-img-top img-fluid" src={post.featured_media_src_url} alt={post.title.rendered} />
											</div>
											<div className="card-text post-content">
												<p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
												{/* {renderHTML(post.excerpt.rendered)} */}
											</div>
										</div>
										<div className="card-footer">
											<Moment fromNow >{post.date}</Moment>
											<Link to={`/post/${post.slug}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
												Read More...
											</Link>
										</div>
									</div>
								))}
							</div>
						) : (<div>
							<img className="loader" src={Loader} alt="Loader" />
						</div>)}
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
				<div className="col-lg-3">
					<Sidebar />
				</div>
			</div>








		</div>
	)
};

export default Blogs;
