import React from "react"
import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <>

            <div className='box'>
                <div className='img'>
                    <img src={props.cover} alt='' />
                </div>
                <div className='text'>
                    <span className='category'>{props.catgeory}</span>
                    {/* <h1 className='titleBg'>{props.title}</h1> */}
                    <Link to={`/post/${props.slug}/`}>
                        <h4 className='titleBg' dangerouslySetInnerHTML={{__html:props.title}}></h4>
                    </Link>
                    <div className='author flex'>
                        <span>by {props.authorName}</span>
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
