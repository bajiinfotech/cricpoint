import React from 'react';
import FeaturedImage from "./FeaturedImage";
import { Link } from 'react-router-dom';
import { sanitize } from "../../utils/functions";

export const Post = (props) => {


	return (
		
			<div class="card" style={{ width: "18rem" }}>
				<img class="" src={props.image} alt="" />
				<div class="card-body">
					<h3>{props.title}</h3>
					<p class="card-text" dangerouslySetInnerHTML={{ __html: props.content }}></p>
					{/* <p>{props.content}</p> */}
					<Link to={`/post/${props.id}`} class="btn btn-primary">Read More..</Link>
					{/* <p>{props.id}</p> */}
				</div>
			</div>
		
	)
};
